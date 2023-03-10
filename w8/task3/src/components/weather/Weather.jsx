import styles from "./Weather.module.css";

import { useWeatherData } from "../../hooks";

import { WeatherCard, Hourglass } from "../../elements";

const Weather = ({ cityKey, name }) => {
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
      <div className={styles.city_name}>{name}</div>
      <ul className={styles.weather_list}>
        {data.DailyForecasts.map((forecast, index) => (
          <WeatherCard {...{ forecast, key: index }} />
        ))}
      </ul>
    </div>
  );
};

export default Weather;
