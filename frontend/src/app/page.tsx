"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import SummaryCard from "../components/SummaryCard";
import RewardModal from "../components/RewardModal";
import HistoryTabs from "../components/HistoryTabs";
import RewardHistory from "../components/RewardHistory";
import PlayHistory from "../components/PlayHistory";
import FooterButton from "../components/FooterButton";

import { getGameData } from "../services/gameApi";

type RewardItem = {
  reward: string;
  date: string;
};

type PlayHistoryItem = {
  score: number;
  date: string;
};

export default function Home() {
  const [totalScore, setTotalScore] = useState(0);
  const [claimedA, setClaimedA] = useState(false);
  const [claimedB, setClaimedB] = useState(false);
  const [claimedC, setClaimedC] = useState(false);
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [selectedReward, setSelectedReward] = useState("");
  const [activeTab, setActiveTab] = useState<"play" | "reward">("play");

  const [rewardHistory, setRewardHistory] = useState<RewardItem[]>([]);
  const [playHistory, setPlayHistory] = useState<PlayHistoryItem[]>([]);

  useEffect(() => {
    const loadGameData = async () => {
      const data = await getGameData();

      setTotalScore(data.totalScore);

      setPlayHistory(data.playHistory);

      setRewardHistory(data.rewardHistory);
    };

    loadGameData();
  }, []);

  const handleClaimA = () => {
    setClaimedA(true);

    setRewardHistory((prev) => [
      ...prev,
      {
        reward: "A",
        date: new Date().toLocaleString(),
      },
    ]);

    setSelectedReward("A");
    setShowRewardModal(true);
  };

  const handleClaimB = () => {
    setClaimedB(true);

    setRewardHistory((prev) => [
      ...prev,
      {
        reward: "B",
        date: new Date().toLocaleString(),
      },
    ]);

    setSelectedReward("B");
    setShowRewardModal(true);
  };

  const handleClaimC = () => {
    setClaimedC(true);

    setRewardHistory((prev) => [
      ...prev,
      {
        reward: "C",
        date: new Date().toLocaleString(),
      },
    ]);

    setSelectedReward("C");
    setShowRewardModal(true);
  };

  const router = useRouter();

  return (
    <main className="min-h-screen flex justify-center  bg-white">
      <div className="relative w-[375px] h-[812px]">
        <div className="bg-[#E5E5E5] p-4">
          <SummaryCard
            score={totalScore}
            claimedA={claimedA}
            claimedB={claimedB}
            claimedC={claimedC}
            onClaimA={handleClaimA}
            onClaimB={handleClaimB}
            onClaimC={handleClaimC}
          />
        </div>

        <RewardModal
          isOpen={showRewardModal}
          rewardName={selectedReward}
          onClose={() => setShowRewardModal(false)}
        />

        <HistoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "play" ? (
          <PlayHistory plays={playHistory} />
        ) : (
          <RewardHistory rewards={rewardHistory} />
        )}

        <FooterButton text="ไปเล่นเกม" onClick={() => router.push("/game")} />
      </div>
    </main>
  );
}
