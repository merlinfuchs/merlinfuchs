const options = { dateStyle: "long", timeZone: "Europe/Berlin" } as const;

export default function PostDate({
  startDate,
  endDate,
}: {
  startDate: string;
  endDate: string;
}) {
  const start = new Date(`${startDate}T00:00:00-05:00`);
  const end = new Date(`${endDate}T00:00:00-05:00`);

  return (
    <div className="text-zinc-400 text-[1rem] font-light mb-5">
      <time dateTime={startDate}>
        {start.toLocaleDateString("en-US", options)}
      </time>{" "}
      -{" "}
      <time dateTime={endDate}>{end.toLocaleDateString("en-US", options)}</time>
    </div>
  );
}
