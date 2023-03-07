import styles from "./TilesList.module.css";

import { Tile } from "../../elements/index";

const TilesList = ({ length }) => (
  <ul className={styles.tilesList}>
    {Array.from({ length }, (_, index) => (
      <Tile key={index} />
    ))}
  </ul>
);

export default TilesList;
