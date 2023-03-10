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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setCityDetails(cityDataPlaceholder);
    setCityDataPlaceholder({ ...placeholderInitial });
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.form}>
      <SearchCity
        cityKeyPlaceholder={cityDataPlaceholder.cityKey}
        setCityDataPlaceholder={setCityDataPlaceholder}
      />

      <button
        className={styles.btn}
        disabled={!cityDataPlaceholder.cityKey.length}
      >
        Send
      </button>
    </form>
  );
};

export default CityForm;
