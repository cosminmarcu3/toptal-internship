import styles from "./Header.module.css";

const Header = ({ tiles, setTiles }) => (
  <div className={styles.header_container}>
    <button
      onClick={() => tiles > 0 && setTiles(tiles - 1)}
      className={styles.btn}
      disabled={tiles === 0}
    >
      -
    </button>
    <span>{tiles}</span>
    <button
      onClick={() => tiles < 9 && setTiles(tiles + 1)}
      className={styles.btn}
      disabled={tiles === 9}
    >
      +
    </button>
  </div>
);

export default Header;
