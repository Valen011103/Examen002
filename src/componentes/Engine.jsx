// src/components/Engine.jsx
import React, { useState, useEffect } from "react";
import Card from "./cards";
import Lives from "./Lives";
import GuessedPairs from "./GuessedPairs";
import RestartButton from "./RestartButton";
import { getRandomWords } from "../engine/wordService";

const Engine = () => {
  const [words, setWords] = useState([]);
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [guessed, setGuessed] = useState([]);
  const [lives, setLives] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);

  useEffect(() => {
    startGame();
  }, []);

  const startGame = async () => {
    const newWords = await getRandomWords();
    const duplicated = [...newWords, ...newWords];
    const shuffled = duplicated
      .map((word) => ({ word, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((item) => item.word);

    setWords(newWords);
    setCards(shuffled);
    setSelected([]);
    setGuessed([]);
    setLives(5);
    setGameOver(false);
    setWin(false);
  };

  const handleCardClick = (word, index) => {
    if (selected.length === 2 || guessed.includes(word) || gameOver) return;

    const newSelected = [...selected, { word, index }];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      const [first, second] = newSelected;

      if (first.word === second.word && first.index !== second.index) {
        setGuessed((prev) => {
          const updated = [...prev, word];
          if (updated.length === words.length) {
            setWin(true);
            setGameOver(true);
          }
          return updated;
        });
        setSelected([]);
      } else {
        setTimeout(() => {
          setSelected([]);
          setLives((prev) => {
            const updated = prev - 1;
            if (updated <= 0) {
              setGameOver(true);
            }
            return updated;
          });
        }, 1000);
      }
    }
  };

  return (
    <>
      <section id="AppCards">
        {cards.map((word, index) => (
          <Card
            key={index}
            word={word}
            onClick={() => handleCardClick(word, index)}
            isFlipped={
              selected.some((c) => c.index === index) || guessed.includes(word)
            }
          />
        ))}
      </section>
      <section id="AppControlPanel">
        <Lives count={lives} />
        <GuessedPairs guessed={guessed} />
        <RestartButton onClick={startGame} />
      </section>
    </>
  );
};

export default Engine;
