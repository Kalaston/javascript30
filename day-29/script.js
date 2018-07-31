let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const buttons = document.querySelectorAll(".timer__button");
const endTime = document.querySelector(".display__end-time");
const form = document.querySelector(".customForm");
const audio = document.querySelector("audio");

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //Check if timer is zero
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    if (secondsLeft === 0) audio.play();

    //display time
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainSeconds = seconds % 60;
  minutes < 10 && (minutes = "0" + minutes);
  remainSeconds < 10 && (remainSeconds = "0" + remainSeconds);
  const display = `${minutes}:${remainSeconds}`;
  timerDisplay.innerHTML = display;
}

function displayEndTime(seconds) {
  const time = new Date(seconds);
  const hour = time.getHours();
  const minutes = time.getMinutes();
  endTime.innerHTML = `Be back at ${hour > 12 ? hour - 12 : hour}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
}
buttons.forEach(button =>
  button.addEventListener("click", () => timer(button.dataset.time))
);

document.customForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const mins = this.minutes.value.replace(/\D/g, "");
  timer(mins * 60);
  this.reset();
});
