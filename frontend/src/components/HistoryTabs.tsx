type HistoryTabsProps = {
  activeTab: "play" | "reward";
  setActiveTab: (tab: "play" | "reward") => void;
};

export default function HistoryTabs({
  activeTab,
  setActiveTab,
}: HistoryTabsProps) {
  return (
    <div className="mt-8 mb-1 px-4 flex gap-3">
      <button
        onClick={() => setActiveTab("play")}
        className={`rounded-[40px] border px-3 py-1 text-[13px] font-normal ${
          activeTab === "play"
            ? "border-[#FF383C] text-[#FF383C]"
            : "border-[#979797] text-[#979797]"
        }`}
      >
        ประวัติการเล่น
      </button>

      <button
        onClick={() => setActiveTab("reward")}
        className={`rounded-[40px] border px-3 py-1 text-[13px] font-normal ${
          activeTab === "reward"
            ? "border-[#FF383C] text-[#FF383C]"
            : "border-[#979797] text-[#979797]"
        }`}
      >
        ประวัติรางวัล
      </button>
    </div>
  );
}
