import Link from "next/link";
import JOURNALS from "../lib/journals";

export default async function RecentJournals() {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold tracking-wide">My latest logs</h3>
      <ul className="list-disc pl-5 text-lg my-6">
        {JOURNALS.map((log) => (
          <li key={log.title} className="my-1">
            <Link
              href={log.url}
              className="underline text-blue-200 visited:text-blue-200 hover:text-blue-300 transition-all transition-duration-150 transition-timing-function-ease-in tracking-wide"
            >
              {log.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
