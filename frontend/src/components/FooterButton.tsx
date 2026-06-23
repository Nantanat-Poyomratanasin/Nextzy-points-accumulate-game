type FooterButtonProps = {
  text: string;
  onClick: () => void;
};

export default function FooterButton({ text, onClick }: FooterButtonProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white p-4 rounded-t-[16px] ">
      <div className="flex justify-center">
        <button
          onClick={onClick}
          className="
          w-[343px]
          h-[48px]
          rounded-[100px]
          bg-[#FFC124]
          text-white
          font-bold
          text-[20px]
        
        "
        >
          {text}
        </button>
      </div>
    </div>
  );
}
