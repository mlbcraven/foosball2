import { useState, useEffect } from "react";
import "../styles/pages.css";
import Cards from "../components/cards";
import { getAllPlayers } from "../api";

function Home() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    getAllPlayers().then(setCards);
  }, []);
  const players = cards.map((player) => {
    return <Cards id={player.id} name={player.name} />;
  });
  return <div className="App">{players}</div>;
}

export default Home;
