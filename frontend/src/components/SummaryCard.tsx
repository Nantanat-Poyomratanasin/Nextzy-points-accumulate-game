import ProgressBar from "./ProgressBar";

type SummaryCardProps = {
  score: number;
};

export default function SummaryCard({ score }: SummaryCardProps) {
  return (
    <div className="bg-white rounded-3xl border-2 border-black p-4">
      <h2 className="text-3xl font-bold text-right">สะสมคะแนน</h2>

      <p className="text-4xl font-bold text-red-500 text-right">
        {score.toLocaleString()} / 10,000
      </p>
      <ProgressBar score={score} />
    </div>
  );
}
