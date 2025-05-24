// src/engine/wordService.js
export async function getRandomWords() {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?number=6&lang=es"
  );
  return await response.json();
}
