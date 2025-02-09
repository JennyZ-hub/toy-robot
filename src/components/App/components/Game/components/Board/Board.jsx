/*import Row from "./components/row";*/
import Cell from "./components/Row/components/cell";
import Robot from "../Robot";

const CELL_COUNT = 25;
const Board = () => (
  <div className="col-grid-rows-5 grid grid-cols-5 gap-x-[0] gap-y-[0] border border-gray-300 p-4">
    {Array.from({ length: CELL_COUNT }).map((_, index) => (
      <Cell key={index} />
    ))}
    <Robot />
  </div>
);
export default Board;
