import styles from "./Suggestion.module.css";

const Suggestion = ({ suggestion, onClick }) => {
  return (
    <li className={styles.suggestion} onClick={onClick}>
      <h2 className={styles.suggestion_name}>{suggestion.EnglishName}</h2>
      <div className={styles.suggestion_details}>
        <span>{suggestion.Country.EnglishName},</span>
        <span>{suggestion.AdministrativeArea.EnglishName}</span>
      </div>
    </li>
  );
};

export default Suggestion;
