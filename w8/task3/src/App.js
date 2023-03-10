import useCurrentPosition from "./hooks/useCurrentPosition";

import { CityForm, Weather } from "./components";
import { Hourglass } from "./elements";

import styles from "./App.module.css";

function App() {
  const { loading, cityKey, cityName, setCurrentCityDetails, setCityDetails } =
    useCurrentPosition();

  let content;

  if (loading) {
    content = <Hourglass />;
  }

  if (cityKey.length) {
    content = (
      <>
        <CityForm setCityDetails={setCityDetails} />
        <div className={styles.switch_location} onClick={setCurrentCityDetails}>
          Use current location
        </div>
        <Weather cityKey={cityKey} cityName={cityName} />;
      </>
    );
  }

  return <main className={styles.main}>{content}</main>;
}

export default App;
