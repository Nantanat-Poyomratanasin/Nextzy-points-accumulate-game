"use client";

import { useState } from "react";
import ScoreModal from "../../components/ScoreModal";

export default function GamePage() {
  const scores = [300, 500, 1000, 3000];

  const [selectedScore, setSelectedScore] = useState<number | null>(null);

  const [gameStatus, setGameStatus] = useState<"start" | "playing" | "finish">(
    "start",
  );

  const [showModal, setShowModal] = useState(false);

  const [finalScore, setFinalScore] = useState<number | null>(null);

  const handlePlay = () => {
    if (gameStatus === "playing") return;

    setGameStatus("playing");

    setSelectedScore(null);
    setShowModal(false);
    setGameStatus("playing");

    let count = 0;

    const interval = setInterval(() => {
      const randomScore = scores[Math.floor(Math.random() * scores.length)];

      setSelectedScore(randomScore);

      count++;

      if (count >= 15) {
        clearInterval(interval);

        setFinalScore(randomScore);

        setTimeout(() => {
          setGameStatus("finish");
          setShowModal(true);
        }, 300);
      }
    }, 120);
  };

  return (
    <main className="min-h-screen flex justify-center bg-[#F5F5F5] p-6">
      <div className="w-[375px] h-[812px] bg-gradient-to-b from-white to-[#FF8D0B] rounded-[24px] overflow-hidden">
        <h2 className="pt-12 text-center text-[16px] font-bold text-[#333333]">
          คะแนนสะสม 0/10000
        </h2>

        <div className="mt-40 flex justify-center gap-3">
          {scores.map((score) => (
            <div
              key={score}
              className={`
      rounded-xl px-4 py-2 font-bold transition-all

      ${
        gameStatus === "start"
          ? "bg-[#27D9D2] text-green-800"
          : selectedScore === score
            ? "bg-green-500 text-white"
            : "text-green-500"
      }
    `}
            >
              {score}
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={handlePlay}
            disabled={gameStatus === "playing"}
            className={
              gameStatus === "playing"
                ? "bg-pink-300 text-white px-4 py-2 rounded"
                : "bg-red-500 text-white px-4 py-2 rounded"
            }
          >
            สุ่มคะแนน
          </button>
        </div>

        <ScoreModal
          isOpen={showModal}
          score={finalScore}
          onClose={() => setShowModal(false)}
        />
      </div>
    </main>
  );
}
