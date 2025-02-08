import Header from "./components/Header";
import Game from "./components/Game";
import styles from "./App.module.css";
import { useState } from "react";
import { AppContext } from "./AppContext";

const App = () => {
  const [row, setRow] = useState(1);
  const [cell, setCell] = useState(1);
  const [face, setFace] = useState("N");
  return (
    <AppContext.Provider value={{ row, cell, face, setRow, setCell, setFace }}>
      <div className={styles.layout}>
        <div className={styles.container}>
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
