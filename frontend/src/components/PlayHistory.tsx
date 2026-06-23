type PlayHistoryItem = {
  score: number;
  createdAt: string;
};

type PlayHistoryProps = {
  plays: PlayHistoryItem[];
};

export default function PlayHistory({ plays }: PlayHistoryProps) {
  return (
    <div className="mt-4 bg-white">
      {plays.length === 0 ? (
        <div className="p-4 text-gray-400">ยังไม่มีประวัติการเล่น</div>
      ) : (
        plays.map((item, index) => (
          <div key={index} className="flex items-center gap-4 border-b p-4">
            <div className="h-12 w-12 rounded-full bg-red-500" />

            <div>
              <h3 className="text-[16px] font-bold text-[#333333]">
                เล่นได้ {item.score.toLocaleString()} คะแนน
              </h3>

              <p className="text-gray-400">
                เล่นเมื่อ{" "}
                {new Date(item.createdAt).toLocaleString("th-TH", {
                  timeZone: "Asia/Bangkok",
                })}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
