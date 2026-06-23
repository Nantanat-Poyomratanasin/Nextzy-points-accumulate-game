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
      <div className="relative w-[340px] rounded-[20px] bg-white p-8 text-center">
        <button
          onClick={onClose}
          className="absolute right-5 top-1 text-5xl text-[#979797]"
        >
          ×
        </button>

        <Image
          src="/coin.png"
          alt="coin"
          width={78}
          height={78}
          className="mx-auto"
        />

        <h2 className="mt-4 text-[24px] font-medium text-[#333333]">
          ยินดีด้วย
        </h2>

        <p className="mt-2 text-[16px] font-normal text-[#565656]">
          คุณได้รับรางวัล {rewardName}
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
