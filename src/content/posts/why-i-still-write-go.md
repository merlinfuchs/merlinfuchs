---
title: Why I still write Go
description: Boring on purpose, and the deploy is one file.
date: 2025-04-02
category: software
kind: essay
aside: the binary is the whole deploy
---

Placeholder copy — stand-in essay.

Every year or so I try something else for a backend, get halfway, and come back. Not because
the alternatives are bad — because the boring parts of Go are boring in exactly the places I
want them to be.

## The parts that matter at 2am

- One binary. The deploy is a file and a restart
- The standard library covers more than I expect, every time
- Errors are annoying to write and easy to read six months later
- Nothing clever is happening while I am asleep

```go
func main() {
    srv := newServer()
    log.Fatal(srv.ListenAndServe())
}
```

> I do not think Go is the best language. I think it is the one where my 2am self and my
> Tuesday-afternoon self write roughly the same code.

![screenshot — the whole deploy, one file](placeholder:16-9 "scp, restart, go to bed")

## Where it stops

Anything with a user interface, obviously. Anything where the data shape changes every week.
And the things I do for fun, where being slightly annoying to write is the entire appeal —
that is what the Rust folder is for.
