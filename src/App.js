import React from "react";
import Header from "./componentes/header";
import Engine from "./componentes/Engine";
import "./styles.css";

const App = () => {
  return (
    <div className="AppContainer">
      <Header />
      <main>
        <Engine />
      </main>
    </div>
  );
};

export default App;
