import cities from "./cities.json" assert { type: "json" };

const answerTemplate = document.getElementById("answer");
const pickedCountryElement = document.querySelector(".picked_country");
const list = document.querySelector(".answers_list");
const ranking = document.querySelector(".ranking");
const rankingName = document.querySelector(".ranking_name");
const rankingScore = document.querySelector(".ranking_score");
const main = document.querySelector(".main");
let round = 1;
let score = 0;

const extractRandomItem = (array) =>
  array.splice(Math.floor(Math.random() * array.length), 1)[0];

const switchContainersVisibility = (showMain) => {
  ranking.classList[showMain ? "add" : "remove"]("invisible");
  main.classList[showMain ? "remove" : "add"]("invisible");
};

const saveRanking = (e) => {
  e.preventDefault();

  localStorage.setItem(rankingName.value, score);

  switchContainersVisibility(true);

  round = 0;

  startNewRound();
};

const transitionateToNextRound = () => {
  if (round === 10) {
    rankingScore.innerText = score;

    switchContainersVisibility(false);

    ranking.addEventListener("submit", saveRanking);
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
    pickedCity.city,
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
