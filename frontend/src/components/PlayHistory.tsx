type PlayHistoryItem = {
  score: number;
  createdAt: string;
};

type PlayHistoryProps = {
  plays: PlayHistoryItem[];
};

export default function PlayHistory({ plays }: PlayHistoryProps) {
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
      {plays.length === 0 ? (
        <div className="p-4 text-gray-400">ยังไม่มีประวัติการเล่น</div>
      ) : (
        plays.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-t border-b border-[#EEEEEE] py-4 px-6"
          >
            <div className="h-12 w-12 rounded-full bg-gradient-to-b from-[#973E40] to-[#F41C20]" />

            <div>
              <h3 className="text-[16px] font-bold text-[#333333]">
                เล่นได้ {item.score.toLocaleString()} คะแนน
              </h3>

              <p className="text-[#A3A3A3] font-normal text-[14px]">
                เล่นเมื่อ {formatDate(item.createdAt)}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
