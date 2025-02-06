import Link from "next/link";
import { getPosts } from "../lib/posts";

export default async function RecentPosts() {
  const posts = await getPosts({ isExternal: false });

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold tracking-wide">My latest posts</h3>
      <ul className="list-disc pl-5 text-lg my-6">
        {posts.map((post) => (
          <li key={post.slug} className="my-1">
            <Link
              href={post.url}
              className="underline text-blue-200 visited:text-blue-200 hover:text-blue-300 transition-all transition-duration-150 transition-timing-function-ease-in tracking-wide"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
