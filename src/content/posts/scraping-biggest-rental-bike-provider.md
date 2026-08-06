---
title: Scraping the biggest rental bike provider
description: A normal question about where the bikes are, answered with far too much infrastructure.
date: 2026-03-04
category: sundries
kind: hack
aside: the map was worth it
---

Placeholder copy — the real write-up goes here.

It started with a question you could answer by looking out of a window: where are all the bikes,
actually? Not right now — over a week. Over a month. Do they end up at the station every
evening, or does somebody drive them there?

## The setup

The app talks to a fairly ordinary JSON endpoint, and the endpoint is happy to tell you where
every available bike is. Ask it every few minutes for long enough and you have a movement
dataset nobody intended to publish.

```sh
# every five minutes, politely
curl -s "$ENDPOINT" | jq '.bikes[] | {id, lat, lng}' >> snapshots.ndjson
```

A cron job, a Postgres table, and roughly four hundred megabytes later, some things were
obvious.

![a city map with cat-head pins dropped across it](/cats/city-map.svg#5-4 "the whole city, at 08:40")

- Bikes drift downhill across a day, and get driven back up overnight
- Three stations are effectively a car park for the rebalancing van
- The city centre is empty by 08:40 on weekdays and nobody is surprised by this

> None of this is secret. It is just nobody's job to look at it.

## On being polite about it

Slow interval, no login, nothing personal, no attempt to get at anything the app would not
show a normal user standing on the street. It is a hobby, not a stress test.
