import styles from "./Suggestions.module.css";

import { Suggestion } from "../../elements";

const Suggestions = ({
  suggestions,
  visible,
  setVisibility,
  setCityDataPlaceholder,
}) => {
  const onClick = (suggestion) => {
    setVisibility(false);
    setCityDataPlaceholder({
      cityKey: suggestion.Key,
      cityName: suggestion.EnglishName,
    });
  };

  if (!visible) {
    return null;
  }

  if (!suggestions.length) {
    return <ul className={styles.suggestions}>No cities found</ul>;
  }

  return (
    <ul className={styles.suggestions}>
      {suggestions.map((suggestion) => (
        <Suggestion
          onClick={() => onClick(suggestion)}
          key={suggestion.Key}
          suggestion={suggestion}
        />
      ))}
    </ul>
  );
};

export default Suggestions;
