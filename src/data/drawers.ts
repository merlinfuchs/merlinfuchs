/**
 * The four drawers. Single source of truth for colours, order, nav chips,
 * prev/next links and the home page cards.
 */

export type DrawerId = "software" | "photography" | "tinkering" | "sundries";

export interface Drawer {
  id: DrawerId;
  name: string;
  href: string;
  /** Desaturated fill used for the tab, chip and card. */
  color: string;
  /** Ink tone for small uppercase labels on that fill. */
  label: string;
  /** Uppercase strap line on the folder tab. */
  tab: string;
  /** One-line intro under the page H1. */
  intro: string;
  /** Blurb on the home page card. */
  blurb: string;
  /** "NEWEST: …" on the home page card. */
  newest: string;
  /** Footer phrase, page specific. */
  footer: string;
}

export const drawers: Drawer[] = [
  {
    id: "software",
    name: "Software",
    href: "/software",
    color: "var(--drawer-software)",
    label: "var(--label-software)",
    tab: "DRAWER ONE — THE ONE THAT PAYS FOR THE OTHERS",
    intro: "",
    blurb:
      "Apps around Discord — Kite, Xenon and Embed Generator — plus the business that grew out of them.",
    newest: "NEWEST: KITE",
    footer: "shipped, patched and occasionally reverted by hand",
  },
  {
    id: "photography",
    name: "Photography",
    href: "/photography",
    color: "var(--drawer-photography)",
    label: "var(--label-photography)",
    tab: "DRAWER TWO — MOSTLY 35MM, SOMETIMES DIGITAL",
    intro: "Film mostly. Thirty-six frames is a good limit, and the waiting is half the fun.",
    blurb:
      "Rolls of film and a lot of digital frames. Cities, workshops, and whatever the light was doing.",
    newest: "NEWEST: ROLL 041",
    footer: "shot, developed and scanned by hand",
  },
  {
    id: "tinkering",
    name: "Tinkering",
    href: "/tinkering",
    color: "var(--drawer-tinkering)",
    label: "var(--label-tinkering)",
    tab: "DRAWER THREE — 3D PRINTING & ELECTRONICS, SAME BENCH",
    intro: "Old hardware with new brains, and brackets holding things that were never meant to be held.",
    blurb:
      "3D printing and electronics on one bench — brackets, enclosures and old hardware given new brains.",
    newest: "NEWEST: AI IN A BOX",
    footer: "soldered, printed and re-printed by hand",
  },
  {
    id: "sundries",
    name: "Sundries",
    href: "/sundries",
    color: "var(--drawer-sundries)",
    label: "var(--label-sundries)",
    tab: "DRAWER FOUR — EVERYTHING THAT DIDN'T FIT THE OTHER THREE",
    intro:
      "The drawer without a theme. Cycling, Club Mate, records and whatever else is currently taking up the time.",
    blurb:
      "The one without a theme — cycling, Club Mate, records, maps, and whatever else is taking up time.",
    newest: "NEWEST: SIX MORE THINGS",
    footer: "collected, kept and rarely sorted by hand",
  },
];

export const getDrawer = (id: DrawerId): Drawer =>
  drawers.find((d) => d.id === id)!;

export const drawerIndex = (id: DrawerId): number =>
  drawers.findIndex((d) => d.id === id);

/** Drawers wrap around: the one after Cycling is Software again. */
export const neighbours = (id: DrawerId): { prev: Drawer; next: Drawer } => {
  const i = drawerIndex(id);
  return {
    prev: drawers[(i - 1 + drawers.length) % drawers.length],
    next: drawers[(i + 1) % drawers.length],
  };
};

/** The other three drawers, for the nav chips. */
export const otherDrawers = (id: DrawerId): Drawer[] =>
  drawers.filter((d) => d.id !== id);
