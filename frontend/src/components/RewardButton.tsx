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
      className="rounded-[12.5px] w-[60px] h-[20px] px-1 text-white font-bold whitespace-nowrap text-[8px]
      bg-red-500 disabled:bg-gray-300"
    >
      {claimed
        ? `ได้รับรางวัล ${rewardName} แล้ว`
        : `กดรับรางวัล ${rewardName}`}
    </button>
  );
}
