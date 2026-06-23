type RewardItem = {
  reward: string;
  claimedAt: string;
};

type RewardHistoryProps = {
  rewards: RewardItem[];
};

export default function RewardHistory({ rewards }: RewardHistoryProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);

    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");

    return `${day}/${month}/${year} ${hour}:${minute} น.`;
  };

  return (
    <div className="mt-4 bg-white">
      {rewards.length === 0 ? (
        <div className="p-4 text-gray-400">ยังไม่มีประวัติรางวัล</div>
      ) : (
        rewards.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-t border-b border-[#EEEEEE] py-4 px-6"
          >
            <div className="h-12 w-12 rounded-full bg-gradient-to-b from-[#091050] to-[#5D1CF4]" />
            <div>
              <h3 className="text-[16px] font-bold text-[#333333]">
                ได้รับรางวัล {item.reward}
              </h3>

              <p className="text-[#A3A3A3] font-normal text-[14px]">
                ได้รับเมื่อ {formatDate(item.claimedAt)}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
