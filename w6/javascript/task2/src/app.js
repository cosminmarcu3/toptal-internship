"use strict";

import cities from "./cities.json" assert { type: "json" };

const selectors = {
  guess: ".guess",
  country: ".country",
  cities: ".city",
  points: ".points",
  round: ".round",
  rounds: ".rounds",
  start: ".start",
  cancel: ".cancel",
  save: ".save",
  player: ".player",
  status: ".status",
  alternatives: ".alternatives",
  saveContainer: ".save_container",
  roundsContainer: ".rounds_container",
  section: ".section",
  dashboard: ".dashboard",
};

const gameInitial = {
  capital: "",
  cityCount: 4,
  round: 0,
  rounds: 10,
  country: "",
  cities: [],
  score: 0,
  player: "",
  status: "default",
};

let game = { ...gameInitial };

const view = {};

const hydrateInit = () => {
  view.startBtn.addEventListener("click", startRound);
  view.cancelBtn.addEventListener("click", stopGame);
  view.alternatives.addEventListener("click", selectAnswer);
  view.save.addEventListener("click", saveRanking);
};

const init = () => {
  const gameElements = document.querySelector(selectors.guess);

  view.sections = gameElements.querySelectorAll(selectors.section);

  view.country = gameElements.querySelector(selectors.country);
  view.alternatives = gameElements.querySelector(selectors.alternatives);
  view.cities = gameElements.querySelectorAll(selectors.cities);

  view.dashboard = gameElements.querySelector(selectors.dashboard);
  view.startBtn = gameElements.querySelector(selectors.start);
  view.cancelBtn = gameElements.querySelector(selectors.cancel);

  view.status = gameElements.querySelector(selectors.status);
  view.roundsContainer = gameElements.querySelector(selectors.roundsContainer);
  view.points = gameElements.querySelector(selectors.points);
  view.round = gameElements.querySelector(selectors.round);
  view.rounds = gameElements.querySelector(selectors.rounds);

  view.player = gameElements.querySelector(selectors.player);
  view.saveContainer = gameElements.querySelector(selectors.saveContainer);
  view.save = gameElements.querySelector(selectors.save);

  hydrateInit();
};

const selectAnswer = ({ target }) => {
  if (target.classList.contains("city") && game.status === "selecting") {
    if (target.textContent === game.capital) {
      target.classList.add("correct");
      game.score++;
      renderStatus();
    } else {
      target.classList.add("wrong");
    }

    game.status = "selected";
  }
};

const saveRanking = () => {
  localStorage.setItem(view.player.value, game.score);
  stopGame();
};

const renderStartBtn = (textContent) => {
  view.startBtn.classList.remove("hide");
  view.startBtn.textContent = textContent;
};

const renderSaveContainer = () => {
  view.sections.forEach((section) => section.classList.add("hide"));
  view.startBtn.classList.add("hide");
  view.saveContainer.classList.remove("hide");
  view.dashboard.classList.remove("hide");
};

const renderGame = () => {
  view.country.textContent = game.country;
  view.country.classList.remove("hide");

  view.cities.forEach((city, index) => {
    city.textContent = game.cities[index];
    city.classList = "city";
  });

  view.alternatives.classList.remove("hide");
};

const renderStatus = () => {
  view.points.textContent = game.score;
  view.round.textContent = game.round;
  view.rounds.textContent = game.rounds;

  view.roundsContainer.classList.remove("hide");
  view.status.classList.remove("hide");
};

const stopGame = () => {
  game = { ...gameInitial };

  renderStartBtn("Start");

  view.sections.forEach((section) => section.classList.add("hide"));
  view.dashboard.classList.remove("hide");
};

const getRandomData = () => {
  const indexes = new Set();
  const size = cities.length;

  if (size < game.cityCount) {
    throw new Error("Not enough cities");
  }

  do {
    indexes.add(Math.floor(Math.random() * size));
  } while (indexes.size < game.cityCount);

  const temp = [...indexes].map((index) => cities[index]);
  game.cities = temp.map((item) => item.city);

  const randomCountry = temp[Math.floor(Math.random() * temp.length)];
  game.country = randomCountry.country;
  game.capital = randomCountry.city;
};

const startRound = () => {
  if (["selected", "default"].includes(game.status)) {
    if (game.round === 10) {
      renderSaveContainer();
      return;
    }

    getRandomData();
    game.round++;
    game.status = "selecting";

    view.startBtn.textContent = "Next";

    renderGame();
    renderStatus();
  }
};

document.addEventListener("DOMContentLoaded", init);
