type HistoryTabsProps = {
  activeTab: "play" | "reward";
  setActiveTab: (tab: "play" | "reward") => void;
};

export default function HistoryTabs({
  activeTab,
  setActiveTab,
}: HistoryTabsProps) {
  return (
    <div className="mt-6 flex gap-3">
      <button
        onClick={() => setActiveTab("play")}
        className={`rounded-full border px-4 py-2 ${
          activeTab === "play"
            ? "border-red-500 text-red-500"
            : "border-gray-400 text-gray-400"
        }`}
      >
        ประวัติการเล่น
      </button>

      <button
        onClick={() => setActiveTab("reward")}
        className={`rounded-full border px-4 py-2 ${
          activeTab === "reward"
            ? "border-red-500 text-red-500"
            : "border-gray-400 text-gray-400"
        }`}
      >
        ประวัติรางวัล
      </button>
    </div>
  );
}
