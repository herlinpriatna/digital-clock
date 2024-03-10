const hour = document.getElementById("hour");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let zone = "AM";

  if (h > 12) {
    h = h - 12;
    zone = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
  ampm.innerText = zone;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

document.addEventListener("DOMContentLoaded", function () {
  const quotes = [
    '"Because one second is more precious than ever. So, lets makes your time fulfill with compassion and positivity"',
    '"The two most powerful warriors are patience and time." - Leo Tolstoy, War and Peace.',
    '"You can’t have a better tomorrow if you are thinking about yesterday all the time." - Charles F. Kettering',
  ];
  let index = 0;
  const kalimatElement = document.getElementById("kalimat");

  function changeQuote() {
    kalimatElement.textContent = quotes[index];
    index = (index + 1) % quotes.length;
  }

  setInterval(changeQuote, 5000); // Change quote every 3 seconds
});
