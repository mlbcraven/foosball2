import React from "react";
import "../styles/cards.css";

export default function Card(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>
        <em>{props.id}</em>
      </p>
    </div>
  );
}
