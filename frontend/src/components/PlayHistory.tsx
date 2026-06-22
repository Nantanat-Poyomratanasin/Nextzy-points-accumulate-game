export default function PlayHistory() {
  return (
    <div className="mt-4 bg-white">
      <div className="flex items-center gap-4 border p-4">
        <div className="h-12 w-12 rounded-full bg-red-500" />

        <div>
          <h3 className="text-[16px] font-bold text-[#333333]">
            เล่นได้ 1,000 คะแนน
          </h3>

          <p className="text-gray-400">เล่นเมื่อ 15/02/25 20:00 น.</p>
        </div>
      </div>
    </div>
  );
}
