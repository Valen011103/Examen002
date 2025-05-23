import React from "react";
import "../styles.css";

const Body = () => {
  return (
    <>
      <section id="AppCards"></section>
      <section id="AppControlPanel">
        <h2>Vidas:</h2>
        <div id="health"></div>
        <h2>Parejas encontradas</h2>
        <ul id="gussedWords"></ul>
        <button id="restart">Reiniciar</button>
      </section>
    </>
  );
};

export default Body;
