type RewardItem = {
  reward: string;
  date: string;
};

type RewardHistoryProps = {
  rewards: RewardItem[];
};

export default function RewardHistory({ rewards }: RewardHistoryProps) {
  return (
    <div className="mt-4 bg-white">
      {rewards.length === 0 ? (
        <div className="p-4 text-gray-400">ยังไม่มีประวัติรางวัล</div>
      ) : (
        rewards.map((item, index) => (
          <div key={index} className="flex items-center gap-4 border-b p-6">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-900 to-purple-500" />
            <div>
              <h3 className="text-[16px] font-bold text-[#333333]">
                ได้รับรางวัล {item.reward}
              </h3>

              <p className="text-[16px] text-[#A7A7A7]">
                ได้รับเมื่อ {item.date}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
