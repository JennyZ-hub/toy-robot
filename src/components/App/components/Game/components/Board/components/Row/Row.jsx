import Cell from "./components/Cell";

const CELL_COUNT = 5;
const Row = () => (
  <div className="flex border border-gray-300">
    {Array.from({ length: CELL_COUNT }).map((_, index) => (
      <Cell key={index} cell-id={index} />
    ))}
  </div>
);

export default Row;
