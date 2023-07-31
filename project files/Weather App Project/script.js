document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    const cityNameInput = document.getElementById("cityInput");
    const weatherInfo = document.querySelector(".weather-info");
    const cityNameElement = document.getElementById("cityName");
    const tempElement = document.getElementById("temp");
    const weatherDescElement = document.getElementById("weatherDesc");
    const humidityElement = document.getElementById("humidity");
    const windSpeedElement = document.getElementById("windSpeed");
   
var dt = new Date();
document.getElementById('date-time').innerHTML=dt;

    submitBtn.addEventListener("click", function () {
      const cityName = cityNameInput.value;
      if (!cityName) return;
      const apiKey = 'f1a9ad83bde6564aec61e49db0e0dbbb';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
      const currentDate = new Date()
      
       fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.cod === 200) {
            cityNameElement.textContent = data.name;
            tempElement.textContent = data.main.temp;
            weatherDescElement.textContent = data.weather[0].description;
            humidityElement.textContent = data.main.humidity;
            windSpeedElement.textContent = data.wind.speed;
  
       ;     weatherInfo.classList.remove("d-none");
          } else {
            alert("City not found. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          alert("An error occurred while fetching weather data. Please try again later.");
        });
      });
    })