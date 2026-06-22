"use client";

import SummaryCard from "../components/SummaryCard";
import RewardButton from "../components/RewardButton";
import { useState } from "react";

export default function Home() {
  const [totalScore, setTotalScore] = useState(6000);
  const [claimedA, setClaimedA] = useState(false);
  const [showRewardModal, setShowRewardModal] = useState(false);

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <SummaryCard score={totalScore} />
      <RewardButton
        score={totalScore}
        claimed={claimedA}
        onClaim={() => {
          setClaimedA(true);
        }}
      />
    </main>
  );
}
