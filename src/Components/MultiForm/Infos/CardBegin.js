import React from "react";
import "./Card.css";

export default function CardBegin(props) {
  return (
    <div>
      <div className="card" style={{ textAlign: "center" }}>
        <h1>🍣 Aide-nous à ravir tes papilles ! 🌶️</h1>
        <button onClick={() => props.modifyIndex(2)}>COMMENCER</button>
      </div>
    </div>
  );
}
