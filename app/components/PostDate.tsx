const options = { dateStyle: "long", timeZone: "Europe/Berlin" } as const;

export default function PostDate({ date }: { date: string }) {
  const estDate = new Date(`${date}T00:00:00-05:00`);
  return (
    <time className="text-zinc-400 text-[1rem] font-light" dateTime={date}>
      {estDate.toLocaleDateString("en-US", options)}
    </time>
  );
}
