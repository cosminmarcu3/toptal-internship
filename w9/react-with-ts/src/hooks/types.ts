interface Location {
  name: string;
  url: string;
}

interface ResponseInfo {
  count: number;
  next: null | string;
  pages: number;
  prev: null | string;
}

interface CharacterUsedData {
  id: number;
  image: string;
  name: string;
  gender: "Male" | "Female";
  status: "Alive" | "Dead" | "unkown";
}

interface Character extends CharacterUsedData {
  created: string;
  episode: string[];
  location: Location;
  origin: Location;
  species: "Human" | "Alien";
  type: "string";
  url: string;
}

interface ApiResponse {
  info: ResponseInfo;
  results: Character[];
}

export type { Character, CharacterUsedData, ApiResponse };
