import Link from "next/link";
import LOGS from "../lib/logs";

export default function OtherLogs({ current }: { current: string }) {
  const logs = LOGS.filter((log) => log.key !== current);

  return (
    <div className="mt-5">
      <span>Other logs: </span>
      {logs.map((log, index) => (
        <span>
          <Link
            href={log.url}
            key={log.key}
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
