import { CHECKPOINTS } from "../constants/checkpoints";

type ProgressBarProps = {
  score: number;
};

export default function ProgressBar({ score }: ProgressBarProps) {
  const percentage = (score / 10000) * 100;
  const markerPosition = (score / 10000) * 100;

  return (
    <div>
      <div className="relative h-6 text-gray-500  text-[10px]">
        {CHECKPOINTS.map((checkpoint) => (
          <span
            key={checkpoint.score}
            className="absolute -translate-x-1/2"
            style={{ left: `${checkpoint.position}%` }}
          >
            {checkpoint.score}
          </span>
        ))}
      </div>

      <div className="relative w-full h-[9px]">
        <div className="relative w-full h-[9px] bg-orange-400 rounded-full "></div>

        <div
          className="absolute
    top-1/2 h-[18px] w-[18px] rounded-full bg-gradient-to-b from-[#FF0004] to-[#FC8625] overflow-hidden
               -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${markerPosition}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
