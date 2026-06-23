import RewardButton from "./RewardButton";
import { CHECKPOINTS } from "../constants/checkpoints";
import Image from "next/image";

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
    <div className="relative w-full mt-1 h-28">
      {CHECKPOINTS.map((checkpoint) => {
        const claimed =
          checkpoint.reward === "A"
            ? claimedA
            : checkpoint.reward === "B"
              ? claimedB
              : claimedC;

        const isUnlocked = score >= checkpoint.score;

        return (
          <div
            key={checkpoint.reward}
            className="absolute -translate-x-1/2"
            style={{ left: `${checkpoint.position}%` }}
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 ">
              {" "}
              {checkpoint.reward === "C" && isUnlocked ? (
                <Image src="/coin.png" alt="coin" width={24} height={24} />
              ) : claimed ? (
                <Image
                  src="/check-green.png"
                  alt="claimed"
                  width={20}
                  height={20}
                />
              ) : isUnlocked ? (
                <Image
                  src="/check-gray.png"
                  alt="unclaimed"
                  width={20}
                  height={20}
                />
              ) : null}{" "}
            </div>

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
        );
      })}
    </div>
  );
}
