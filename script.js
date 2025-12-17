const apiKey = "YOUR_API_KEY"; // Get free API key from OpenWeatherMap

document.getElementById("search-btn").addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    getWeather(city);
});

async function getWeather(city) {
    if(city === "") {
        alert("Please enter a city name!");
        return;
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if(data.cod === "404") {
            alert("City not found!");
            return;
        }

        document.getElementById("city-name").innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById("temperature").innerText = `Temperature: ${data.main.temp} °C`;
        document.getElementById("description").innerText = `Weather: ${data.weather[0].description}`;
    } catch(error) {
        alert("Error fetching weather data!");
        console.error(error);
    }
}
