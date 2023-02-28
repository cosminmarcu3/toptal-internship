const interface = {};

const state = {};

const init = () => {
  state.activeTimers = 0;

  interface.button = document.querySelector("button");
  interface.count = document.querySelector("#count");
  interface.list = document.querySelector("#timers");

  interface.button.addEventListener("click", insertTimer);
};

const setButtonState = () =>
  (interface.button.disabled = !(state.activeTimers < 3));

const startTimer = (seconds) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(`Done in ${seconds} seconds!`), seconds * 1000)
  );

const onTimerResolve = (message) => {
  const timerItem = document.createElement("div");
  timerItem.textContent = message;

  interface.list.appendChild(timerItem);

  interface.count.textContent = --state.activeTimers;

  setButtonState();
};

const insertTimer = () => {
  if (!interface.button.disabled) {
    const generatedTime = Math.floor(Math.random() * 8 + 2);

    interface.count.textContent = ++state.activeTimers;

    setButtonState();

    startTimer(generatedTime).then(onTimerResolve);
  }
};

init();
