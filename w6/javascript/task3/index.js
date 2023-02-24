import collection from "./movies.json" assert { type: "json" };

const genreFactory = (genreTemplate, genre) => {
  const currentItem = genreTemplate.content.cloneNode(true);

  currentItem.textContent = genre;

  return currentItem;
};

const movieFactory = (
  template,
  genreTemplate,
  { title, year, genres, posterUrl }
) => {
  const currentMovie = template.content.cloneNode(true);
  const poster = currentMovie.querySelector(".poster");

  currentMovie.querySelector(".title").textContent = title;

  currentMovie.querySelector(".year").textContent = `(${year})`;

  const genresPlacehoder = new DocumentFragment();

  genresPlacehoder.append(
    ...genres.map((genre) => genreFactory(genreTemplate, genre))
  );

  currentMovie.querySelector(".genres").append(genresPlacehoder);

  poster.src = posterUrl;
  poster.addEventListener(
    "error",
    ({ target }) => (target.src = "./defaultposter.jpg"),
    { once: true }
  );

  return currentMovie.querySelector(".item");
};

const init = () => {
  const movieTemplate = document.querySelector("#card_template");
  const genreTemplate = document.querySelector("#genre_template");
  const moviesPlaceholder = new DocumentFragment();

  moviesPlaceholder.append(
    ...collection.movies.map((movie) =>
      movieFactory(movieTemplate, genreTemplate, movie)
    )
  );

  document.getElementById("movies").appendChild(moviesPlaceholder);
};

init();
