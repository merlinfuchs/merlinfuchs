import Link from "next/link";
import JOURNALS from "../lib/journals";

export default function OtherJournals({ current }: { current: string }) {
  const logs = JOURNALS.filter((log) => log.key !== current);

  return (
    <div className="mt-5">
      <span>Other logs: </span>
      {logs.map((log, index) => (
        <span key={log.key}>
          <Link
            href={log.url}
            className="text-blue-200 visited:text-blue-200 hover:text-blue-300 transition-all transition-duration-150 transition-timing-function-ease-in tracking-wide"
          >
            {log.title}
          </Link>
          {index < logs.length - 1 && ", "}
        </span>
      ))}
    </div>
  );
}
