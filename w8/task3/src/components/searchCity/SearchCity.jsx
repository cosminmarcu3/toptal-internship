import { useState } from "react";

import styles from "./SearchCity.module.css";

import { Suggestion } from "../../elements";

import { getLocationKey } from "../../api";

import debounce from "lodash.debounce";

const SearchCity = ({ setCityDataPlaceholder }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [visible, setVisibility] = useState(false);

  const handleInputChange = debounce((e) => {
    setVisibility(e.target.value.length);
    getLocationKey(e.target.value).then((data) => setSuggestions(data || []));
  }, 1000);

  return (
    <div className={styles.search_container}>
      <input
        className={styles.search_input}
        placeholder="Enter your city"
        type="text"
        onChange={handleInputChange}
      />

      {visible ? (
        <ul className={styles.suggestions}>
          {suggestions.length ? (
            suggestions.map((suggestion) => (
              <Suggestion
                onClick={() => {
                  setVisibility(false);
                  setCityDataPlaceholder({
                    cityKey: suggestion.Key,
                    name: suggestion.EnglishName,
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
      ) : null}
    </div>
  );
};

export default SearchCity;
