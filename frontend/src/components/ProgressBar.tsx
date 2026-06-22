type ProgressBarProps = {
  score: number;
};

export default function ProgressBar({ score }: ProgressBarProps) {
  const percentage = (score / 10000) * 100;
  const markerPosition = (score / 10000) * 100;

  return (
    <div className="mt-6">
      <div className="relative h-6 mb-2 text-gray-500">
        <span className="absolute left-1/2 -translate-x-1/2">5000</span>

        <span className="absolute left-3/4 -translate-x-1/2">7500</span>

        <span className="absolute right-0">10000</span>
      </div>

      <div className="relative h-4 bg-gray-200 rounded-full">
        <div
          className="h-4 bg-orange-400 rounded-full"
          style={{ width: `${percentage}%` }}
        />

        <div
          className="absolute top-1/2 h-6 w-6 rounded-full bg-red-500
               -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${markerPosition}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
