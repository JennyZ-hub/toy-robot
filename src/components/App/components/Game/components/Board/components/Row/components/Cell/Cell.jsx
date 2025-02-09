import { useContext } from "react";
import { AppContext } from "../../../../../../../../AppContext";

function Cell({ rowId, cellId }) {
  const { row, cell, face } = useContext(AppContext);
  const robotFace = {
    N: "border-t-red-600",
    S: "border-b-red-600",
    E: "border-r-red-600",
    W: "border-l-red-600",
  };
  const isRobotLocation = rowId === row && cellId === cell;
  return isRobotLocation ? (
    <div
      className={`h-[32px] w-[32px] border-[5px] ${robotFace[face]} border-gray-600 text-center`}
    >
      R
    </div>
  ) : (
    <div className="h-[32px] w-[32px] border-[2px] border-gray-600 bg-green-600"></div>
  );
}

export default Cell;
