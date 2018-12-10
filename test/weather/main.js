const APP_ID = '2ede6e05044b3907c2d4a76fee94d0ab';
const UNITS = 'imperial';
let searchMethod = null;

// ELEMENTS
document.querySelector('#search-button').addEventListener('click', function(e) {
    let searchTerm = document.querySelector('#search-input').value;
    if(searchTerm) searchWeather(searchTerm);
});

function setSearchMethod(query) {
    // check length and if all chars are numbers
    if(query.length === 5 && Number.parseInt(query) + '' === query) {
        searchMethod = 'zip';
    } else {
        searchMethod = 'q';
    }
}

function searchWeather(query) {
    setSearchMethod(query);
    // ES6 Promis API
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${query}&APPID=${APP_ID}&=units=${UNITS}`)
        .then(result => result.json())
        .then(data => processWeatherData(data));
}

function processWeatherData(data) {
    console.log(data);
    setBackground(data.weather[0].main);
}

function setBackground(weather) {
    switch(weather) {
        case 'Clear':
            document.body.style.backgroundImage = "url('clear.jpg')";
            break;
        case 'Clouds':
            document.body.style.backgroundImage = "url('cloudy.jpg')";
            break;
        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.backgroundImage = "url('rain.jpg')";
            break;
        case 'Snow':
            document.body.style.backgroundImage = "url('snow.jpg')";
            break;
        case 'Thunderstorm':
            document.body.style.backgroundImage = "url('storm.jpg')";
            break;
        default:
            document.body.style.backgroundImage = "url('default.jpg')";
            break;
    }
}