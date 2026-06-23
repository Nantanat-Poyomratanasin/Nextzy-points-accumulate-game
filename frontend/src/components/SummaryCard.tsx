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
    <div className="bg-white rounded-3xl border-2 border-black p-4  h-[200px]">
      <div>
        <h2 className="text-[16px] text-black font-semibold text-right">
          สะสมคะแนน
        </h2>
        <h2 className="text-[14px] text-black font-medium text-right">
          คะแนนครบ 10,000 รับรางวัลใหญ่
        </h2>
      </div>

      <h2 className="text-[24px] font-semibold text-[#FF2428] text-right mb-3">
        {score.toLocaleString()} / 10,000
      </h2>

      <div className="w-full px-3">
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
    </div>
  );
}
