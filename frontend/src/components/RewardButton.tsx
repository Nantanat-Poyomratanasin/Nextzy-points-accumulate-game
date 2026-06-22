//RewardButton-> Scoreรับตัวเลข,claimed is T or F,OnClaim-->Func ทำงานตอนกด Button
type RewardButtonProps = {
  score: number;
  checkpoint: number;
  rewardName: string;
  claimed: boolean;
  onClaim: () => void;
};

export default function RewardButton({
  score,
  checkpoint,
  rewardName,
  claimed,
  onClaim,
}: RewardButtonProps) {
  const canClaim = score >= checkpoint;

  return (
    <button
      disabled={!canClaim || claimed}
      onClick={onClaim}
      className="rounded-full px-4 py-2 text-white
      bg-red-500 disabled:bg-gray-300"
    >
      {claimed
        ? `ได้รับรางวัล ${rewardName} แล้ว`
        : `กดรับรางวัล ${rewardName}`}
    </button>
  );
}
