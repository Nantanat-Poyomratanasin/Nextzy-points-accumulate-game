//RewardButton-> Scoreรับตัวเลข,claimed is T or F,OnClaim-->Func ทำงานตอนกด Button
type RewardButtonProps = {
  score: number;
  claimed: boolean;
  onClaim: () => void;
};

export default function RewardButton({
  score,
  claimed,
  onClaim,
}: RewardButtonProps) {
  const canClaim = score >= 5000;

  return (
    <button
      disabled={!canClaim || claimed}
      onClick={onClaim}
      className="rounded-full px-4 py-2 text-white
      bg-red-500 disabled:bg-gray-300"
    >
      {claimed ? "ได้รับรางวัล A แล้ว" : "กดรับรางวัล A"}
    </button>
  );
}
