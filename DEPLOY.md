# Deploying merlinfuchs.com

Two static sites on one VPS, built from GitHub by a timer:

| URL                      | Serves                                      |
| ------------------------ | ------------------------------------------- |
| `merlinfuchs.com`        | `main`                                      |
| `preview.merlinfuchs.com`| the newest open pull request, else `main`   |

Nothing agentic runs on the box. It clones, builds and swaps a symlink — the
same thing a CI runner does — so it only ever needs **read** access to the repo.

The build toolchain lives in a container, so the host needs only Docker, Caddy
and a systemd timer. Node, npm and its caches stay inside the image.

## The loop

1. Start a session in the Claude app (Code tab) and describe a change.
2. Claude pushes a branch and opens a PR.
3. Within a minute, `preview.merlinfuchs.com` is that branch.
4. Look at it on your phone. Keep talking to iterate — preview follows.
5. Merge the PR in the GitHub app.
6. Within a minute, `merlinfuchs.com` is the new `main`.

## Layout

```
/srv/merlinfuchs/
  bin/                     installed copies of the scripts (see the note below)
  checkouts/live/          clone, detached at the deployed commit
  checkouts/preview/       clone, detached at the branch under review
  releases/live/<sha>/     built output, last 5 kept
  releases/preview/<sha>/
  current-live    -> releases/live/<sha>       served by Caddy
  current-preview -> releases/preview/<sha>
  .npm/                    npm cache
```

> **The scripts run from the image, not from the checkout.** They live in this
> repo for version control, but what systemd executes is a copy baked into
> `merlinfuchs-deploy:latest`. Editing `deploy/deploy.sh` changes nothing until
> you review it and run `make -C deploy image` — which is what keeps deploy code
> out of reach of anything that edits the site.

## One-time setup

Assumes Debian/Ubuntu with Docker and Caddy installed.

```bash
# 1. A user that owns the site directory and nothing else. Note its uid —
#    it goes in the service unit's --user flag.
sudo useradd --system --create-home --home-dir /srv/merlinfuchs --shell /usr/sbin/nologin deploy
sudo mkdir -p /srv/merlinfuchs
sudo chown -R deploy:deploy /srv/merlinfuchs
id -u deploy

# 2. Config — edit before installing
sudo install -m 0640 -o deploy -g deploy deploy/config.example.env /etc/merlinfuchs.env
sudo -e /etc/merlinfuchs.env

# 3. Build the image (runs the test suite first)
make -C deploy image

# 4. Timers — set --user in both units to the uid from step 1 if it isn't 1001
sudo install -m 0644 deploy/merlinfuchs-{live,preview}.{service,timer} /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now merlinfuchs-live.timer merlinfuchs-preview.timer

# 5. Caddy
sudo install -m 0644 deploy/Caddyfile /etc/caddy/Caddyfile
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

To run without Docker instead, install Node 22+ and git on the host, run
`make -C deploy install`, and swap the `ExecStart` block in the service unit for
the commented-out one. The scripts are identical either way.

## Sharing the box with other projects

Give every project the same shape, so the fourth one takes ten minutes:

```
/srv/
  merlinfuchs/      this project
  someotherapp/     its own volume, its own image, its own timer or service
/etc/caddy/
  Caddyfile         imports conf.d/*.caddy
  conf.d/
    merlinfuchs.caddy
    someotherapp.caddy
```

Two things to keep in mind as more lands on the box:

- **Mount `SITE_ROOT` at the same absolute path inside the container.**
  `current-live` is an absolute symlink; mount it anywhere else and it resolves
  to nothing on the host, so Caddy serves 404s while the container reports
  success. This is the failure mode to remember.
- **A user in the `docker` group is effectively root.** Containerising here buys
  a clean host, not a privilege boundary. If you later run something on this box
  you don't fully trust, that wants rootless Docker, not a group membership.

Point `merlinfuchs.com`, `www` and `preview` at the box first — Caddy fetches
certificates on the first request and will retry noisily if DNS isn't ready.

## Everyday commands

Live and preview are two units sharing one image and one volume, so each has its
own schedule, its own log and its own lock.

```bash
# What is deployed right now
cat /srv/merlinfuchs/.deployed-live /srv/merlinfuchs/.deployed-preview

# Deploy immediately instead of waiting for the timer
sudo systemctl start merlinfuchs-preview.service

# Watch one of them
journalctl -u merlinfuchs-preview.service -f

# Deploy a specific branch by hand
docker run --rm --user 1001:1001 --env-file /etc/merlinfuchs.env \
  --env HOME=/srv/merlinfuchs --entrypoint /usr/local/bin/deploy.sh \
  -v /srv/merlinfuchs:/srv/merlinfuchs \
  merlinfuchs-deploy:latest preview some-branch

# Pin preview to one branch (or unset for "newest open PR")
sudo -e /etc/merlinfuchs.env    # PREVIEW_REF=my-branch

# Stop previewing without stopping deploys of main
sudo systemctl disable --now merlinfuchs-preview.timer
```

## Rollback

Releases are kept, so rolling back is a symlink swap and no rebuild:

```bash
ls -1t /srv/merlinfuchs/releases/live          # pick the previous sha
cd /srv/merlinfuchs
sudo -u deploy ln -s releases/live/<sha> current-live.tmp
sudo -u deploy mv -Tf current-live.tmp current-live
sudo -u deploy sh -c 'echo <sha> > .deployed-live'
```

Set `.deployed-live` too, or the next tick will rebuild `main` over the top.
The real fix is `git revert` on GitHub — this is for the two minutes in between.

## Notes

- **A failed build changes nothing.** The symlink only moves after a successful
  `astro build`, so a broken branch leaves the last good site serving. Look for
  the failure in `journalctl`, or on the PR's build check.
- **`npm ci` only runs when `package-lock.json` changes.** A normal content
  change rebuilds in a couple of seconds.
- **Private repo?** `REPO_URL` becomes an SSH URL and the `deploy` user needs a
  read-only deploy key. `gh` also needs `GH_TOKEN` to list PRs.
- **Preview is one slot.** Per-PR URLs would need wildcard DNS and a wildcard
  certificate, and the site's root-absolute links (`/posts`, `/software`) rule
  out serving PRs under a subpath without rebuilding with Astro's `base` set.
- **60s is a poll, not a webhook.** No inbound endpoint, no shared secret. If the
  wait ever annoys you, a webhook can call the same `sync.sh`.
