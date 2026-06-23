"use client";

type ResetButtonProps = {
  onReset: () => void;
};

export default function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <button
      onClick={onReset}
      className="rounded-[12.5px] bg-[#1E00FF] w-[90px] h-[30px] font-bold text-white text-[20px] "
    >
      RESET
    </button>
  );
}
