import { useContext } from "react";
import { AppContext } from "../../../../../../../../AppContext";

function Cell({ rowId, cellId }) {
  const { row, cell, face } = useContext(AppContext);
  console.log(rowId, cellId);
  console.log(row, cell, face);
  const isRobotLocation = rowId === row && cellId === cell;
  console.log(isRobotLocation);
  return isRobotLocation ? (
    <div className="h-[32px] w-[32px] border-[2px] border-gray-600 text-center">
      R
    </div>
  ) : (
    <div className="h-[32px] w-[32px] border-[2px] border-gray-600 bg-green-600"></div>
  );
}

export default Cell;
