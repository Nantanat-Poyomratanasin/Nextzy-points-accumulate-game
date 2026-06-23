import RewardButton from "./RewardButton";

type RewardCheckpointProps = {
  score: number;

  claimedA: boolean;
  claimedB: boolean;
  claimedC: boolean;

  onClaimA: () => void;
  onClaimB: () => void;
  onClaimC: () => void;
};

export default function RewardCheckpoint({
  score,
  claimedA,
  claimedB,
  claimedC,
  onClaimA,
  onClaimB,
  onClaimC,
}: RewardCheckpointProps) {
  return (
    <div className="relative mt-8 h-16 text-center ">
      <div className="relative mt-8 h-16 ">
        <div className="absolute left-[50%] -translate-x-1/2">
          <RewardButton
            score={score}
            checkpoint={5000}
            rewardName="A"
            claimed={claimedA}
            onClaim={onClaimA}
          />
        </div>

        <div className="absolute left-[75%] -translate-x-1/2">
          <RewardButton
            score={score}
            checkpoint={7500}
            rewardName="B"
            claimed={claimedB}
            onClaim={onClaimB}
          />
        </div>

        <div className="absolute left-[100%] -translate-x-1/2">
          <RewardButton
            score={score}
            checkpoint={10000}
            rewardName="C"
            claimed={claimedC}
            onClaim={onClaimC}
          />
        </div>
      </div>
    </div>
  );
}
