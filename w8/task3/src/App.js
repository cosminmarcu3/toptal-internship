import { useEffect, useState } from "react";

import { useCurrentPosition } from "./hooks";

import { CityForm, Weather } from "./components";
import { Hourglass } from "./elements";

import { getLocationKey } from "./api";

import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);

  const [cityDetails, setCityDetails] = useState({
    cityKey: "",
    name: "",
  });

  const positionPromise = useCurrentPosition();

  useEffect(() => {
    positionPromise
      .then(({ position }) => getLocationKey(position))
      .then(({ Key, EnglishName }) =>
        setCityDetails({ cityKey: Key, name: EnglishName })
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className={styles.main}>
      {loading ? (
        <Hourglass />
      ) : cityDetails.cityKey.length ? (
        <Weather {...{ ...cityDetails }} />
      ) : (
        <CityForm setCityDetails={setCityDetails} />
      )}
    </main>
  );
}

export default App;
