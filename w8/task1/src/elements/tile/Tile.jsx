import styles from "./Tile.module.css";

import { useState, useRef } from "react";

import randomRGB from "../../util/randomRGB";

const Tile = () => {
  const [colorIsVisible, setColorVisibility] = useState(false);
  const backgroundRef = useRef(randomRGB());

  return (
    <div
      className={styles.tile}
      style={{ backgroundColor: backgroundRef.current }}
      onClick={() => setColorVisibility(!colorIsVisible)}
    >
      {colorIsVisible ? backgroundRef.current : ""}
    </div>
  );
};

export default Tile;
