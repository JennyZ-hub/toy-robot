import { useContext } from "react";
import { AppContext } from "../../../../../../AppContext";

function Display() {
  const { row, cell, face } = useContext(AppContext);
  return (
    <p className="bg-green-600">
      {face}, {row}, {cell}
    </p>
  );
}
export default Display;
