import SummaryCard from "../components/SummaryCard";

export default function Home() {
  const totalScore = 9500;

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <SummaryCard score={totalScore} />
    </main>
  );
}
