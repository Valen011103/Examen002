import "./styles.css";
import Body from "./componentes/body";
import Header from "./componentes/header";
import WordGame from "./componentes/wordgame";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <WordGame />
    </div>
  );
}
