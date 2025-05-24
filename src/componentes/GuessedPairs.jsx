import React from "react";

const GuessedPairs = ({ guessed }) => {
  return (
    <>
      <h2>Parejas encontradas</h2>
      <ul id="gussedWords">
        {guessed.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </>
  );
};

export default GuessedPairs;
