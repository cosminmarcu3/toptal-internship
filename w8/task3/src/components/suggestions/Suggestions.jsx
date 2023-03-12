import styles from "./Suggestions.module.css";

import { Suggestion } from "../../elements";

const Suggestions = ({
  suggestions,
  visible,
  setVisibility,
  setCityDataPlaceholder,
}) => {
  const onClick = () => {
    setVisibility(false);
    setCityDataPlaceholder({
      cityKey: suggestion.Key,
      cityName: suggestion.EnglishName,
    });
  };

  let content = <li>No cities found</li>;

  if (!visible) {
    return <></>;
  }

  if (suggestions.length) {
    content = suggestions.map((suggestion) => (
      <Suggestion
        onClick={onClick}
        key={suggestion.Key}
        suggestion={suggestion}
      />
    ));
  }

  return <ul className={styles.suggestions}>{content}</ul>;
};

export default Suggestions;
