// let cityName = document.querySelector(".weather_city");
// let dateTime = document.querySelector(".weather_date_time");
// let w_forecast = document.querySelector(".weather_forecast");
// let w_temperature = document.querySelector(".weather_temperature");
// let w_min = document.querySelector(".weather_min"); 
// let w_max = document.querySelector(".weather_max");
// let w_icon = document.querySelector(".weather_icon");

// let w_feelsLike = document.querySelector(".weather_feelsLikes");
// let w_humidity = document.querySelector(".weather_humidity p:last-child");
// let w_wind = document.querySelector(".weather_wind p:last-child");
// let w_pressure = document.querySelector(".weather_pressure");

// // Format datetime
// const getDateTime = (dt) => {
//   const currentDate = new Date(dt * 1000);
//   const options = {
//     weekday: "long",
//     year: "numeric",
//     month: "long",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric"
//   };
//   const formatter = new Intl.DateTimeFormat("en-us", options);
//   return formatter.format(currentDate);
// };

// const getWeatherData = async () => {
//   const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=patna&appid=a0b06669a793506ae54060f7df8a5fb6&units=metric`;

//   try {
//     const res = await fetch(weatherUrl); 
//     const data = await res.json();
//     const { main, name, weather, wind, dt } = data;

//     cityName.innerHTML = name;
//     dateTime.innerHTML = getDateTime(dt);
//     w_temperature.innerHTML = `${Math.round(main.temp)}&#176;`;
//     w_min.innerHTML = `Min: ${Math.round(main.temp_min)}&#176;`;
//     w_max.innerHTML = `Max: ${Math.round(main.temp_max)}&#176;`;
//     w_feelsLike.innerHTML = `${Math.round(main.feels_like)}&#176;`;
//     w_humidity.innerHTML = `${main.humidity}%`;
//     w_wind.innerHTML = `${wind.speed} m/s`;
//     w_pressure.innerHTML = `${main.pressure} hPa`;
//     w_forecast.innerHTML = weather[0].main;
//     w_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="icon" />`;

//   } catch (error) {
//     console.log("Error fetching weather data:", error);
//   }
// };

// document.addEventListener("DOMContentLoaded", getWeatherData);
let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_forecast = document.querySelector(".weather_forecast");
let w_temperature = document.querySelector(".weather_temperature");
let w_min = document.querySelector(".weather_min"); 
let w_max = document.querySelector(".weather_max");
let w_icon = document.querySelector(".weather_icon");

let w_feelsLike = document.querySelector(".weather_feelsLikes");
let w_humidity = document.querySelector(".humidity_value");
let w_wind = document.querySelector(".weather_wind");
let w_pressure = document.querySelector(".weather_pressure");

const getDateTime = (dt) => {
  const currentDate = new Date(dt * 1000);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  };
  return new Intl.DateTimeFormat("en-us", options).format(currentDate);
};

const getWeatherData = async (city = "patna") => {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0b06669a793506ae54060f7df8a5fb6&units=metric`;

  try {
    const res = await fetch(weatherUrl); 
    const data = await res.json();
    if (data.cod !== 200) {
      alert("City not found!");
      return;
    }

    const { main, name, weather, wind, dt } = data;

    cityName.innerHTML = name;
    dateTime.innerHTML = getDateTime(dt);
    w_temperature.innerHTML = `${Math.round(main.temp)}&#176;`;
    w_min.innerHTML = `Min: ${Math.round(main.temp_min)}&#176;`;
    w_max.innerHTML = `Max: ${Math.round(main.temp_max)}&#176;`;
    w_feelsLike.innerHTML = `${Math.round(main.feels_like)}&#176;`;
    w_humidity.innerHTML = `${main.humidity}%`;
    w_wind.innerHTML = `${wind.speed} m/s`;
    w_pressure.innerHTML = `${main.pressure} hPa`;
    w_forecast.innerHTML = weather[0].main;
    w_icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="icon" />`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

document.addEventListener("DOMContentLoaded", () => getWeatherData());

const form = document.querySelector(".weather_search");
const searchInput = document.querySelector(".city_name");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = searchInput.value.trim();
  if (city !== "") {
    getWeatherData(city);
  }
});
