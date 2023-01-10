'use-strict'
let lat= 0
let lon = 0
let temp = 0

document.querySelector('#getLoc').addEventListener("click", function(){
    navigator.geolocation.getCurrentPosition( (position)=> {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        lat = position.coords.latitude
        lon = position.coords.longitude
        document.querySelector('#latInfo').textContent = `Your Latitude is = ${lat}`
        document.querySelector('#latInfo').style.color = 'green'
        document.querySelector('#lonInfo').textContent = `Your Longitude is = ${lon}`
        document.querySelector('#lonInfo').style.color = 'green'

         
      })

});

console.log(`lat = ${lat}  lon = ${lon}`);


function renderWeather(weather){
    console.log(weather);
    let resultsContainer = document.querySelector('#weather-results')
    //creates h2 for name
    let city = document.createElement('h2')
    city.textContent = weather.name
    resultsContainer.append(city)

    let country = document.createElement('h3')
    country.textContent = weather.sys.country
    resultsContainer.append(country)

    //create p for humidity, wind, description, temp
    let temp = document.createElement('p')
    temp = weather.main.temp
    temp.textContent =('Temp: ' + weather.main.temp + ' F')
    resultsContainer.append(temp)
    

    let humidity = document.createElement('p')
    humidity.textContent = ('Humidity: '+ weather.main.humidity + ' %')
    resultsContainer.append(humidity)

    let wind = document.createElement('p')
    wind.textContent = 'Wind: '+weather.wind.speed + ' mph, ' + weather.wind.deg + '°'
    resultsContainer.append(wind)
   


    let weatherDetails = document.createElement('p')
    weatherDetails.textContent = 'Details: '+weather.weather[0]['description'] 
    resultsContainer.append(weatherDetails)
    
    
    
    

}

//Fetch weather data for city
function fetchWeather(lat,lon){
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=982863812d3ec1de57f6687d2cc97863`

    fetch(url)
        .then((response) => response.json())
        .then((data)=> renderWeather(data))      
}

document.querySelector('#getInfoBtn').addEventListener('click',function(){
    fetchWeather(lat,lon)
})



