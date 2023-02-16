const getAllMoviesByYear = (year) => {
  if (isNaN(year)) throw new Error("The provided paramater is not a number");
  return movies.filter((movie) => movie.year === year.toString());
};

const getAllMoviesByGenre = (searchedGenre) => {
  if (typeof searchedGenre !== "string")
    throw new Error("The provided paramater is not a string");
  return movies.filter((movie) =>
    movie.genres.some(
      (genre) => genre.toLowerCase() === searchedGenre.toLowerCase()
    )
  );
};

const getDurationOfAllMovies = () => {
  let duration = 0;

  for (const movie of movies) {
    duration += parseInt(movie.runtime);
  }

  return duration;
};
