type ProgressBarProps = {
  score: number;
};

export default function ProgressBar({ score }: ProgressBarProps) {
  const percentage = (score / 10000) * 100;

  return (
    <div className="mt-6">
      <div className="flex justify-between mb-2 text-gray-500">
        <span>5000</span>
        <span>7500</span>
        <span>10000</span>
      </div>

      <div className="relative h-4 bg-gray-200 rounded-full">
        <div
          className="h-4 bg-orange-400 rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
