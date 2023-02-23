import collection from "./movies.json" assert { type: "json" };

const movieTemplate = document.getElementById("movie_template");
const movieList = [];

const movieFactory = ({ title, year, genres, posterUrl }) => {
  const currentMovie = movieTemplate.content.cloneNode(true);
  const poster = currentMovie.querySelector(".movie_poster");

  currentMovie.querySelector(".movie_title").textContent = title;

  currentMovie.querySelector(".movie_year").textContent = `(${year})`;

  currentMovie.querySelector(".movie_genres").append(
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

  return currentMovie.querySelector(".movie_item");
};

collection.movies.forEach((movie) => movieList.push(movieFactory(movie)));

document.getElementById("movies").append(...movieList);
