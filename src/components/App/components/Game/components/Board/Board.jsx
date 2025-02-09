import Row from "./components/row";
//import { useContext } from "react";
//import { AppContext } from "../../../../AppContext";

function Board() {
  const Row_COUNT = 5;
  //const { row, cell, face } = useContext(AppContext);
  return (
    <div className="border border-gray-300 p-4">
      {Array.from({ length: Row_COUNT }).map((_, index) => (
        <Row key={index} rowId={5 - index} />
      ))}
    </div>
  );
}
export default Board;
