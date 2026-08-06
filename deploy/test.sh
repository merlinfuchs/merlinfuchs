#!/usr/bin/env bash
#
# Tests deploy.sh and sync.sh against a throwaway repo. Run before installing a
# change to either — they're the scripts that can take the site down.
#
#   ./test.sh
#
# Re-runs itself inside a Linux container, because the scripts use GNU `mv -T`,
# `flock` and `sha256sum`, none of which behave the same on macOS.

set -euo pipefail

: "${IMAGE:=node:22-bookworm-slim}"

if [ "${IN_CONTAINER:-}" != "1" ]; then
  here=$(cd "$(dirname "$0")" && pwd)
  work=$(mktemp -d)
  trap 'rm -rf "$work"' EXIT
  cp "$here"/deploy.sh "$here"/sync.sh "$here"/test.sh "$work/"
  exec docker run --rm -e IN_CONTAINER=1 -v "$work":/work -w /work "$IMAGE" \
    bash -c 'apt-get update -qq >/dev/null 2>&1 &&
             apt-get install -y -qq git >/dev/null 2>&1 &&
             bash /work/test.sh'
fi

GREEN=$'\033[32m' RED=$'\033[31m' OFF=$'\033[0m'
pass() { echo "${GREEN}PASS${OFF} $*"; }
fail() {
  echo "${RED}FAIL${OFF} $*"
  exit 1
}

export HOME=/work BIN=/work
git config --global user.email t@t
git config --global user.name t
git config --global init.defaultBranch main
git config --global --add safe.directory '*'

# A repo shaped like the real one: a lockfile, and a build that writes dist/.
new_repo() {
  local dir=$1 marker=$2
  rm -rf "$dir"
  mkdir -p "$dir"
  (
    cd "$dir"
    git init -q
    cat >package.json <<EOF
{ "name": "fixture", "version": "1.0.0", "private": true,
  "scripts": { "build": "mkdir -p dist && echo $marker > dist/index.html" } }
EOF
    npm install --package-lock-only --silent >/dev/null 2>&1
    git add -A && git commit -qm initial
  )
}

# Change what the build writes, and commit it.
set_marker() {
  local dir=$1 marker=$2
  (
    cd "$dir"
    sed -i "s/echo [a-zA-Z0-9-]* >/echo $marker >/" package.json
    git commit -qam "$marker"
  )
}

# ---------------------------------------------------------------- deploy.sh --

export SITE_ROOT=/work/site REPO_URL=/work/repo KEEP_RELEASES=2
rm -rf /work/site
new_repo /work/repo v1

echo "== deploy.sh =="

./deploy.sh live main >/dev/null
[ -L "$SITE_ROOT/current-live" ] || fail "no current-live symlink"
[ "$(cat "$SITE_ROOT/current-live/index.html")" = v1 ] || fail "wrong content"
pass "builds a ref and swaps the symlink"

before=$(readlink "$SITE_ROOT/current-live")
out=$(./deploy.sh live main)
[ -z "$out" ] || fail "expected no output, got: $out"
[ "$(readlink "$SITE_ROOT/current-live")" = "$before" ] || fail "symlink moved"
pass "skips a ref that is already deployed"

set_marker /work/repo v2
./deploy.sh live main >/dev/null
[ "$(cat "$SITE_ROOT/current-live/index.html")" = v2 ] || fail "missed the new commit"
pass "picks up a new commit"

good=$(readlink "$SITE_ROOT/current-live")
(cd /work/repo && sed -i 's/mkdir -p dist.*"/exit 1"/' package.json && git commit -qam broken)
if ./deploy.sh live main >/dev/null 2>&1; then fail "broken build reported success"; fi
[ "$(readlink "$SITE_ROOT/current-live")" = "$good" ] || fail "symlink moved despite failure"
[ "$(cat "$SITE_ROOT/current-live/index.html")" = v2 ] || fail "content changed"
pass "a failed build leaves the last good release serving"

(cd /work/repo && git checkout -q -b feature HEAD~1)
set_marker /work/repo feat
./deploy.sh preview feature >/dev/null
[ "$(cat "$SITE_ROOT/current-preview/index.html")" = feat ] || fail "preview wrong"
[ "$(cat "$SITE_ROOT/current-live/index.html")" = v2 ] || fail "live disturbed"
pass "live and preview are independent"

./deploy.sh preview no-such-branch >/dev/null || fail "unknown ref should exit 0"
[ "$(cat "$SITE_ROOT/current-preview/index.html")" = feat ] || fail "preview changed"
pass "an unknown ref is a no-op, not an error"

for m in a b c; do
  set_marker /work/repo "$m"
  ./deploy.sh preview feature >/dev/null
done
kept=$(find "$SITE_ROOT/releases/preview" -mindepth 1 -maxdepth 1 -type d | wc -l)
[ "$kept" -le "$KEEP_RELEASES" ] || fail "kept $kept releases, want <= $KEEP_RELEASES"
[ "$(cat "$SITE_ROOT/current-preview/index.html")" = c ] || fail "pruned the live release"
pass "prunes old releases but keeps the serving one"

prev=$(find "$SITE_ROOT/releases/preview" -mindepth 1 -maxdepth 1 -type d |
  grep -v "$(readlink "$SITE_ROOT/current-preview")" | head -1)
ln -s "$prev" "$SITE_ROOT/current-preview.tmp"
mv -Tf "$SITE_ROOT/current-preview.tmp" "$SITE_ROOT/current-preview"
[ "$(cat "$SITE_ROOT/current-preview/index.html")" = b ] || fail "rollback served the wrong release"
pass "rollback is a symlink swap"

# ------------------------------------------------------------------ sync.sh --

export SITE_ROOT=/work/site2 REPO_URL=/work/repo2
rm -rf /work/site2
new_repo /work/repo2 main-one

echo
echo "== sync.sh =="

./sync.sh live && ./sync.sh preview
main_sha=$(git -C /work/repo2 rev-parse main)
[ "$(cat "$SITE_ROOT/.deployed-live")" = "$main_sha" ] || fail "live not on main"
[ "$(cat "$SITE_ROOT/.deployed-preview")" = "$main_sha" ] || fail "preview should fall back to main"
pass "with no open branches, preview mirrors live"

(cd /work/repo2 && git checkout -q -b claude/first && echo x >f && git add -A && git commit -qm first && git checkout -q main)
./sync.sh preview
[ "$(cat "$SITE_ROOT/.deployed-preview")" = "$(git -C /work/repo2 rev-parse claude/first)" ] ||
  fail "preview did not follow the branch"
pass "preview follows a feature branch"

sleep 1 # committerdate has one-second resolution
(cd /work/repo2 && git checkout -q -b claude/second && echo y >g && git add -A && git commit -qm second && git checkout -q main)
./sync.sh preview
[ "$(cat "$SITE_ROOT/.deployed-preview")" = "$(git -C /work/repo2 rev-parse claude/second)" ] ||
  fail "did not pick the newest branch"
pass "the most recently pushed branch wins"

# A branch already contained in LIVE_BRANCH is finished work, not something to
# review — this is what stops preview parking on a stale branch.
(cd /work/repo2 && git checkout -q main && git merge -q --no-ff -m merged claude/second && git checkout -q main)
./sync.sh live >/dev/null
./sync.sh preview
[ "$(cat "$SITE_ROOT/.deployed-preview")" = "$(git -C /work/repo2 rev-parse claude/first)" ] ||
  fail "previewed a branch already merged into live"
pass "an already-merged branch is not previewed"

PREVIEW_REF=claude/first ./sync.sh preview
[ "$(cat "$SITE_ROOT/.deployed-preview")" = "$(git -C /work/repo2 rev-parse claude/first)" ] ||
  fail "PREVIEW_REF was ignored"
pass "PREVIEW_REF pins preview to one branch"

[ "$(cat "$SITE_ROOT/.deployed-live")" = "$(git -C /work/repo2 rev-parse main)" ] || fail "live drifted"
pass "live tracks main throughout"

(
  exec 9>"$SITE_ROOT/.lock-preview"
  flock 9
  sleep 2
) &
sleep 0.3
start=$SECONDS
./sync.sh preview
[ $((SECONDS - start)) -lt 2 ] || fail "overlapping run waited instead of exiting"
wait
pass "an overlapping tick exits rather than queueing"

# The reason live and preview are separate units: a slow or wedged preview
# build must never hold up a merge going out to the live site.
(
  exec 9>"$SITE_ROOT/.lock-preview"
  flock 9
  sleep 3
) &
sleep 0.3
(cd /work/repo2 && git checkout -q main && echo z >h && git add -A && git commit -qm later)
start=$SECONDS
./sync.sh live >/dev/null
[ $((SECONDS - start)) -lt 3 ] || fail "live waited on the preview lock"
[ "$(cat "$SITE_ROOT/.deployed-live")" = "$(git -C /work/repo2 rev-parse main)" ] ||
  fail "live did not deploy while preview was busy"
wait
pass "a busy preview never blocks live"

echo
echo "${GREEN}all tests passed${OFF}"
