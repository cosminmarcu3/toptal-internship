"use strict";

const onCountdownCancel = (e) => {
  if (e.target.classList.contains("cancel")) {
    clearInterval(e.target.dataset.interval);
    e.target.parentElement.remove();
  }
};

const onWindowLoaded = () => {
  const formInput = document.querySelector(".form_input");
  const formError = document.querySelector(".form_error");
  const list = document.querySelector(".list");

  const onFormSubmit = (e) => {
    e.preventDefault();

    const splitInput = formInput.value.split(":");

    if (
      splitInput.length !== 3 ||
      splitInput.some((input) => input < 0 || input > 59)
    ) {
      formError.classList.add("form_error_visible");
    } else {
      formError.classList.remove("form_error_visible");

      const template = document
        .querySelector("#countdown_template")
        .cloneNode(true);

      const countdown = new Countdown(template);

      countdown.start();

      ["hh", "mm", "ss"].forEach(
        (input, index) =>
          (template.content.querySelector(`.${input}`).innerText =
            splitInput[index])
      );

      list.appendChild(template.content);
    }
  };

  document.querySelector(".form").addEventListener("submit", onFormSubmit);
  list.addEventListener("click", onCountdownCancel);
};

window.addEventListener("load", onWindowLoaded);

class Countdown {
  interval;
  constructor(template) {
    this.element = template.content.children[0];
  }

  start() {
    const secondsElement = this.element.querySelector(".ss");
    const minutesElement = this.element.querySelector(".mm");
    const hoursElement = this.element.querySelector(".hh");

    const elapseTime = () => {
      const secondsAreElapsed = secondsElement.innerText <= 0;
      const minutesAreElapsed = minutesElement.innerText <= 0;

      if (
        secondsAreElapsed &&
        minutesAreElapsed &&
        hoursElement.innerText <= 0
      ) {
        clearInterval(this.interval);
        return;
      }

      if (secondsAreElapsed) {
        if (minutesAreElapsed) {
          hoursElement.innerText = (hoursElement.innerText - 1).padStart(
            2,
            "0"
          );
          minutesElement.innerText = 59;
        } else {
          minutesElement.innerText = (minutesElement.innerText - 1)
            .toString()
            .padStart(2, "0");
        }

        secondsElement.innerText = 59;
      } else {
        secondsElement.innerText = (parseInt(secondsElement.innerText) - 1)
          .toString()
          .padStart(2, "0");
      }
    };

    this.interval = setInterval(elapseTime, 1000);

    this.element
      .querySelector(".cancel")
      .setAttribute("data-interval", this.interval);
  }
}
