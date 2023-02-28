const baseURL = "https://restcountries.com/v3.1/all";

const queryDatabase = (query) =>
  fetch(`${baseURL}/${query || ""}`).then((raw) => raw.json());

export { queryDatabase };
