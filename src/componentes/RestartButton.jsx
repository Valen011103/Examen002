import React from "react";

const RestartButton = ({ onClick }) => {
  return (
    <button id="restart" onClick={onClick}>
      Reiniciar
    </button>
  );
};

export default RestartButton;
