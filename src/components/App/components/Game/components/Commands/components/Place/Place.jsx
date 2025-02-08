import { useContext } from "react";
import { AppContext } from "../../../../../../AppContext";

function Place() {
  const { setRow, setCell, setFace } = useContext(AppContext);
  function placeRobot(e) {
    e.preventDefault();
    setRow(+e.target.row.value);
    setCell(+e.target.cell.value);
    setFace(e.target.face.value);
  }

  return (
    <form onSubmit={placeRobot}>
      <div>
        <label htmlFor="row">Row</label>
        <input type="text" id="row" name="row" />
      </div>
      <div>
        <label htmlFor="cell">Cell</label>
        <input type="text" id="cell" name="cell" />
      </div>
      <div>
        <label htmlFor="face">Face</label>
        <input type="text" id="face" name="face" />
      </div>
      <button className="text-black-600 hover:cursor:pointer rounded-b-lg border-4 border-green-600 text-center hover:bg-green-600 hover:text-white">
        Place
      </button>
    </form>
  );
}

export default Place;
