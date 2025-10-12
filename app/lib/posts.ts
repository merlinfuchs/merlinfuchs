import path from "path";
import { promises as fs } from "fs";

const postsDir = path.resolve("app/posts");

interface PostFile {
  filename: string;
  slug: string;
}

interface Post extends PostFile {
  title: string;
  postDate: Date;
  thumbnail?: string;
  url: string;
}

export const getPosts = async ({ isExternal }: { isExternal: boolean }) => {
  const files = await fs.readdir(postsDir);
  const posts = await Promise.all(
    files
      .filter((f) => !f.includes("."))
      .map(deconstructDirname)
      .map(toPost(isExternal))
  );

  return posts.sort((a, b) => b.postDate.getTime() - a.postDate.getTime());
};

function deconstructDirname(dirname: string) {
  return { slug: dirname, filename: `${dirname}/page.mdx` };
}

function toPost(isExternal: boolean): (post: PostFile) => Promise<Post> {
  return async (post) => {
    const content = await fs.readFile(
      path.join(postsDir, post.filename),
      "utf-8"
    );

    const meta = getMdMeta(content);

    return {
      ...post,
      title: meta.title,
      postDate: meta.postDate,
      thumbnail: meta.thumbnail,
      url: isExternal
        ? `https://merlin.gg/posts/${post.slug}`
        : `/posts/${post.slug}`,
    };
  };
}

const isTitle = (str: string) => /^#\s+.+/.test(str);
const getPostDate = (str: string) => {
  const match = str.match(/^<PostDate date="([0-9-]+)"/);
  if (!match) return null;

  const date = new Date(`${match[1]}T00:00:00-05:00`);
  return date;
};

const getPostThumbnail = (str: string) => {
  const match = str.match(/^!\[.*\]\((.*)\)/);
  if (!match) return null;

  return match[1];
};

function getMdMeta(md: string) {
  const res = {
    title: "",
    postDate: new Date(),
    thumbnail: undefined as string | undefined,
  };

  let lines = md.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (isTitle(lines[i])) {
      res.title = lines[i].substring(2).trim();
    }

    const postDate = getPostDate(lines[i]);
    if (postDate) {
      res.postDate = postDate;
    }

    const thumbnail = getPostThumbnail(lines[i]);
    if (thumbnail) {
      res.thumbnail = thumbnail;
    }
  }

  return res;
}
