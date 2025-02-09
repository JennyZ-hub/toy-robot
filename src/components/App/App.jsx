import Header from "./components/Header";
import Game from "./components/Game";
import { useState } from "react";
import { AppContext } from "./AppContext";

const App = () => {
  const [row, setRow] = useState(1);
  const [cell, setCell] = useState(1);
  const [face, setFace] = useState("N");
  return (
    <AppContext.Provider value={{ row, cell, face, setRow, setCell, setFace }}>
      <div className="flex items-center justify-center">
        <div className="h-[600px] w-[800px] p-[36px]">
          <Header />
          <div>
            <Game />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
