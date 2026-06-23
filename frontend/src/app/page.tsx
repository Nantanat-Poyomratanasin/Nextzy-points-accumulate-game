"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import SummaryCard from "../components/SummaryCard";
import RewardModal from "../components/RewardModal";
import HistoryTabs from "../components/HistoryTabs";
import RewardHistory from "../components/RewardHistory";
import PlayHistory from "../components/PlayHistory";
import FooterButton from "../components/FooterButton";

import { getGameData, claimReward } from "../services/gameApi";

type RewardItem = {
  reward: string;
  createdAt: string;
};

type PlayHistoryItem = {
  score: number;
  createdAt: string;
};

export default function Home() {
  const [totalScore, setTotalScore] = useState(0);

  const [showRewardModal, setShowRewardModal] = useState(false);
  const [selectedReward, setSelectedReward] = useState("");
  const [activeTab, setActiveTab] = useState<"play" | "reward">("play");

  const [rewardHistory, setRewardHistory] = useState<RewardItem[]>([]);
  const [playHistory, setPlayHistory] = useState<PlayHistoryItem[]>([]);

  const claimedA = rewardHistory.some((item) => item.reward === "A");

  const claimedB = rewardHistory.some((item) => item.reward === "B");

  const claimedC = rewardHistory.some((item) => item.reward === "C");

  useEffect(() => {
    const loadGameData = async () => {
      const data = await getGameData();
      console.log(data);
      setTotalScore(data.totalScore);

      setPlayHistory(data.playHistory);

      setRewardHistory(data.rewardHistory);
    };

    loadGameData();
  }, []);

  const handleClaimA = async () => {
    await claimReward("A");

    const data = await getGameData();

    setRewardHistory(data.rewardHistory);
    setTotalScore(data.totalScore);

    setSelectedReward("A");
    setShowRewardModal(true);
  };

  const handleClaimB = async () => {
    await claimReward("B");

    const data = await getGameData();

    setRewardHistory(data.rewardHistory);
    setTotalScore(data.totalScore);

    setSelectedReward("B");
    setShowRewardModal(true);
  };

  const handleClaimC = async () => {
    await claimReward("C");

    const data = await getGameData();

    setRewardHistory(data.rewardHistory);
    setTotalScore(data.totalScore);

    setSelectedReward("C");
    setShowRewardModal(true);
  };

  const router = useRouter();

  return (
    <main className="min-h-screen flex justify-center  bg-white">
      <div className="relative w-[375px] min-h-[812px]">
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
