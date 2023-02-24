import collection from "./movies.json" assert { type: "json" };

const movieTemplate = document.getElementById("template");
const movieList = [];

const movieFactory = ({ title, year, genres, posterUrl }) => {
  const currentMovie = movieTemplate.content.cloneNode(true);
  const poster = currentMovie.querySelector(".poster");

  currentMovie.querySelector(".title").textContent = title;

  currentMovie.querySelector(".year").textContent = `(${year})`;

  currentMovie.querySelector(".genres").append(
    ...genres.map((genre) => {
      const genreItem = document.createElement("li");
      genreItem.textContent = genre;
      return genreItem;
    })
  );

  poster.src = posterUrl;
  poster.addEventListener(
    "error",
    ({ currentTarget }) => (currentTarget.src = "./defaultposter.jpg")
  );

  return currentMovie.querySelector(".item");
};

collection.movies.forEach((movie) => movieList.push(movieFactory(movie)));

document.getElementById("movies").append(...movieList);
