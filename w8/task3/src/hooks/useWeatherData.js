import { useState, useEffect } from "react";
import { getWeather } from "../api/index";

const useWeatherData = (key) => {
  const [weather, setWeather] = useState({
    data: undefined,
    loading: true,
    error: "",
  });

  useEffect(() => {
    getWeather(key)
      .then((data) => setWeather({ ...weather, data, loading: false }))
      .catch((error) => setWeather({ ...weather, loading: false, error }));
  }, []);

  return weather;
};

export default useWeatherData;
