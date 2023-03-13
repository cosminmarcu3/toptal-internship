import useCurrentPosition from "./hooks/useCurrentPosition";

import { CityForm, Weather } from "./components";
import { Hourglass } from "./elements";

import styles from "./App.module.css";

function App() {
  const { loading, cityDetails, setCurrentCityDetails, setCityDetails } =
    useCurrentPosition();

  if (loading) {
    return (
      <main className={styles.main}>
        <Hourglass />;
      </main>
    );
  }

  if (!cityDetails.cityKey.length) {
    return <main className={styles.main}>No cities available</main>;
  }

  return (
    <main className={styles.main}>
      <CityForm setCityDetails={setCityDetails} />
      <div className={styles.switch_location} onClick={setCurrentCityDetails}>
        Use current location
      </div>
      <Weather {...cityDetails} />;
    </main>
  );
}

export default App;
