let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weekday = days[now.getDay()];
let day = document.querySelector("#day");
day.innerHTML = `${weekday}`;

let hours = now.getHours();
let minutes = now.getMinutes();
let time = document.querySelector("#time");
time.innerHTML = `${hours}:${minutes}`;

let theDate = document.querySelector("#current-date");
let dayNumber = now.getDate();

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
theDate.innerHTML = `${dayNumber} ${month}`;

/*let city = document.querySelector("#input-bar");
let apiKey = `613b83077f10b4c656d2ofbe1faebbet`
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;*/
