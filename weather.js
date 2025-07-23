const apiKey = "36286da4f2fdd29ab4b7ad0cf114f66b";

  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");
  const weatherIcon = document.getElementById("im"); // Yeh image already hai HTML mein

  async function checkWeathre(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

   
   weatherIcon.className = ""; // pehle saari classes hatao

if (data.weather[0].main === "Clouds") {
  weatherIcon.src = "weather-icon.avif";
  weatherIcon.classList.add("cloud-style");
} else if (data.weather[0].main === "Clear") {
  weatherIcon.src = "clear.png";
  weatherIcon.classList.add("clear-style");
} else if (data.weather[0].main === "Rain") {
  weatherIcon.src = "71GhE.png";
  weatherIcon.classList.add("rain-style");
} else {
  weatherIcon.src = "11machin.webp";
  weatherIcon.classList.add("default-style");
}

  }

  searchBtn.addEventListener("click", () => {
    checkWeathre(searchBox.value);
  });

  checkWeathre("sasaram"); // initial city load ke liye

