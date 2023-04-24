import React from "react";
import "../styles/pages.css";
import { useState, useEffect } from "react";
import { getAllGames } from "../api";
import Cards from "../components/cards";

function Games() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getAllGames().then(setCards);
  }, []);
  const games = cards.map((game) => {
    return <Cards id={game.id} name={game.name} />;
  });
  return <div className="GamesPage">{games}</div>;
}

export default Games;
