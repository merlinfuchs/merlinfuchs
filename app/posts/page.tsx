import PostOverview from "../components/PostOverview";

export const metadata = {
  title: "My Posts | Merlin Fuchs",
};

export default function Posts() {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-semibold tracking-wide">My Posts</h1>
      <PostOverview />
    </div>
  );
}
