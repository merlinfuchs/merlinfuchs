import Link from "next/link";
import JOURNALS from "../lib/journals";

export default function JournalOverview() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {JOURNALS.map((journal) => (
        <Link
          key={journal.key}
          href={journal.url}
          className="shadow-lg bg-black/30 rounded-xl p-5 hover:scale-102 transition-all duration-200 ease-in-out"
        >
          <img
            src={journal.thumbnail}
            alt=""
            className="aspect-square w-full object-cover rounded-md"
          />
          <div className="mt-5">
            <h3 className="text-lg font-semibold tracking-wide text-center">
              {journal.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
