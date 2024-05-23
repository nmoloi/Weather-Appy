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

let searchForm = document.querySelector("#search-form");
let inputBar = document.querySelector("#input-bar");

function searchCity(event) {
  event.preventDefault();

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${inputBar.value}`;
  let city = inputBar.value;
  let apiKey = `613b83077f10b4c656d2ofbe1faebbet`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(displayWeather);
}

searchForm.addEventListener("submit", searchCity);

function displayWeather(response) {
  console.log(response.data);
  let temperatureValue = document.querySelector("#temperature-value");
  temperatureValue.innerHTML = Math.round(response.data.temperature.current);

  let humidity = document.querySelector("#humidity");
  let humidityValue = Math.round(response.data.temperature.humidity);
  humidity.innerHTML = `humidity: ${humidityValue}%`;

  let wind = document.querySelector("#wind-speed");
  windSpeed = Math.round(response.data.wind.speed);
  wind.innerHTML = `wind: ${windSpeed}km/h`;

  let clouds = document.querySelector("#cloud-cover");
  clouds.innerHTML = response.data.condition.description;

  let emoji = document.querySelector("#emoji");
  //emoji.innerHTML = response.data.condition.icon_url;
}
