import Cell from "./components/Cell";

const CELL_COUNT = 5;
function Row({ rowId }) {
  return (
    <div className="flex border border-gray-300">
      {Array.from({ length: CELL_COUNT }).map((_, index) => (
        <Cell key={index} cellId={index + 1} rowId={rowId} />
      ))}
    </div>
  );
}

export default Row;
