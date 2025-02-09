import Button from "./components/Button";
import Display from "./components/Display";
import Place from "./components/Place";
import { useContext } from "react";
import { AppContext } from "../../../../AppContext";

function Commands() {
  const commands = ["Move", "Left", "Right", "Report"];
  const { row, cell, face, setRow, setCell, setFace } = useContext(AppContext);
  console.log(row, cell, face);
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
    face === "E" && setCell(() => cell + 1);
    face === "W" && setCell(() => cell + 1);
  }

  function turnLeft() {
    const turn = {
      N: "W",
      W: "S",
      S: "E",
      E: "N",
    };
    setFace(turn[face]);
  }

  function turnRight() {
    const turn = {
      N: "E",
      W: "N",
      S: "W",
      E: "S",
    };
    setFace(turn[face]);
  }
  function report() {
    console.log("test");
  }

  const robotAction = {
    Move: move,
    Left: turnLeft,
    Right: turnRight,
    Report: report,
  };

  return (
    <div className="space-y-8">
      <div>
        <Place />
      </div>
      <ul className="space-y-8">
        {commands.map((command) => (
          <li
            key={command}
            className="text-black-600 hover:cursor:pointer rounded-b-lg border-4 border-green-600 text-center hover:bg-green-600 hover:text-white"
          >
            <Button action={robotAction[command]}>{command}</Button>
          </li>
        ))}
      </ul>
      <Display />
    </div>
  );
}

export default Commands;
