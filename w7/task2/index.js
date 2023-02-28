import { queryDatabase } from "./service/index.js";

const dom = {};

let allCountries;

const state = {
  countries: [],
  errorMessage: "",
  loading: true,
};

let statePreviousSnapshot = {};

const handlePromiseResult = (response) => {
  statePreviousSnapshot = JSON.parse(JSON.stringify(state));

  state.loading = false;

  if (Array.isArray(response)) {
    state.countries = response;
    allCountries = response;
  } else {
    state.error = response.toString();
  }

  renderInterface();
};

const handleCountrySearch = ({ target }) => {
  statePreviousSnapshot = JSON.parse(JSON.stringify(state));
  state.countries = allCountries.filter((country) =>
    country.name.common.toLowerCase().includes(target.value.toLowerCase())
  );

  renderInterface();
};

const init = () => {
  dom.card = document.querySelector(".card");
  dom.loader = document.querySelector(".loader");
  dom.error = document.querySelector(".error");
  dom.countries_container = document.querySelector(".countries_container");
  dom.countriesList = dom.countries_container.querySelector(".countries");

  dom.countries_container
    .querySelector(".search")
    .addEventListener("input", handleCountrySearch);

  queryDatabase("?fields=name,flags,languages")
    .then(handlePromiseResult)
    .catch(handlePromiseResult);
};

const setInterfaceElementsVisibility = (
  countries_containerIsVisible,
  loaderIsVisible,
  errorIsVisible
) => {
  const { countries_container, loader, error } = dom;

  if (countries_containerIsVisible) {
    countries_container.classList.remove("hidden");
  } else {
    countries_container.classList.add("hidden");
  }

  if (loaderIsVisible) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }

  if (errorIsVisible) {
    error.classList.remove("hidden");
  } else {
    error.classList.add("hidden");
  }
};

const renderInterface = () => {
  const { error, countriesList } = dom;
  const { loading, errorMessage, countries } = state;

  console.log(statePreviousSnapshot, state);

  if (loading && statePreviousSnapshot.loading !== loading) {
    setInterfaceElementsVisibility(false, true, false);
    error.textContent = "";

    return;
  }

  if (
    errorMessage.length &&
    statePreviousSnapshot.errorMessage !== errorMessage
  ) {
    setInterfaceElementsVisibility(false, false, true);
    error.textContent = errorMessage;

    return;
  }

  if (
    JSON.stringify(statePreviousSnapshot.countries) == JSON.stringify(countries)
  ) {
    return;
  }

  countriesList.innerHTML = "";

  setInterfaceElementsVisibility(true, false, false);
  countries
    .map(countryFactory)
    .forEach((countryItem) => countriesList.appendChild(countryItem));
};

const countryFactory = ({ flags, name, languages }) => {
  const createdCountry = dom.card.content.cloneNode(true);

  createdCountry.querySelector("img").src = flags.png;
  createdCountry.querySelector("img").alt = flags.alt;

  createdCountry.querySelector("h3").textContent = name.common;

  createdCountry.querySelector(".languages").textContent += Object.values(
    languages || { x: "Language Unknown" }
  ).join(", ");

  return createdCountry;
};

init();
