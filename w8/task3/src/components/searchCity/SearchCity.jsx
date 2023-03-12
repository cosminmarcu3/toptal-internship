import { useState } from "react";

import styles from "./SearchCity.module.css";

import { getLocationKey } from "../../api";

import debounce from "lodash.debounce";
import Suggestions from "../suggestions/Suggestions";

const SearchCity = ({
  searchInput,
  setSearchInput,
  setCityDataPlaceholder,
}) => {
  const [suggestions, setSuggestions] = useState([]);
  const [visible, setVisibility] = useState(false);

  const handleRenderOnInputChange = (target) => {
    setSearchInput(target.value);
    setVisibility(target.value.length);
  };

  const handleInputChange = ({ target }) => {
    handleRenderOnInputChange(target);
    getLocationKey(target.value).then((data) => setSuggestions(data || []));
  };

  return (
    <div className={styles.search_container}>
      <input
        className={styles.search_input}
        placeholder="Enter your city"
        type="text"
        value={searchInput}
        onChange={debounce(handleInputChange, 1000)}
      />

      <Suggestions
        visible={visible}
        suggestions={suggestions}
        setCityDataPlaceholder={setCityDataPlaceholder}
        setVisibility={setVisibility}
      />
    </div>
  );
};

export default SearchCity;
