import { getPosts } from "../app/lib/posts";
import { promises as fs } from "fs";
import path from "path";

const introFile = path.resolve("app/static/intro.mdx");
const readmeFile = path.resolve("README.md");

async function run() {
  const intro = await fs.readFile(introFile, "utf-8");

  const posts = await getPosts({ isExternal: true });

  const postList = posts
    .slice(0, 4)
    .map((post) => `- [${post.title}](${post.url})`)
    .join("\n");

  const readme = `${intro}\n\n## My latest posts\n\n${postList}`;

  await fs.writeFile(readmeFile, readme);
}

run();
