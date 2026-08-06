/** Sheets on the "what I'm doing now" pad, newest first. */

export interface PadSheet {
  title: string;
  date: string;
  /** Sheet colour — the stack fades from bright to pale going down. */
  color: string;
  lines: string[];
}

export const nowPad: PadSheet[] = [
  {
    title: "what i'm doing now",
    date: "THIS WEEK",
    color: "#ffe066",
    lines: [
      "→ building Kite",
      "→ developing roll 041",
      "→ printing a new bracket",
      "→ too much coffee",
    ],
  },
  {
    title: "last week",
    date: "JUL 2026",
    color: "#ffd94a",
    lines: [
      "→ 140 km on the bike",
      "→ patching Xenon",
      "→ soldering, badly",
      "→ slightly less coffee",
    ],
  },
  {
    title: "the month before",
    date: "JUN 2026",
    color: "#ffe9a8",
    lines: [
      "→ finishing AI in a Box",
      "→ two rolls of film",
      "→ rewriting a Go service",
      "→ same coffee",
    ],
  },
  {
    title: "a while ago",
    date: "SPRING 2026",
    color: "#fff3c2",
    lines: [
      "→ moving billing to Paddle",
      "→ learning to say no",
      "→ one actual holiday",
      "→ coffee, obviously",
    ],
  },
];
