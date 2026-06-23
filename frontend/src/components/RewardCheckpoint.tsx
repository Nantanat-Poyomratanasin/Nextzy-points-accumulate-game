import RewardButton from "./RewardButton";
import { CHECKPOINTS } from "../constants/checkpoints";

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
    <div className="relative w-full mt-1 h-16">
      {CHECKPOINTS.map((checkpoint) => (
        <div
          key={checkpoint.reward}
          className="absolute -translate-x-1/2"
          style={{ left: `${checkpoint.position}%` }}
        >
          <RewardButton
            score={score}
            checkpoint={checkpoint.score}
            rewardName={checkpoint.reward}
            claimed={
              checkpoint.reward === "A"
                ? claimedA
                : checkpoint.reward === "B"
                  ? claimedB
                  : claimedC
            }
            onClaim={
              checkpoint.reward === "A"
                ? onClaimA
                : checkpoint.reward === "B"
                  ? onClaimB
                  : onClaimC
            }
          />
        </div>
      ))}
    </div>
  );
}
