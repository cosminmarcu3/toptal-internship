import styles from "./Weather.module.css";

import useWeatherData from "../../hooks/useWeatherData";

import { WeatherCard, Hourglass } from "../../elements";

const Weather = ({ cityKey, cityName }) => {
  const { data, loading, error } = useWeatherData(cityKey);

  if (loading) {
    return <Hourglass />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.weather}>
      <h1>How's the weather?</h1>
      <div className={styles.city_name}>{cityName}</div>
      <ul className={styles.weather_list}>
        {data.DailyForecasts.map((forecast, index) => (
          <WeatherCard forecast={forecast} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Weather;
