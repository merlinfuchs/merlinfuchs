import Link from "next/link";
import { getPosts } from "../lib/posts";

export default async function PostOverview() {
  const posts = await getPosts({ isExternal: false });
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={post.url}
          className="flex flex-col shadow-lg bg-black/30 rounded-xl p-5 hover:scale-102 transition-all duration-200 ease-in-out"
        >
          <img
            src={post.thumbnail}
            alt=""
            className="aspect-video w-full object-cover rounded-md flex-none"
          />
          <div className="mt-5 flex-auto">
            <h3 className="text-lg font-semibold tracking-wide">
              {post.title}
            </h3>
          </div>

          <p className="text-sm text-gray-400 mt-2">
            {post.postDate.toLocaleDateString("en-US", {
              dateStyle: "long",
              timeZone: "Europe/Berlin",
            })}
          </p>
        </Link>
      ))}
    </div>
  );
}
