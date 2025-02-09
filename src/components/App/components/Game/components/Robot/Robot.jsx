import { useContext } from "react";
import { AppContext } from "../../../../AppContext";

function Robot() {
  const { row, cell, face } = useContext(AppContext);

  return <div>Robot</div>;
}

export default Robot;
