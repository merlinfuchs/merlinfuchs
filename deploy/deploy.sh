#!/usr/bin/env bash
#
# Build one target (live or preview) at a given ref and swap it in atomically.
#
#   deploy.sh live main
#   deploy.sh preview claude/add-records-section
#
# Nothing is swapped unless the build succeeds, so a broken branch leaves the
# previous release serving. Set FORCE=1 to rebuild a ref that is already live.
#
# Config comes from /etc/merlinfuchs.env if present; every value has a default.

set -euo pipefail

[ -r /etc/merlinfuchs.env ] && . /etc/merlinfuchs.env

: "${SITE_ROOT:=/srv/merlinfuchs}"
: "${REPO_URL:=https://github.com/merlinfuchs/merlinfuchs.git}"
: "${KEEP_RELEASES:=5}"
: "${NPM:=npm}"

target=${1:?usage: deploy.sh <live|preview> <ref>}
ref=${2:?usage: deploy.sh <live|preview> <ref>}

case "$target" in
  live | preview) ;;
  *)
    echo "deploy: target must be 'live' or 'preview', got '$target'" >&2
    exit 2
    ;;
esac

checkout="$SITE_ROOT/checkouts/$target"
releases="$SITE_ROOT/releases/$target"
link="$SITE_ROOT/current-$target"
stamp="$SITE_ROOT/.deployed-$target"

log() { printf '[%s %s] %s\n' "$(date -u +%H:%M:%S)" "$target" "$*"; }

mkdir -p "$SITE_ROOT/checkouts" "$releases" "$SITE_ROOT/.npm/$target"

# Per-target lock, so live and preview never wait on each other — they touch
# entirely separate checkouts, releases and symlinks.
exec 9>"$SITE_ROOT/.lock-$target"
flock -n 9 || {
  log "a deploy is already running, skipping this tick"
  exit 0
}

# npm wants a writable HOME, and its own cache per target so two concurrent
# builds can't race in it.
export HOME="${HOME:-$SITE_ROOT}"
export npm_config_cache="$SITE_ROOT/.npm/$target"

if [ ! -d "$checkout/.git" ]; then
  log "cloning $REPO_URL"
  git clone --quiet "$REPO_URL" "$checkout"
fi

git -C "$checkout" fetch --quiet --prune origin

if ! sha=$(git -C "$checkout" rev-parse --verify --quiet "origin/$ref^{commit}"); then
  log "ref 'origin/$ref' not found — nothing to do"
  exit 0
fi

if [ "${FORCE:-}" != "1" ] && [ -e "$link" ] && [ "$(cat "$stamp" 2>/dev/null || true)" = "$sha" ]; then
  exit 0
fi

log "building $ref at ${sha:0:8}"

git -C "$checkout" checkout --quiet --force --detach "$sha"
# Keep node_modules and our own stamp; drop everything else the build left behind.
git -C "$checkout" clean -qfdx -e node_modules -e .lockhash

# Reinstall only when the lockfile actually changed.
lockhash=$(sha256sum "$checkout/package-lock.json" | cut -d' ' -f1)
if [ ! -d "$checkout/node_modules" ] || [ "$(cat "$checkout/.lockhash" 2>/dev/null || true)" != "$lockhash" ]; then
  log "npm ci"
  (cd "$checkout" && "$NPM" ci --no-audit --no-fund --loglevel=error)
  echo "$lockhash" >"$checkout/.lockhash"
fi

rm -rf "$checkout/dist"
(cd "$checkout" && "$NPM" run build --silent)

release="$releases/$sha"
rm -rf "$release"
mv "$checkout/dist" "$release"

# Atomic swap: create the new symlink beside the old one, then rename over it.
# `ln -sfn` unlinks first, which briefly leaves no site at all.
ln -s "$release" "$link.tmp.$$"
mv -Tf "$link.tmp.$$" "$link"
echo "$sha" >"$stamp"

log "live at ${sha:0:8}"

# Keep the newest KEEP_RELEASES for rollback, drop the rest.
# shellcheck disable=SC2012
ls -1dt "$releases"/*/ 2>/dev/null | tail -n "+$((KEEP_RELEASES + 1))" | while read -r old; do
  [ "$old" = "$release/" ] || rm -rf "$old"
done
