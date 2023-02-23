import collection from "./movies.json" assert { type: "json" };

const movieTemplate = document.getElementById("movie_template");
const movieList = [];

const movieFactory = ({ title, year, genres, posterUrl }) => {
  const currentMovie = movieTemplate.content.cloneNode(true);

  currentMovie.querySelector(".movie_title").innerText = title;
  currentMovie.querySelector(".movie_year").innerText = `(${year})`;
  currentMovie.querySelector(".movie_genres").innerText = genres.join(", ");
  currentMovie.querySelector(".movie_poster").src = posterUrl;

  return currentMovie.querySelector(".movie_item");
};

collection.movies.forEach((movie) => movieList.push(movieFactory(movie)));

document.getElementById("movies").append(...movieList);
