/** Helpers over the `posts` content collection. */
import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export const postHref = (post: Post) => `/posts/${post.id}`;

/** All posts, newest first. */
export const getPosts = async (): Promise<Post[]> =>
  (await getCollection("posts")).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

export const getPostsBySlug = async (slugs: string[]): Promise<Post[]> => {
  const posts = await getPosts();
  return slugs
    .map((slug) => posts.find((post) => post.id === slug))
    .filter((post): post is Post => Boolean(post));
};

/** Reading pace of 200 words a minute, rounded up to whole minutes. */
export const readingTime = (post: Post): number =>
  Math.max(1, Math.ceil((post.body?.split(/\s+/).length ?? 0) / 200));

export const wordCount = (post: Post): number => post.body?.split(/\s+/).length ?? 0;

/** "22 JUL 2026" — matches the uppercase meta style used across the site. */
export const formatDate = (date: Date): string =>
  date
    .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase()
    .replace(/,/g, "");

/** Posts bucketed by year, newest year first. */
export const groupByYear = (posts: Post[]): { year: number; posts: Post[] }[] => {
  const years = new Map<number, Post[]>();
  for (const post of posts) {
    const year = post.data.date.getFullYear();
    if (!years.has(year)) years.set(year, []);
    years.get(year)!.push(post);
  }
  return [...years.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, posts]) => ({ year, posts }));
};
