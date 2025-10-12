import JournalOverview from "../components/JournalOverview";
import JournalOverviewMap from "../components/JournalOverviewMap";

export const metadata = {
  title: "My Journals | Merlin Fuchs",
};

export default function Logs() {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-semibold tracking-wide">My Journals</h1>
      <JournalOverviewMap />
      <JournalOverview />
    </div>
  );
}
