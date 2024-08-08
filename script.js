const inputBox = document.querySelector(".input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temp");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");

async function checkWeather(city) {
  const api_key = "9fef859d19f78642ec2fb5f08155c2a7";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );

  

  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

  description.innerHTML = `${weather_data.weather[0].description}`;

  humidity.innerHTML = `${weather_data.main.humidity}%`;

  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

  switch(weather_data.weather[0].main){
    case 'Clouds': weather_img.src = "/images/cloud.jpeg";
    break;
    case 'Clear': weather_img.src = "/images/CW.jpeg";
    break;
    case 'Rain': weather_img.src = "/images/rain.jpeg";
    break;
    case 'Mist': weather_img.src = "/images/Mist.jpeg";
    break;
    case 'Snow': weather_img.src = "/images/Snow.jpeg";
    break;
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});
