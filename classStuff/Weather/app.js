import '.env'
const APIkey = process.env.API_KEY


const searchButton = document.querySelector(".search");
const displayArea = document.querySelector(".displayArea")

const getWeather = async () => {
  const weatherInput = document.querySelector(".weather").value;
  console.log(weatherInput);
  const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${weatherInput}&appid=${APIkey}`);
    const json = await weatherData.json();
    zip = document.createElement('H1')
    zip.innerText = `Showing weather for ${weatherInput}` 
    temp = document.createElement('H1')
    temp.innerText = `Feels Like: ${json.main.feels_like}°F`;
    humid = document.createElement('H1')
    humid.innerText = `Humidity:${json.main.humidity}% - Still less than Houston`
    city = document.createElement('H2')
    city.innerText = `City: Real ${json.name}`
    displayArea.append(zip,temp, city,humid)
  console.log(json);
};

searchButton.addEventListener("click", getWeather);
