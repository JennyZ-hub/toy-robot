import { useContext } from "react";

import { AppContext } from "../../../../AppContext";

function Actions() {
  const { row, cell, face, setRow, setCell, setFace } = useContext(AppContext);
  function reset() {
    setRow(1);
    setCell(1);
    setFace("N");
    console.log(row, cell, face);
  }

  return (
    <button
      className="rounded-b-sm bg-green-600 p-[4px] text-white"
      onClick={reset}
    >
      Reset
    </button>
  );
}

export default Actions;
