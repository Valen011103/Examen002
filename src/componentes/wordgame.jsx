// import React, { useState, useEffect } from "react";

// async function getRandomWords() {
//   const response = await fetch(
//     "https://random-word.ryanrk.com/api/en/word/random/6"
//   );
//   return response.json();
// }

// const shuffle = (array) => {
//   return array
//     .map((a) => ({ sort: Math.random(), value: a }))
//     .sort((a, b) => a.sort - b.sort)
//     .map((a) => a.value);
// };

// const WordGame = () => {
//   const [words, setWords] = useState([]);
//   const [selectedCards, setSelectedCards] = useState([]);
//   const [guessedWords, setGuessedWords] = useState([]);
//   const [health, setHealth] = useState(5);
//   const [gameStopped, setGameStopped] = useState(false);

//   useEffect(() => {
//     const fetchWords = async () => {
//       const fetchedWords = await getRandomWords();
//       const duplicatedWords = fetchedWords.flatMap((word) => [word, word]);
//       setWords(shuffle(duplicatedWords));
//     };
//     fetchWords();
//   }, []);

//   const selectCard = (word) => {
//     if (gameStopped || selectedCards.includes(word)) return;

//     if (selectedCards.length) {
//       if (selectedCards[0] === word) {
//         setGuessedWords((prev) => [...prev, word]);
//         setSelectedCards([]);
//         if (guessedWords.length + 1 === words.length / 2) {
//           Toastify({
//             text: "¡Has ganado! 🎉 Presiona reiniciar para jugar otra vez.",
//             duration: 3000,
//             style: {
//               background:
//                 "linear-gradient(to right, rgb(48, 104, 23), rgb(24, 38, 192))",
//             },
//           }).showToast();
//           setGameStopped(true);
//         }
//       } else {
//         setHealth((prev) => prev - 1);
//         setTimeout(() => setSelectedCards([]), 1000);
//         if (health - 1 === 0) {
//           Toastify({
//             text: "Has perdido 😢. Presiona reiniciar para intentarlo de nuevo.",
//             duration: 3000,
//             style: {
//               background:
//                 "linear-gradient(to right, rgb(176, 0, 0), rgb(201, 103, 61))",
//             },
//           }).showToast();
//           setGameStopped(true);
//         }
//       }
//     } else {
//       setSelectedCards([word]);
//     }
//   };

//   const restartGame = () => {
//     setWords([]);
//     setSelectedCards([]);
//     setGuessedWords([]);
//     setHealth(5);
//     setGameStopped(false);
//     const fetchWords = async () => {
//       const fetchedWords = await getRandomWords();
//       const duplicatedWords = fetchedWords.flatMap((word) => [word, word]);
//       setWords(shuffle(duplicatedWords));
//     };
//     fetchWords();
//   };

//   return (
//     <div>
//       <h1>Juego de Palabras</h1>
//       <h2>Vidas: {Array(health).fill("❤️").join(" ")}</h2>
//       <ul>
//         {guessedWords.map((word, index) => (
//           <li key={index}>{word}</li>
//         ))}
//       </ul>
//       <div className="word-grid">
//         {words.map((word, index) => (
//           <div
//             key={index}
//             className={`AppCard ${
//               selectedCards.includes(word) ? "flipped" : ""
//             }`}
//             onClick={() => selectCard(word)}
//           >
//             <div className="AppCardStyled"></div>
//             <div className="AppCardValue">{word}</div>
//           </div>
//         ))}
//       </div>
//       <button onClick={restartGame}>Reiniciar</button>
//     </div>
//   );
// };

// export default WordGame;
import React, { useState, useEffect } from "react";

async function getRandomWords() {
  const response = await fetch(
    "https://random-word.ryanrk.com/api/en/word/random/6"
  );
  return response.json();
}

const shuffle = (array) => {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

const WordGame = () => {
  const [words, setWords] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [guessedWords, setGuessedWords] = useState([]);
  const [health, setHealth] = useState(5);
  const [gameStopped, setGameStopped] = useState(false);

  useEffect(() => {
    const fetchWords = async () => {
      const fetchedWords = await getRandomWords();
      const duplicatedWords = fetchedWords.flatMap((word) => [word, word]);
      setWords(shuffle(duplicatedWords));
    };
    fetchWords();
  }, []);

  const selectCard = (word) => {
    if (gameStopped || selectedCards.includes(word)) return;

    if (selectedCards.length) {
      if (selectedCards[0] === word) {
        setGuessedWords((prev) => [...prev, word]);
        setSelectedCards([]);
        if (guessedWords.length + 1 === words.length / 2) {
          Toastify({
            text: "¡Has ganado! 🎉 Presiona reiniciar para jugar otra vez.",
            duration: 3000,
            style: {
              background:
                "linear-gradient(to right, rgb(48, 104, 23), rgb(24, 38, 192))",
            },
          }).showToast();
          setGameStopped(true);
        }
      } else {
        setHealth((prev) => prev - 1);
        setTimeout(() => setSelectedCards([]), 1000);
        if (health - 1 === 0) {
          Toastify({
            text: "Has perdido 😢. Presiona reiniciar para intentarlo de nuevo.",
            duration: 3000,
            style: {
              background:
                "linear-gradient(to right, rgb(176, 0, 0), rgb(201, 103, 61))",
            },
          }).showToast();
          setGameStopped(true);
        }
      }
    } else {
      setSelectedCards([word]);
    }
  };

  const restartGame = () => {
    setWords([]);
    setSelectedCards([]);
    setGuessedWords([]);
    setHealth(5);
    setGameStopped(false);
    const fetchWords = async () => {
      const fetchedWords = await getRandomWords();
      const duplicatedWords = fetchedWords.flatMap((word) => [word, word]);
      setWords(shuffle(duplicatedWords));
    };
    fetchWords();
  };

  return (
    <main>
      <section id="AppCards">
        {words.map((word, index) => (
          <div
            key={index}
            className={`AppCard ${
              selectedCards.includes(word) ? "flipped" : ""
            }`}
            onClick={() => selectCard(word)}
          >
            <div className="AppCardStyled"></div>
            <div className="AppCardValue">{word}</div>
          </div>
        ))}
      </section>
      <section id="AppControlPanel">
        <h2>Vidas:</h2>
        <div id="health">{Array(health).fill("❤️").join(" ")}</div>
        <h2>Parejas encontradas</h2>
        <ul id="gussedWords">
          {guessedWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
        <button id="restart" onClick={restartGame}>
          Reiniciar
        </button>
      </section>
    </main>
  );
};

export default WordGame;
