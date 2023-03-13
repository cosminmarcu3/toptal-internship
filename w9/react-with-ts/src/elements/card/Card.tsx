import { CharacterUsedData } from "../../hooks/types";

import styles from "./Card.module.css";

const Card = ({
  name,
  gender,
  image,
  status,
}: Omit<CharacterUsedData, "id">) => {
  return (
    <div className={styles.card}>
      <img className={styles.card_image} src={image} />
      <h3 className={styles.card_name}>{name}</h3>
      <div className={styles.card_details}>
        <span>Gender: {gender}</span>
        <span>Status: {status}</span>
      </div>
    </div>
  );
};

export default Card;
