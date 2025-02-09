import Board from "./components/Board";
import Robot from "./components/Robot";
import Commands from "./components/Commands";

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
