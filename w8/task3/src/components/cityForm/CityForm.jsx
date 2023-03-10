import { useState } from "react";

import styles from "./CityForm.module.css";

import SearchCity from "../searchCity/SearchCity";

const CityForm = ({ setCityDetails }) => {
  const [cityDataPlaceholder, setCityDataPlaceholder] = useState({
    cityKey: "",
    name: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setCityDetails(cityDataPlaceholder);
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
