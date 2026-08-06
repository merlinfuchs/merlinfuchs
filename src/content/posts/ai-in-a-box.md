---
title: AI in a Box
description: A 15€ intercom from 1983, a Raspberry Pi, and four personalities that argue with each other.
date: 2026-07-22
category: tinkering
kind: build log
aside: the speaker was the hard part
---

Placeholder copy — the real write-up goes here.

The Universum DWA 101 cost fifteen euros and arrived smelling like a cupboard. It had three
buttons, one red LED and a speaker that was never designed to be driven by anything with a
computer in it. That turned out to be the whole project.

![a ginger cat peering out through the front of the old intercom](/cats/intercom.svg#3-2 "fifteen euros, plus postage")

## What went in

Nothing exotic, which was the point. Everything below was either already on the bench or cost
less than a takeaway.

- A Raspberry Pi 4, the one that was doing nothing
- A USB microphone, taped inside the case
- The original speaker, eventually driven by an actual amplifier
- Three push buttons glued under the original keys
- One RGB LED where the red one used to be

> The first version drove the speaker straight off a GPIO pin. It made a sound like a wasp in a
> tin and then it made no sound at all.

## Four modes, none of them useful

The buttons pick a personality. Depressed, supporter, critic — and a debate mode where the last
two argue with each other about whatever you say into the microphone and never resolve anything.

![a cream cat asleep in the open case on the bench, curled around the board](/cats/bench.svg#4-3 "everything fits, barely")

The LED colour tells you which one is currently talking, which matters more than it sounds
when you have walked out of the room and left them going.

```python
MODES = {
    "depressed": (0, 0, 255),
    "supporter": (0, 255, 0),
    "critic": (255, 0, 0),
    "debate": (255, 0, 255),
}
```

## What I would do differently

Buy the amplifier first. Print the mounting bracket last, once you know how much space the
wiring actually needs. And label the cables, which I say every time.
