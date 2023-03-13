import styles from "./WeatherCard.module.css";

const imgBaseURL = "https://developer.accuweather.com/sites/default/files";

const computeImgURL = ({ Icon }) =>
  `${imgBaseURL}/${Icon.toString().padStart(2, "0")}-s.png`;

const fahrenheit = <>&#8457;</>;

const WeatherCard = ({ forecast }) => {
  const { Temperature, Day } = forecast;

  const date = new Date(forecast.Date);

  const getTemperature = (extremity) => Temperature[extremity].Value;

  return (
    <li className={styles.weather_card}>
      <div>
        {date.getMonth() + 1} / {date.getDate()}
      </div>
      <img src={computeImgURL(Day)} alt={Day.IconPhrase} />
      <div className={styles.weather_condition}>{Day.IconPhrase}</div>
      <div className={styles.weather_temperature}>
        <h3>{getTemperature("Minimum")}</h3>/{getTemperature("Maximum")}
        {fahrenheit}
      </div>
    </li>
  );
};

export default WeatherCard;
