"use client";

type ResetButtonProps = {
  onReset: () => void;
};

export default function ResetButton({ onReset }: ResetButtonProps) {
  return (
    <button
      onClick={onReset}
      className="rounded-[12.5px] bg-[#1E00FF] w-[84.76px] h-[27.27px] px-1 font-bold text-white "
    >
      RESET
    </button>
  );
}
