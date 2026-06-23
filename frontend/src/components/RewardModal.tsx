import Image from "next/image";

type RewardModalProps = {
  isOpen: boolean;
  rewardName: string;
  onClose: () => void;
};

export default function RewardModal({
  isOpen,
  rewardName,
  onClose,
}: RewardModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="relative w-[340px] rounded-[16px] bg-white p-6 text-center">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-3xl text-gray-400"
        >
          ×
        </button>

        <Image
          src="/coin.png"
          alt="coin"
          width={80}
          height={80}
          className="mx-auto"
        />

        <h2 className="mt-4 text-3xl font-bold text-[#333333]">ยินดีด้วย</h2>

        <p className="mt-2 text-lg text-[#666666]">
          คุณได้รับรางวัล {rewardName}
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
