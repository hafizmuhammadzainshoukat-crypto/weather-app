const apiKey = "YOUR_API_KEY_HERE";

async function getWeather() {
  let city = document.getElementById("city").value;
  let result = document.getElementById("result");

  if (city === "") {
    result.innerHTML = "Please enter a city name";
    return;
  }

  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    let data = await response.json();

    if (data.cod === "404") {
      result.innerHTML = "City not found";
      return;
    }

    result.innerHTML = `
      <h3>${data.name}</h3>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>☁️ Weather: ${data.weather[0].main}</p>
      <p>💨 Wind: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    result.innerHTML = "Something went wrong";
  }
}
