"use client";

import { useState } from "react";
import SummaryCard from "../components/SummaryCard";

import RewardModal from "../components/RewardModal";

export default function Home() {
  const [totalScore, setTotalScore] = useState(10000);
  const [claimedA, setClaimedA] = useState(false);
  const [claimedB, setClaimedB] = useState(false);
  const [claimedC, setClaimedC] = useState(false);
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [selectedReward, setSelectedReward] = useState("");

  const handleClaimA = () => {
    setClaimedA(true);

    setSelectedReward("A");
    setShowRewardModal(true);
  };

  const handleClaimB = () => {
    setClaimedB(true);

    setSelectedReward("B");
    setShowRewardModal(true);
  };

  const handleClaimC = () => {
    setClaimedC(true);

    setSelectedReward("C");
    setShowRewardModal(true);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <SummaryCard
        score={totalScore}
        claimedA={claimedA}
        claimedB={claimedB}
        claimedC={claimedC}
        onClaimA={handleClaimA}
        onClaimB={handleClaimB}
        onClaimC={handleClaimC}
      />

      <RewardModal
        isOpen={showRewardModal}
        rewardName={selectedReward}
        onClose={() => setShowRewardModal(false)}
      />
    </main>
  );
}
