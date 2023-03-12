const baseURL = "http://dataservice.accuweather.com";
const apiKeyParam = `?apikey=${process.env.REACT_APP_API_KEY}`;

const computeLocationURL = (query) => {
  const useGeoposition = query.latitude && query.longitude;

  const q = useGeoposition ? `${query.latitude},${query.longitude}` : query;

  const geopositionPath = useGeoposition ? "geoposition/" : "";

  return `${geopositionPath}search${apiKeyParam}&q=${q}`;
};

const getLocationKey = async (query) => {
  const request = await fetch(
    `${baseURL}/locations/v1/cities/${computeLocationURL(query)}`
  );

  const response = await request.json();

  return response;
};

const getWeather = async (key) => {
  const request = await fetch(
    `${baseURL}/forecasts/v1/daily/5day/${key}${apiKeyParam}`
  );

  const response = await request.json();

  return response;
};

export { getLocationKey, getWeather };
