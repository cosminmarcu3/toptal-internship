const baseURL = "http://dataservice.accuweather.com";
const apiKey = "h0ASSihbFHHagGFpsewW4SWNAOxd1jEl";

const getLocationKey = (query) => {
  const useGeoposition =
    query.hasOwnProperty("longitude") && query.hasOwnProperty("latitude");

  const q = useGeoposition ? `${query.latitude},${query.longitude}` : query;

  return fetch(
    `${baseURL}/locations/v1/cities/${
      useGeoposition ? "geoposition/" : ""
    }search?apikey=${apiKey}&q=${q}`
  ).then((response) => response.json());
};

const getWeather = (key) =>
  fetch(`${baseURL}/forecasts/v1/daily/5day/${key}?apikey=${apiKey}`).then(
    (response) => response.json()
  );

export { getLocationKey, getWeather };
