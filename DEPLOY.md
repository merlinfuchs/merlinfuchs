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

## Setting up a fresh Ubuntu server

Assumes DNS for `merlinfuchs.com`, `www` and `preview` already points at the box,
and ports 80/443 are reachable. The repo is public, so nothing here needs a
deploy key or a token.

### 1. Packages

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y docker.io git make

# Caddy, from its own apt repo — the version in universe lags
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https curl
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' \
  | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' \
  | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update && sudo apt install -y caddy
```

If `ufw` is on, Caddy needs both ports — 80 is used for the certificate
challenge, not just redirects:

```bash
sudo ufw allow 80,443/tcp
```

### 2. A user to own the files

It runs nothing. The systemd units run as root and shell out to `docker`; the
container drops to this uid so releases aren't root-owned. No docker group
membership for anyone.

```bash
sudo useradd --system --home-dir /srv/merlinfuchs --shell /usr/sbin/nologin deploy
sudo mkdir -p /srv/merlinfuchs
sudo chown deploy:deploy /srv/merlinfuchs
id -u deploy          # note this
```

### 3. Source, for building the image and installing config

Separate from `/srv/merlinfuchs`, which the deploy owns and manages.

```bash
sudo git clone https://github.com/merlinfuchs/merlinfuchs.git /opt/merlinfuchs-src
cd /opt/merlinfuchs-src && sudo git checkout desk
```

### 4. Config

```bash
sudo install -m 0644 deploy/config.example.env /etc/merlinfuchs.env
sudoedit /etc/merlinfuchs.env     # set DEPLOY_UID if step 2 wasn't 1001
```

`/etc/merlinfuchs.env` is world-readable on purpose — systemd reads it for
`DEPLOY_UID`, and it holds no secrets. If you ever add `GH_TOKEN`, chmod it 0640
and give it to root.

### 5. Build the image

Runs the test suite first, then builds. Takes a couple of minutes on a small box,
mostly pulling `node:22-bookworm-slim`.

```bash
sudo make -C deploy image
```

### 6. Timers

```bash
sudo install -m 0644 deploy/merlinfuchs-{live,preview}.{service,timer} /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now merlinfuchs-live.timer merlinfuchs-preview.timer
```

### 7. First build, before pointing Caddy at it

The first run clones and installs dependencies, so give it a minute. Watch it
rather than guessing:

```bash
sudo systemctl start merlinfuchs-live.service
journalctl -u merlinfuchs-live.service -f
```

Then confirm there's something to serve:

```bash
ls -l /srv/merlinfuchs/current-live
cat /srv/merlinfuchs/current-live/index.html | head -5
```

### 8. Caddy

```bash
sudo install -m 0644 deploy/Caddyfile /etc/caddy/Caddyfile
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
journalctl -u caddy -f      # watch the certificates get issued
```

Certificates are automatic on first request. If it fails, it's almost always DNS
not resolving yet or port 80 blocked.

### 9. Check it

```bash
curl -sI https://merlinfuchs.com | head -3
curl -sI https://preview.merlinfuchs.com | grep -i x-robots-tag

# www is a 301 to the apex, path and query intact
curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\n" \
  https://www.merlinfuchs.com/posts/ai-in-a-box

# Caddy runs as its own `caddy` user, not root. If it can't read the release it
# answers 403, which looks like a config problem but isn't.
sudo -u caddy cat /srv/merlinfuchs/current-live/index.html >/dev/null && echo "readable"
```

Then let the preview timer prove itself: push any branch, wait 30s, and load
`preview.merlinfuchs.com`.

### Updating the deploy tooling later

The scripts run from the image, so a change to them needs a deliberate rebuild:

```bash
cd /opt/merlinfuchs-src && sudo git pull
sudo make -C deploy image      # runs the tests
sudo install -m 0644 deploy/merlinfuchs-*.{service,timer} /etc/systemd/system/
sudo systemctl daemon-reload
```

### Without Docker

Install Node 22+ and git on the host, run `make -C deploy install`, and swap the
`ExecStart` block in each unit for the commented-out one. The scripts are
identical either way.

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
