import { useCallback, useState } from "react";

import styles from "./CityForm.module.css";

import Suggestions from "../suggestions/Suggestions";

import { getLocationKey } from "../../api";

import debounce from "lodash.debounce";

const placeholderInitial = {
  cityKey: "",
  name: "",
};

const CityForm = ({ setCityDetails }) => {
  const [cityDataPlaceholder, setCityDataPlaceholder] = useState({
    ...placeholderInitial,
  });

  const [suggestions, setSuggestions] = useState([]);
  const [visible, setVisibility] = useState(false);

  const handleInputChange = ({ target }) => {
    setVisibility(target.value.length);

    getLocationKey(target.value).then((data) => setSuggestions(data || []));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setCityDetails(cityDataPlaceholder);
    setCityDataPlaceholder({ ...placeholderInitial });
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <div className={styles.search_container}>
        <input
          className={styles.search_input}
          placeholder="Enter your city"
          type="text"
          onChange={debounce(handleInputChange, 500)}
        />
        <Suggestions
          visible={visible}
          suggestions={suggestions}
          setCityDataPlaceholder={setCityDataPlaceholder}
          setVisibility={setVisibility}
        />
      </div>

      <button
        className={styles.btn}
        disabled={!cityDataPlaceholder.cityKey.length}
      >
        Submit
      </button>
    </form>
  );
};

export default CityForm;
