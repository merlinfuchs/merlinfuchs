# The build toolchain, so the host needs nothing but Docker.
#
# The scripts are baked in rather than mounted, which also settles the question
# of running deploy code straight out of a checkout an agent can edit: changing
# deploy/deploy.sh in the repo does nothing until you deliberately rebuild this
# image. Review, `make test`, then `make image`.
#
#   docker build -t merlinfuchs-deploy deploy/

FROM node:22-bookworm-slim

# git for the checkouts; gh only if you want exact "newest open PR" ordering
# rather than the newest-commit fallback (and it's required for private repos).
RUN apt-get update \
    && apt-get install -y --no-install-recommends git ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY deploy.sh sync.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/deploy.sh /usr/local/bin/sync.sh

# sync.sh finds deploy.sh here.
ENV BIN=/usr/local/bin

ENTRYPOINT ["/usr/local/bin/sync.sh"]
