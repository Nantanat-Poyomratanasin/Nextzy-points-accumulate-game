type ScoreModalProps = {
  isOpen: boolean;
  score: number | null;
  onClose: () => void;
};

export default function ScoreModal({
  isOpen,
  score,
  onClose,
}: ScoreModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="relative w-[320px] rounded-[16px] bg-white p-6 text-center">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-3xl text-gray-400"
        >
          ×
        </button>

        <h2 className="mt-6 text-3xl font-bold text-[#333333]">ได้รับ</h2>

        <p className="mt-3 text-lg text-[#666666]">
          {score?.toLocaleString()} คะแนน
        </p>

        <button
          onClick={onClose}
          className="mt-8 h-[40px] w-[160px] rounded-full bg-[#F8BD1A] font-bold text-white"
        >
          ปิด
        </button>
      </div>
    </div>
  );
}
