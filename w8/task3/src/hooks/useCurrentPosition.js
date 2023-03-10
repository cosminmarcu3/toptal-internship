import { useState, useEffect } from "react";
import { getLocationKey } from "../api";

const coordinates = {};

const useCurrentPosition = () => {
  const [loading, setLoading] = useState(true);

  const [cityDetails, setCityDetails] = useState({
    cityKey: "",
    cityName: "",
  });

  const setCurrentCityDetails = ({ coords }) => {
    const usedCoords = coords || coordinates;
    getLocationKey(usedCoords).then(({ Key, EnglishName }) => {
      coordinates.latitude = usedCoords.latitude;
      coordinates.longitude = usedCoords.longitude;

      setCityDetails({
        cityKey: Key,
        cityName: EnglishName,
      });
      setLoading(false);
    });
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(setCurrentCityDetails, () =>
      setLoading(false)
    );
  }, []);

  return {
    loading,
    ...cityDetails,
    setCityDetails,
    setCurrentCityDetails,
  };
};

export default useCurrentPosition;
