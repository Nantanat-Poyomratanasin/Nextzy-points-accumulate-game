"use client";

import { playGame as playGameApi } from "../../services/gameApi";
import { getGameData } from "../../services/gameApi";

import { useState, useEffect } from "react";
import ScoreModal from "../../components/ScoreModal";
import FooterButton from "../../components/FooterButton";
import { useRouter } from "next/navigation";

export default function GamePage() {
  const scores = [300, 500, 1000, 3000];

  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const loadGameData = async () => {
      const data = await getGameData();

      setTotalScore(data.totalScore);
    };

    loadGameData();
  }, []);

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

    let count = 0;

    const interval = setInterval(() => {
      const randomScore = scores[Math.floor(Math.random() * scores.length)];

      setSelectedScore(randomScore);

      count++;

      if (count >= 15) {
        clearInterval(interval);

        finishGame();
      }
    }, 120);
  };

  const finishGame = async () => {
    try {
      const oldScore = totalScore;

      const result = await playGameApi();

      setTotalScore(result.totalScore);

      setFinalScore(result.score);

      setSelectedScore(result.score);

      setTimeout(() => {
        setGameStatus("finish");
        setShowModal(true);
      }, 300);
    } catch (error) {
      console.error(error);

      alert("ไม่สามารถสุ่มคะแนนได้");

      setGameStatus("start");
    }
  };

  const isScoreFull = totalScore >= 10000;

  const router = useRouter();

  return (
    <main className="min-h-screen flex justify-center min-w-[375px] bg-[#F5F5F5]">
      <div className="relative w-full min-h-auto bg-gradient-to-b from-white to-[#FF8D0B] overflow-hidden">
        <h2 className="pt-12 text-center text-[24px] font-semibold text-[#212B36]">
          คะแนนสะสม {totalScore}/10000
        </h2>

        <div className="mt-40 flex justify-center gap-2">
          {scores.map((score) => (
            <div
              key={score}
              className={`
      rounded-[12.5px] px-4 py-1 font-semibold transition-all

     ${
       gameStatus === "start"
         ? "bg-[#1AE3D6] text-[#09862E] text-[24px]"
         : gameStatus === "playing"
           ? selectedScore === score
             ? "bg-[#1AE3D6] text-[#09862E] text-[24px]"
             : "text-[#09862E] text-[24px] opacity-50"
           : selectedScore === score
             ? "bg-[#0EF76F] text-[#09862E] text-[24px]"
             : "text-[#09862E] text-[24px] opacity-50"
     }
    `}
            >
              {score}
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center text-[24px]">
          <button
            onClick={handlePlay}
            disabled={gameStatus === "playing" || isScoreFull}
            className={
              isScoreFull
                ? "bg-gray-400 text-white px-4 py-2 rounded-[12.5px] cursor-not-allowed"
                : gameStatus === "playing"
                  ? "bg-[#FF2428] text-white px-4 py-1 rounded-[12.5px] opacity-30 cursor-not-allowed"
                  : "bg-[#FF2428]  text-white px-4 py-1 rounded-[12.5px]"
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

        <FooterButton text="กลับหน้าหลัก" onClick={() => router.push("/")} />
      </div>
    </main>
  );
}
