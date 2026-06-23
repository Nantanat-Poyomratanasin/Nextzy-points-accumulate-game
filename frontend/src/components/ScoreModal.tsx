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
      <div className="relative w-[340px] rounded-[20px] bg-white p-8 text-center">
        <button
          onClick={onClose}
          className="absolute right-5 top-1 text-5xl text-[#979797]"
        >
          ×
        </button>

        <h2 className="mt-4 text-[24px] font-medium text-[#333333]">ได้รับ</h2>

        <p className="mt-2 text-[16px] font-normal text-[#565656]">
          {score?.toLocaleString()} คะแนน
        </p>

        <button
          onClick={onClose}
          className="mt-8 h-[35px] w-[177px] rounded-[17.5px] bg-[#FFC124] font-bold text-white text-[16px]"
        >
          ปิด
        </button>
      </div>
    </div>
  );
}
