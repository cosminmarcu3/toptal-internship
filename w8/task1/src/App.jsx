import styles from "./App.module.css";

import { useState } from "react";

import { Header, TilesList } from "./components/index.jsx";

const App = () => {
  const [tiles, setTiles] = useState(0);

  return (
    <div className={styles.main}>
      <Header tiles={tiles} setTiles={setTiles} />
      <TilesList length={tiles} />
    </div>
  );
};

export default App;
