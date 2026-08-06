/**
 * Drawer four: the things that don't justify a drawer of their own. The two
 * that have enough substance — cycling and Club Mate — get their own section
 * and their own objects; everything else is one card each.
 *
 * Swap these for the real ones; the shape is what matters.
 */

/* --- on wheels ----------------------------------------------------------- */

export interface Ride {
  date: string;
  route: string;
  dist: string;
  mood: string;
}

export const rides: Ride[] = [
  { date: "26 JUL", route: "the long one, along the river", dist: "140 km", mood: "★★★★" },
  { date: "12 JUL", route: "hills, badly planned", dist: "86 km", mood: "★★" },
  { date: "28 JUN", route: "to the lake and back", dist: "64 km", mood: "★★★★" },
  { date: "14 JUN", route: "commute, extended twice", dist: "41 km", mood: "★★★" },
  { date: "02 JUN", route: "rain, all of it", dist: "55 km", mood: "★" },
  { date: "19 MAY", route: "first proper ride of the year", dist: "72 km", mood: "★★★★★" },
];

export const totalKm = rides.reduce((n, r) => n + parseInt(r.dist, 10), 0);

export const frameBag = [
  "· two tubes, one working pump",
  "· multitool, missing one bit",
  "· a bar of chocolate",
  "· a camera, sometimes",
];

/* --- club mate ----------------------------------------------------------- */

export const mate = {
  notes: [
    "· cold tea, but on purpose",
    "· sweet for exactly one sip",
    "· best at 4 °C, tolerable at 20 °C",
    "· the last third is always warm",
  ],
  stats: [
    { label: "bottles this year", value: "235" },
    { label: "crates returned", value: "9" },
    { label: "record, one sitting", value: "4" },
    { label: "regrets", value: "some" },
  ],
  /** Bottles per month — the peak is flagged in the chart. */
  months: [
    { month: "J", bottles: 14 },
    { month: "F", bottles: 12 },
    { month: "M", bottles: 16 },
    { month: "A", bottles: 19 },
    { month: "M", bottles: 22 },
    { month: "J", bottles: 26 },
    { month: "J", bottles: 31 },
    { month: "A", bottles: 29 },
    { month: "S", bottles: 21 },
    { month: "O", bottles: 17 },
    { month: "N", bottles: 13 },
    { month: "D", bottles: 15 },
  ],
  receipt: [
    { item: "4 × club mate 0,5", meta: "6,80" },
    { item: "pfand", meta: "3,00" },
    { item: "1 × brötchen", meta: "0,90" },
    { item: "TOTAL", meta: "10,70" },
  ],
};

export const peakBottles = Math.max(...mate.months.map((m) => m.bottles));

/* --- reading ------------------------------------------------------------- */

export interface Spine {
  title: string;
  /** Spine width and height in px — vary them or the shelf looks printed. */
  width: number;
  height: number;
  color: string;
  ink: string;
  /** Set on the last one so it leans into the gap. */
  tilt?: number;
}

export const shelf: Spine[] = [
  { title: "The Pragmatic Programmer", width: 36, height: 168, color: "#4a5a6b", ink: "#f2ede0" },
  { title: "Thinking in Systems", width: 34, height: 180, color: "#dfe3e8", ink: "#2b2620" },
  { title: "Design of Everyday Things", width: 44, height: 188, color: "#7a4a33", ink: "#f2ede0" },
  { title: "Slaughterhouse-Five", width: 36, height: 162, color: "#e3ddc8", ink: "#2b2620" },
  { title: "Cosmos", width: 30, height: 176, color: "#221d17", ink: "#ffd94a" },
  { title: "Steppenwolf", width: 38, height: 170, color: "#3f5c48", ink: "#f2ede0" },
  { title: "A Short History", width: 50, height: 184, color: "#c9c2b0", ink: "#2b2620" },
  { title: "The Left Hand of Darkness", width: 34, height: 158, color: "#7d5a34", ink: "#f2ede0" },
  { title: "Where Wizards Stay Up Late", width: 42, height: 174, color: "#dee4de", ink: "#2b2620" },
  { title: "The Wind-Up Bird Chronicle", width: 46, height: 190, color: "#6b6355", ink: "#f2ede0" },
  { title: "Der Prozess", width: 30, height: 166, color: "#ecdfd6", ink: "#2b2620" },
  { title: "started, not finished", width: 38, height: 152, color: "#fdf7e6", ink: "#6b6355", tilt: -9 },
];

export const readingNow = {
  title: "The Wind-Up Bird Chronicle",
  author: "Haruki Murakami",
  since: "SINCE MARCH",
  progress: "PAGE 214 OF 607",
  note: "the other one is a manual",
};

/** Stamped in the back of the book, as libraries used to. */
export const dueDates = ["12 JAN", "04 FEB", "28 FEB", "19 MAR", "02 APR", "23 APR"];

/* --- everything else ----------------------------------------------------- */

export interface Sundry {
  /** Small uppercase label above the title. */
  label: string;
  title: string;
  body: string;
  /** Bottom line — a fact or a number. */
  note: string;
}

export const rest: Sundry[] = [
  {
    label: "ON THE SHELF",
    title: "Records",
    body: "Mostly second-hand, mostly bought for the sleeve.",
    note: "NO OPINIONS ABOUT CABLES",
  },
  {
    label: "PAPER, NOT PHONE",
    title: "Maps",
    body: "Folded wrong and kept anyway. Sheet 14 has a route on it in biro.",
    note: "ELEVEN SHEETS, ONE DRAWER",
  },
  {
    label: "SLOW, ON PURPOSE",
    title: "Bread",
    body: "A starter with a name, fed more reliably than some side projects.",
    note: "STARTED 2024, STILL ALIVE",
  },
];

/** Too small to earn a card — the things loose at the bottom of the drawer. */
export const loose = [
  "expired film",
  "spare spokes",
  "postcards, unsent",
  "one good pen",
  "batteries, probably dead",
  "ticket stubs",
  "allen keys",
  "a very old compass",
];

export const meaningToStart = [
  { item: "learning to swim properly", state: "soon" },
  { item: "the balcony, as a garden", state: "spring, maybe" },
  { item: "reading the Rust book", state: "bought it twice" },
  { item: "a filing system for all this", state: "ironic" },
];
