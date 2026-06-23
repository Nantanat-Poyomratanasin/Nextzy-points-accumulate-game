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

  const router = useRouter();

  return (
    <main className="min-h-screen flex justify-center bg-[#F5F5F5]">
      <div className="relative w-[375px] h-[812px] bg-gradient-to-b from-white to-[#FF8D0B] overflow-hidden">
        <h2 className="pt-12 text-center text-[16px] font-bold text-[#333333]">
          คะแนนสะสม {totalScore}/10000
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
        <FooterButton text="กลับหน้าหลัก" onClick={() => router.push("/")} />
      </div>
    </main>
  );
}
