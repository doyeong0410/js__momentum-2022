const todays = document.querySelector("h1#todays");
const clock = document.querySelector("h2#clock");
const getDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDate() {
  const today = new Date();
  const year = String(today.getFullYear()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");
  const day = getDays[today.getDay()];
  todays.innerText = `${year}/${month}/${date}
  ${day}`;
}

function getClock() {
  const clocks = new Date();
  const hours = String(clocks.getHours()).padStart(2, "0");
  const minutes = String(clocks.getMinutes()).padStart(2, "0");
  const seconds = String(clocks.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getDate();
setInterval(getDate, 1000);

getClock();
setInterval(getClock, 1000);
