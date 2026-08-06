/** Projects and lists for the software drawer. */

export interface Project {
  name: string;
  href: string;
  tag: string;
  description: string;
  /** Left rule + tag colour. */
  accent: string;
  /** Serif title colour on the terminal background. */
  nameColor: string;
  /** Underline under the title. */
  ruleColor: string;
}

export const projects: Project[] = [
  {
    name: "Kite",
    href: "https://kite.onl",
    tag: "NEWEST",
    description:
      "A no-code platform for building Discord apps — flow editor, deploys and hosting in one place.",
    accent: "#ff7847",
    nameColor: "#ffb59a",
    ruleColor: "#7a3a24",
  },
  {
    name: "Xenon",
    href: "https://xenon.bot",
    tag: "RUNNING",
    description:
      "Backups, templates and cloning for Discord servers — one of the biggest apps on the platform.",
    accent: "#5fd08a",
    nameColor: "#a8e9c0",
    ruleColor: "#2c6b1d",
  },
  {
    name: "Embed Generator",
    href: "https://message.style",
    tag: "RUNNING",
    description: "Design and send rich Discord messages without ever opening the API docs.",
    accent: "#6ea8ff",
    nameColor: "#bcd6ff",
    ruleColor: "#123f8f",
  },
];

export const reachFor = [
  "· Go — most backends",
  "· TypeScript + React — the rest",
  "· Postgres, always",
  "· Rust, when I feel brave",
];

/**
 * Writing shown on this page — curated rather than filtered, because the
 * rental-bike post lives in the sundries drawer but belongs here too.
 * Titles and links come from the posts collection.
 */
export const writingSlugs = [
  "the-art-of-software",
  "integrating-paddle",
  "scraping-biggest-rental-bike-provider",
];

export const openSource = [
  { title: "ai-in-a-box", href: "https://github.com/merlinfuchs/ai-in-a-box", category: "python" },
  { title: "blimp", href: "https://github.com/merlinfuchs/blimp", category: "retro mac" },
  { title: "everything else", href: "https://github.com/merlinfuchs", category: "github" },
];
