# Installs the running copies of the deploy scripts outside the repo checkout,
# so nothing that edits the site can also edit its deploy path.
#
#   make install        # scripts only
#   make install-all    # scripts, systemd units, Caddyfile

SITE_ROOT ?= /srv/merlinfuchs
DEPLOY_USER ?= deploy
IMAGE ?= merlinfuchs-deploy:latest

.PHONY: image install install-all install-systemd install-caddy check test

# The scripts ship inside the image. Rebuild deliberately after reviewing a
# change to them — that is what keeps deploy code out of an agent's reach.
image: test
	docker build -t $(IMAGE) .

# Only needed if you run the scripts on the host instead of in a container.
install:
	install -m 0755 -o $(DEPLOY_USER) -g $(DEPLOY_USER) deploy.sh sync.sh $(SITE_ROOT)/bin/

install-systemd:
	install -m 0644 merlinfuchs-sync.service merlinfuchs-sync.timer /etc/systemd/system/
	systemctl daemon-reload

install-caddy:
	install -m 0644 Caddyfile /etc/caddy/Caddyfile
	caddy validate --config /etc/caddy/Caddyfile
	systemctl reload caddy

install-all: install install-systemd install-caddy

# Run both before installing a change — these scripts can take the site down.
test:
	./test.sh

check:
	shellcheck deploy.sh sync.sh test.sh
