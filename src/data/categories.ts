/**
 * Post categories. Four of them are drawers and borrow the drawer's colour;
 * "business" is the one that cuts across all of them.
 */

export type CategoryId = "software" | "photography" | "tinkering" | "sundries" | "business";

export interface Category {
  id: CategoryId;
  name: string;
  color: string;
  label: string;
  /** Drawer page this category belongs to, if any. */
  href?: string;
}

export const categories: Record<CategoryId, Category> = {
  software: {
    id: "software",
    name: "software",
    color: "var(--drawer-software)",
    label: "var(--label-software)",
    href: "/software",
  },
  photography: {
    id: "photography",
    name: "photography",
    color: "var(--drawer-photography)",
    label: "var(--label-photography)",
    href: "/photography",
  },
  tinkering: {
    id: "tinkering",
    name: "tinkering",
    color: "var(--drawer-tinkering)",
    label: "var(--label-tinkering)",
    href: "/tinkering",
  },
  sundries: {
    id: "sundries",
    name: "sundries",
    color: "var(--drawer-sundries)",
    label: "var(--label-sundries)",
    href: "/sundries",
  },
  business: {
    id: "business",
    name: "business",
    color: "var(--paper-warm)",
    label: "var(--ink-muted)",
  },
};

export const getCategory = (id: CategoryId): Category => categories[id];
