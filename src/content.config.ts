import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    /** One line, used on cards and as the meta description. */
    description: z.string(),
    date: z.coerce.date(),
    /** Which drawer it belongs to — see src/data/categories.ts. */
    category: z.enum(["software", "photography", "tinkering", "sundries", "business"]),
    /** Optional flavour label ("essay", "hack", "build log") shown on drawer pages. */
    kind: z.string().optional(),
    /** Handwritten aside pinned next to the post. */
    aside: z.string().optional(),
  }),
});

export const collections = { posts };
