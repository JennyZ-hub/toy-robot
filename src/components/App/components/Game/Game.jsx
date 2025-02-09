import Board from "./components/Board";
import Commands from "./components/Commands";

function Game() {
  return (
    <main className="m-12 flex justify-between">
      <div>
        <Board />
      </div>
      <Commands />
    </main>
  );
}

export default Game;
