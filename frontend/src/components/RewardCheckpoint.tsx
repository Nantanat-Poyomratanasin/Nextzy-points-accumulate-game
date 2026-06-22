type RewardCheckpointProps = {
  score: number;
};

export default function RewardCheckpoint({ score }: RewardCheckpointProps) {
  return (
    <div className="relative mt-8 h-16 text-center">
      <div className="absolute left-1/2 -translate-x-1/2">
        <p className="font-bold">Reward A</p>
        <p>{score >= 5000 ? "ปลดล็อกแล้ว" : "ยังไม่ถึง"}</p>
      </div>

      <div className="absolute left-3/4 -translate-x-1/2">
        <p className="font-bold">Reward B</p>
        <p>{score >= 7500 ? "ปลดล็อกแล้ว" : "ยังไม่ถึง"}</p>
      </div>

      <div className="absolute right-0">
        <p className="font-bold">Reward C</p>
        <p>{score >= 10000 ? "ปลดล็อกแล้ว" : "ยังไม่ถึง"}</p>
      </div>
    </div>
  );
}
