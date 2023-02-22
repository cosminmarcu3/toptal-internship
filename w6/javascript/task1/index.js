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

      const countdown = new Countdown(template, splitInput);

      countdown.start();

      list.appendChild(template.content);
    }
  };

  document.querySelector(".form").addEventListener("submit", onFormSubmit);
  list.addEventListener("click", onCountdownCancel);
};

window.addEventListener("load", onWindowLoaded);

class Countdown {
  interval;
  time;

  constructor(template, time) {
    const element = template.content.children[0];

    this.time = time[0] * 3600 + time[1] * 60 + parseInt(time[2]);

    this.cancel = element.querySelector(".cancel");
    this.secondsElement = element.querySelector(".ss");
    this.minutesElement = element.querySelector(".mm");
    this.hoursElement = element.querySelector(".hh");

    this.updateTimeElements();
  }

  updateTimeElements() {
    const minutes = this.time % 3600;

    this.hoursElement.innerText = parseInt(this.time / 3600)
      .toString()
      .padStart(2, "0");
    this.minutesElement.innerText = parseInt(minutes / 60)
      .toString()
      .padStart(2, "0");
    this.secondsElement.innerText = parseInt(minutes % 60)
      .toString()
      .padStart(2, "0");
  }

  start() {
    this.interval = setInterval(() => {
      if (this.time <= 0) {
        clearInterval(this.interval);
        return;
      }

      this.time--;

      this.updateTimeElements();
    }, 1000);

    this.cancel.setAttribute("data-interval", this.interval);
  }
}
