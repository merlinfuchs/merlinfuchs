#!/usr/bin/env bash
#
# Deploy one target. Runs as its own container on its own timer, so a broken
# preview build can't hold up the live site and the two have separate logs.
#
#   sync.sh live      → whatever LIVE_BRANCH points at
#   sync.sh preview   → the branch you are currently reviewing
#
# "Currently reviewing" means the most recently updated open pull request. With
# no open PRs, preview shows LIVE_BRANCH, so it always means "what's next" and
# matches live when nothing is pending. Set PREVIEW_REF to pin it.

set -euo pipefail

[ -r /etc/merlinfuchs.env ] && . /etc/merlinfuchs.env

: "${SITE_ROOT:=/srv/merlinfuchs}"
: "${REPO_URL:=https://github.com/merlinfuchs/merlinfuchs.git}"
: "${REPO_SLUG:=merlinfuchs/merlinfuchs}"
: "${LIVE_BRANCH:=main}"
: "${PREVIEW_REF:=}"
: "${BIN:=$SITE_ROOT/bin}"

target=${1:?usage: sync.sh <live|preview>}

# Ask GitHub which PR is newest. Falls back to the most recently committed
# remote branch, which needs no token and works fine for a repo of one.
resolve_preview_ref() {
  if [ -n "$PREVIEW_REF" ]; then
    echo "$PREVIEW_REF"
    return
  fi

  local ref=""
  if command -v gh >/dev/null 2>&1 && gh auth status >/dev/null 2>&1; then
    ref=$(gh pr list --repo "$REPO_SLUG" --state open \
      --json headRefName,updatedAt \
      --jq 'sort_by(.updatedAt) | reverse | .[0].headRefName' 2>/dev/null || true)
    [ "$ref" = "null" ] && ref=""
  fi

  # Fallback: the newest branch that still has work not in LIVE_BRANCH. The
  # --no-merged filter is what stops preview parking on a stale branch — an old
  # main that live has moved past, or a PR branch you merged but didn't delete.
  # Newest commit wins among those, which is also right when a branch gets
  # pushed to again. Two branches committed in the same second tie arbitrarily —
  # use gh, or pin PREVIEW_REF, if that ever matters.
  #
  # Fetch first, or we resolve against the previous tick's refs and take an
  # extra tick to notice a branch that has just appeared. deploy.sh fetches
  # again straight after, which is a no-op by then.
  if [ -z "$ref" ]; then
    local dir="$SITE_ROOT/checkouts/preview"
    # If any of this fails — no network, no repo yet — fall through to
    # LIVE_BRANCH rather than handing deploy.sh an empty ref.
    if { [ -d "$dir/.git" ] || git clone --quiet "$REPO_URL" "$dir"; } &&
      git -C "$dir" fetch --quiet --prune origin; then
      # deploy.sh is about to use this checkout; it doesn't need to fetch again.
      export SKIP_FETCH=1
      ref=$(git -C "$dir" for-each-ref \
        --sort=-committerdate --format='%(refname:short)' \
        --no-merged "origin/$LIVE_BRANCH" refs/remotes/origin 2>/dev/null |
        grep -vE "^origin/(HEAD|$LIVE_BRANCH)$" | head -1 | sed 's|^origin/||' || true)
    fi
  fi

  echo "${ref:-$LIVE_BRANCH}"
}

case "$target" in
  live)
    "$BIN/deploy.sh" live "$LIVE_BRANCH"
    ;;
  preview)
    "$BIN/deploy.sh" preview "$(resolve_preview_ref)"
    ;;
  *)
    echo "sync: target must be 'live' or 'preview', got '$target'" >&2
    exit 2
    ;;
esac
