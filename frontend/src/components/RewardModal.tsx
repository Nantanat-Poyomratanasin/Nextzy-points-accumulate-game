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
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">🎉 ยินดีด้วย</h2>

        <p className="mb-6">คุณได้รับรางวัล {rewardName}</p>

        <button
          onClick={onClose}
          className="bg-yellow-400 text-white px-6 py-2 rounded-full"
        >
          ปิด
        </button>
      </div>
    </div>
  );
}
