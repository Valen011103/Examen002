// import "./styles.css";
// import Header from "./componentes/header";

// export default function App() {
//   return (
//     <div className="App">
//       <Header />
//     </div>
//   );
// }
// src/App.jsx
import React from "react";
import Header from "./components/header";
import Engine from "./components/Engine";
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
