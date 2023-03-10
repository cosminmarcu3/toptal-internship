import { useState } from "react";

import styles from "./SearchCity.module.css";

import { getLocationKey } from "../../api";

import debounce from "lodash.debounce";
import Suggestions from "../suggestions/Suggestions";

const SearchCity = ({ setCityDataPlaceholder }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [visible, setVisibility] = useState(false);

  const handleInputChange = (e) => {
    setVisibility(e.target.value.length);
    getLocationKey(e.target.value).then((data) => setSuggestions(data || []));
  };

  return (
    <div className={styles.search_container}>
      <input
        className={styles.search_input}
        placeholder="Enter your city"
        type="text"
        onChange={debounce(handleInputChange, 1000)}
      />

      {visible ? (
        <Suggestions
          suggestions={suggestions}
          setCityDataPlaceholder={setCityDataPlaceholder}
          setVisibility={setVisibility}
        />
      ) : null}
    </div>
  );
};

export default SearchCity;
