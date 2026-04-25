import { useState } from "react";
import "../styles/cardFlip.css";

export default function CardFlip({ front = "Front", back = "Back" }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      data-testid="card"
      className={`cardFlip ${isFlipped ? "flipped" : ""}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="cardFlipInner">
        <div className="cardFlipFront">{front}</div>
        <div className="cardFlipBack">{back}</div>
      </div>
    </div>
  );
}