import { useState, useEffect } from "react";
import { ApiResponse, CharacterUsedData } from "./types";

const baseURL = "https://rickandmortyapi.com/api";

const useCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<CharacterUsedData[]>([]);

  useEffect(() => {
    fetch(`${baseURL}/character`)
      .then((response) => response.json())
      .then(({ results }: ApiResponse) =>
        setCharacters(
          results.map(({ id, image, gender, status, name }) => ({
            id,
            image,
            gender,
            status,
            name,
          }))
        )
      )
      .finally(() => setLoading(false));
  }, []);

  return { characters, loading };
};

export default useCharacters;
