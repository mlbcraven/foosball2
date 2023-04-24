export function getPlayerHistory(playerId) {
  const options = {
    header: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  fetch(`http://165.227.132.185:3000/games/history/${playerId}`, options);
}

export async function getAllPlayers() {
  const options = {
    header: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  const result = await fetch(`http://165.227.132.185:3000/players`, options);

  return result.json();
}

export async function getAllGames() {
  const options = {
    header: {
      "Content-Type": "application/json",
    },
    method: "GET",
  };
  const result = await fetch(`http://165.227.132.185:3000/games`, options);
  return result.json();
}
