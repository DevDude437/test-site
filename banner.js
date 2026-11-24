const banner = document.getElementById("test-banner");
const countdown = document.getElementById("banner-countdown");

let secondsLeft = 10 * 60;

function updateCountdown() {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  countdown.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  if (secondsLeft <= 0) {
    banner.remove();
    clearInterval(timer);
    return;
  }

  secondsLeft -= 1;
}

updateCountdown();
const timer = setInterval(updateCountdown, 1000);
