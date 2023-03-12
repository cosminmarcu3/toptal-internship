import { useState } from "react";

import styles from "./CityForm.module.css";

import SearchCity from "../searchCity/SearchCity";

const placeholderInitial = {
  cityKey: "",
  name: "",
};

const CityForm = ({ setCityDetails }) => {
  const [cityDataPlaceholder, setCityDataPlaceholder] = useState({
    ...placeholderInitial,
  });

  const [searchInput, setSearchInput] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setSearchInput("");
    setCityDetails(cityDataPlaceholder);
    setCityDataPlaceholder({ ...placeholderInitial });
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <SearchCity
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        cityKeyPlaceholder={cityDataPlaceholder.cityKey}
        setCityDataPlaceholder={setCityDataPlaceholder}
      />

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
