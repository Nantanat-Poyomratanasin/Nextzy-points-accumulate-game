const API_URL = "http://localhost:3002";

export const getGameData = async () => {
  const res = await fetch(`${API_URL}/game`);
  return res.json();
};

export const playGame = async () => {
  const res = await fetch(`${API_URL}/game/play`, {
    method: "POST",
  });

  return res.json();
};

export const resetGame = async () => {
  const res = await fetch(`${API_URL}/game/reset`, {
    method: "POST",
  });

  return res.json();
};

export const claimReward = async (reward: string) => {
  const res = await fetch(`${API_URL}/game/reward`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ reward }),
  });

  return res.json();
};
