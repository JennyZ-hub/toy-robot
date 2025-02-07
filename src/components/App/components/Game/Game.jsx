import Board from "./components/Board";
import Robot from "./components/Robot";
import Commands from "./components/Commands";
import { createContext } from "react";

const GameContext = createContext();
const [row, setRow] = useState(1);
const [cell, setCell] = useState(1);
const [face, setFace] = useState("N");

const Game = () => (
  <main className="m-12 flex justify-between">
    <div>
      <Board />
      <Robot />
    </div>
    <Commands />
  </main>
);

export default Game;
