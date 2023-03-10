import { useEffect } from "react";

const useCurrentPosition = () =>
  new Promise((resolve, reject) => {
    const rejectionObj = {
      position: undefined,
      succsess: false,
      error: true,
    };

    if (!navigator.geolocation) {
      reject(rejectionObj);
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude, longitude } = coords;

        resolve({
          position: { latitude, longitude },
          succsess: true,
          error: false,
        });
      },
      () => reject(rejectionObj)
    );
  });

export default useCurrentPosition;
