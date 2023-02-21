"use strict";

window.addEventListener("load", () => {
  document
    .querySelector("[data-form='container']")
    .addEventListener("submit", (e) => {
      e.preventDefault();

      const splitInput = document
        .querySelector("[data-form='input']")
        .value.split(":");

      let formErrorStyle = document.querySelector("[data-form='error']").style;

      if (
        splitInput.length !== 3 ||
        !splitInput.some((input) => /^\d{1,2}$/.test(input))
      ) {
        formErrorStyle.display = "block";
      } else {
        formErrorStyle.display = "none";
        const template = document
          .querySelector("[data-countdown='container']")
          .cloneNode(true);

        const countdown = new Countdown(template);

        countdown.start();

        ["hh", "mm", "ss"].forEach((input, index) => {
          template.content.querySelector(
            `[data-countdown='${input}']`
          ).innerText = splitInput[index];
          template.content
            .querySelector("[data-countdown='cancel']")
            .addEventListener("click", () => countdown.cancel());
        });

        document
          .querySelector("[data-countdown='list']")
          .appendChild(template.content);
      }
    });
});

class Countdown {
  interval;
  constructor(template) {
    this.element = template.content.children[0];
  }

  start() {
    const startingDate = new Date();
    this.interval = setInterval(() => {
      const secondsElement = this.element.querySelector(
        "[data-countdown='ss']"
      );
      const minutesElement = this.element.querySelector(
        "[data-countdown='mm']"
      );
      const hoursElement = this.element.querySelector("[data-countdown='hh']");

      if (parseInt(secondsElement.innerText) <= 0) {
        if (parseInt(minutesElement.innerText) <= 0) {
          if (parseInt(hoursElement.innerText) <= 0) {
            clearInterval(this.interval);
            return;
          } else {
            hoursElement.innerText = (parseInt(hoursElement.innerText) - 1)
              .toString()
              .padStart(2, "0");
          }
          minutesElement.innerText = 59;
        } else {
          minutesElement.innerText = (parseInt(minutesElement.innerText) - 1)
            .toString()
            .padStart(2, "0");
        }
        secondsElement.innerText = 59;
      } else {
        secondsElement.innerText = (parseInt(secondsElement.innerText) - 1)
          .toString()
          .padStart(2, "0");
      }
    }, 1000);
  }

  cancel() {
    clearInterval(this.interval);
    this.element.remove();
  }
}
