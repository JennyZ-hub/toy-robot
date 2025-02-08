import Board from "./components/Board";
import Robot from "./components/Robot";
import Commands from "./components/Commands";
import { useState } from "react";

function move() {
  if (
    (face === "N" && row === 5) ||
    (face === "S" && row === 1) ||
    (face === "E" && cell === 5) ||
    (face === "W" && cell === 1)
  )
    return;
  face === "N" && setRow(() => row + 1);
  face === "S" && setRow(() => row - 1);
  face === "E" && setCell(() => cell + 1),
    face === "W" && setCell(() => cell + 1);
}

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
