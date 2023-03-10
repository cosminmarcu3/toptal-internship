import styles from "./WeatherCard.module.css";

const WeatherCard = ({ forecast }) => {
  const { Temperature, Day } = forecast;

  const date = new Date(forecast.Date);

  return (
    <li className={styles.weather_card}>
      <div>
        {date.getMonth() + 1} / {date.getDate()}
      </div>
      <img
        src={`https://developer.accuweather.com/sites/default/files/${Day.Icon.toString().padStart(
          2,
          "0"
        )}-s.png`}
      />
      <div className={styles.weather_condition}>{Day.IconPhrase}</div>
      <div className={styles.weather_temperature}>
        <h3>{Temperature.Minimum.Value}</h3>/{Temperature.Maximum.Value}&#8457;
      </div>
    </li>
  );
};

export default WeatherCard;
