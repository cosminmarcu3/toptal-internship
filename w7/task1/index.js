const interface = {
  button: document.querySelector("button"),
  count: document.querySelector("#count"),
  list: document.querySelector("#timers"),
};

let activeTimers = 0;

const setButtonState = () => (interface.button.disabled = !(activeTimers < 3));

const startTimer = (seconds) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(`Done in ${seconds} seconds!`), seconds * 1000)
  );

const onTimerResolve = (message) => {
  interface.list.innerHTML += `<div>${message}</div>`;
  interface.count.textContent = --activeTimers;

  setButtonState();
};

const insertTimer = () => {
  if (!interface.button.disabled) {
    const generatedTime = Math.floor(Math.random() * 8 + 2);

    interface.count.textContent = ++activeTimers;

    setButtonState();

    startTimer(generatedTime).then(onTimerResolve);
  }
};

interface.button.addEventListener("click", insertTimer);
