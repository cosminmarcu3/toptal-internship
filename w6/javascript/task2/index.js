import cities from "./cities.json" assert { type: "json" };

const list = document.getElementById("list");
const pickedCountryElement = document.getElementById("picked_country");
const answerTemplate = document.getElementById("answer");
const form = document.querySelector(".form");
const form_input = document.querySelector(".form_name");
const form_ranking = document.querySelector(".form_ranking");
const main = document.querySelector(".main");
let round = 1;
let score = 0;

const extractRandomItem = (array) =>
  array.splice(Math.floor(Math.random() * array.length), 1)[0];

const switchContainersVisibility = (showMain) => {
  form.classList[showMain ? "add" : "remove"]("invisible");
  main.classList[showMain ? "remove" : "add"]("invisible");
};

const saveRanking = ({ preventDefault }) => {
  preventDefault();

  localStorage.setItem(form_input.value, score);

  switchContainersVisibility(true);

  round = 0;

  startNewRound();
};

const transitionateToNextRound = () => {
  if (round === 10) {
    form_ranking.innerText = score;

    switchContainersVisibility(false);

    form.addEventListener("submit", saveRanking);
  } else {
    round++;
    startNewRound();
  }
};

function startNewRound() {
  const shallowCities = [...cities];
  const capitals = [];
  list.innerHTML = "";

  const pickedCity = extractRandomItem(shallowCities);
  const pickedCapitals = [
    pickedCity.country,
    ...Array.from({ length: 3 }, () => extractRandomItem(shallowCities).city),
  ];

  pickedCountryElement.innerText = pickedCity.country;
  pickedCountryElement.setAttribute("data-capital", pickedCity.city);

  pickedCapitals
    .sort(() => 0.5 - Math.random())
    .forEach((capital) => {
      const currentItem = answerTemplate.content.cloneNode(true);
      const currentButton = currentItem.querySelector(".answer_button");

      currentButton.innerText = capital;
      currentButton.setAttribute("data-capital", capital);

      capitals.push(currentItem);
    });

  list.append(...capitals);
}

const onItemSelection = ({ target }) => {
  if (target.classList.contains("answer_button")) {
    const isCorrectAnswer =
      target.dataset.capital === pickedCountryElement.dataset.capital;

    if (isCorrectAnswer) {
      score++;
    }

    target.classList[isCorrectAnswer ? "remove" : "add"]("wrong");
    target.classList[isCorrectAnswer ? "add" : "remove"]("right");

    setTimeout(transitionateToNextRound, 2000);
  }
};

list.addEventListener("click", onItemSelection);
startNewRound();
