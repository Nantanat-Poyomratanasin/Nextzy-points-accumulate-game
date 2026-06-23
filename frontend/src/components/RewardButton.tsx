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
      disabled={!canClaim}
      onClick={onClaim}
      className={`
mt-3
h-[20px]
w-[60px]
rounded-[12.5px]
px-1
whitespace-nowrap
text-[8px]
font-bold
text-white

${claimed ? "bg-[#FF7B7B]" : canClaim ? "bg-[#FF0004]" : "bg-[#DDDDDD]"}

${!canClaim ? "cursor-not-allowed" : ""}
`}
    >
      {claimed ? `ได้รางวัล ${rewardName} แล้ว` : `กดรับรางวัล ${rewardName}`}
    </button>
  );
}
