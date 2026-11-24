const banner = document.getElementById("test-banner");
const countdown = document.getElementById("banner-countdown");
const storageKey = "testBannerEndTime";
const durationMs = 10 * 60 * 1000;

let endTime = Number(localStorage.getItem(storageKey));

if (!endTime) {
  endTime = Date.now() + durationMs;
  localStorage.setItem(storageKey, String(endTime));
}

function updateCountdown() {
  const remainingMs = endTime - Date.now();

  if (remainingMs <= 0) {
    banner.remove();
    localStorage.removeItem(storageKey);
    clearInterval(timer);
    return;
  }

  const totalSeconds = Math.ceil(remainingMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  countdown.textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

updateCountdown();
const timer = setInterval(updateCountdown, 250);
