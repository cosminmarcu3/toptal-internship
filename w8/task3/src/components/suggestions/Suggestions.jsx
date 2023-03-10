import styles from "./Suggestions.module.css";

import { Suggestion } from "../../elements";

const Suggestions = ({
  suggestions,
  setVisibility,
  setCityDataPlaceholder,
}) => (
  <ul className={styles.suggestions}>
    {suggestions.length ? (
      suggestions.map((suggestion) => (
        <Suggestion
          onClick={() => {
            setVisibility(false);
            setCityDataPlaceholder({
              cityKey: suggestion.Key,
              cityName: suggestion.EnglishName,
            });
          }}
          key={suggestion.Key}
          suggestion={suggestion}
        />
      ))
    ) : (
      <li>No cities found</li>
    )}
  </ul>
);

export default Suggestions;
