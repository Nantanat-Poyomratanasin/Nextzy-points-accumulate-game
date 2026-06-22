import ProgressBar from "./ProgressBar";
import RewardCheckpoint from "./RewardCheckpoint";
import RewardButton from "./RewardButton";

type SummaryCardProps = {
  score: number;

  claimedA: boolean;
  claimedB: boolean;
  claimedC: boolean;

  onClaimA: () => void;
  onClaimB: () => void;
  onClaimC: () => void;
};

export default function SummaryCard({
  score,
  claimedA,
  claimedB,
  claimedC,
  onClaimA,
  onClaimB,
  onClaimC,
}: SummaryCardProps) {
  return (
    <div className="bg-white rounded-3xl border-2 border-black p-4">
      <h2 className="text-3xl text-black font-bold text-right">สะสมคะแนน</h2>
      <h2 className="text-2xl text-black font-semibold text-right">
        คะแนนครบ 10,000 รับรางวัลใหญ่
      </h2>

      <h2 className="text-4xl text-black font-bold text-red-500 text-right">
        {score.toLocaleString()} / 10,000
      </h2>
      <ProgressBar score={score} />
      <RewardCheckpoint
        score={score}
        claimedA={claimedA}
        claimedB={claimedB}
        claimedC={claimedC}
        onClaimA={onClaimA}
        onClaimB={onClaimB}
        onClaimC={onClaimC}
      />
    </div>
  );
}
