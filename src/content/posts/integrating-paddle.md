---
title: Switching from Patreon to Paddle
description: Moving a few thousand subscriptions to a new billing provider without losing anyone.
date: 2026-05-12
category: business
kind: business
aside: two weekends and one apology email
---

Placeholder copy — the real migration write-up goes here.

Patreon was never meant to be a billing system for software. It was the thing that was already
there when the first person offered to pay, and then it was the thing everybody was already on.

## Why move at all

The short version: tax handling, invoices people can actually give to their accountant, and
being able to change a price without writing a paragraph explaining it.

- Invoices with real VAT handling
- Plans that map to what the app actually does
- Webhooks I can trust enough to grant access from
- One dashboard instead of three

> The migration itself was two weekends. Deciding to do it took eleven months.

![a cream cat sitting squarely on a freshly printed invoice](/cats/invoice.svg#3-2 "an invoice somebody's accountant will accept")

## The part that went wrong

Nothing broke that a refund could not fix, but a batch of renewals ran twice for about forty
minutes. If you got two emails that day: that was me, and the second charge came straight back.

## What I would tell past me

Write the reconciliation script before the migration, not after. Keep both systems readable for
a full billing cycle. And send the announcement email earlier than feels comfortable.
