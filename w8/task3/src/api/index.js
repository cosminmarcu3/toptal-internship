const baseURL = "http://dataservice.accuweather.com";

const computeLocationURL = (query) => {
  const useGeoposition = query.latitude && query.longitude;

  const q = useGeoposition ? `${query.latitude},${query.longitude}` : query;

  return `${baseURL}/locations/v1/cities/${
    useGeoposition ? "geoposition/" : ""
  }search?apikey=${process.env.REACT_APP_API_KEY}&q=${q}`;
};

const getLocationKey = (query) =>
  fetch(computeLocationURL(query)).then((response) => response.json());

const getWeather = (key) =>
  fetch(
    `${baseURL}/forecasts/v1/daily/5day/${key}?apikey=${process.env.REACT_APP_API_KEY}`
  ).then((response) => response.json());

export { getLocationKey, getWeather };
