import React from "react";

const Card = ({ word, isFlipped, onClick }) => {
  return (
    <div className={`AppCard ${isFlipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="AppCardStyled"></div>
      <div className="AppCardValue">{word}</div>
    </div>
  );
};

export default Card;
