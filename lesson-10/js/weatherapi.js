const requestURL = 'https://api.openweathermap.org/...';




// removed http so would work on https sites
var weatherObject = new XMLHttpRequest();
var city = document.getElementById("cityName").innerText;
var locationId;
switch (city) {
    case "Greenville":
        {
            locationId = "4695066";
            break;
        }
    case "Springfield":
        {
            locationId = "4409896"
            break;
        }
        //default to Franklin
    default:
        {
            locationId = "4759986";
        }
}




weatherObject.open('GET', '//api.openweathermap.org/data/2.5/weather?id=' + locationId + '&appid=130fd29c0ecfd2034fcab509cb06f917&units=imperial', true);
weatherObject.send();
weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);

    document.getElementById('city').innerHTML = weatherInfo.name;
    var temperature = weatherInfo.main.temp;
    var wind = weatherInfo.wind.speed;
    var humidity = weatherInfo.main.humidity;
    var windchill = (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(wind, 0.16)) + (0.4275 * temperature * Math.pow(wind, 0.16)));
    var heatIndexCalc = (-42.379 + (2.049 * temperature) + (10.1433 * humidity) + (-0.2248 * temperature * humidity) + (-0.006837 * temperature * temperature) + (-0.05482 * humidity * humidity) + (0.001229 * temperature * temperature * humidity) + (0.00085282 * temperature * humidity * humidity) + (-0.00000199 * temperature * temperature * humidity * humidity));
    var tempHigh = weatherInfo.main.temp_max;
    var tempLow = weatherInfo.main.temp_min;
    document.getElementById('currentTemp').innerHTML = Math.round(parseFloat(temperature));
    document.getElementById('description').innerHTML = weatherInfo.weather["0"].main;
    var iconcode = weatherInfo.weather["0"].icon;
    var icon_path = "http://openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
    if (temperature > 80) {
        document.getElementById('windChill').innerHTML = "Heat Index: " + Math.round(parseFloat(heatIndexCalc));
    } else if (temperature > windchill) {
        document.getElementById('windChill').innerHTML = "Windchill: " + Math.round(parseFloat(windchill));
    } else {
        document.getElementById('windChill').innerHTML = "Feels like: " + Math.round(parseFloat(temperature));
    }

    document.getElementById('windSpeed').innerHTML = Math.round(parseFloat(wind));
    document.getElementById('highTemp').innerHTML = Math.round(parseFloat(tempHigh));
    document.getElementById('lowTemp').innerHTML = Math.round(parseFloat(tempLow));

}

/*---segundo---*/


var weatherRequest = new XMLHttpRequest();


weatherRequest.open('GET','https://api.openweathermap.org/data/2.5/weather?&id=4759986&units=imperial&APPID=079794776d04eb4e82f25d2103f2ce58', true);

weatherRequest.send();

weatherRequest.onload = function() {
   var weatherInfo = JSON.parse(weatherRequest.responseText);
    console.log(weatherInfo);
    
     document.getElementById('city').innerHTML = weatherInfo.name;
     document.getElementById('current').innerHTML = weatherInfo.main.temp;
     document.getElementById('description').innerHTML = weatherInfo.weather["0"].description;
    document.getElementById('hightemp').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('lowtemp').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('windspeed').innerHTML = weatherInfo.wind.speed;
   
    var icon = '//openweathermap.org/img/w/' + weatherInfo.weather["0"].icon + '.png';
    document.getElementById('weatherimage').src = icon;
}
/*---tercero*/

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=95ea9cd765d91a87fa21806942a78e70";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].main;
    document.getElementById('current-temp').textContent = jsObject.main.temp + " ˚F";
    document.getElementById('humidity').textContent = jsObject.main.humidity + " %";
    document.getElementById('wind-speed').textContent = jsObject.wind.speed + " mph";
  });

const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=95ea9cd765d91a87fa21806942a78e70";
fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject2) => {
    console.log(jsObject2);

    let highTemp = [];
    let day = 1;
    let weekday = [];
    var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

    for (let i = 0; i < jsObject2.list.length && day < 6; i++) {
      if (jsObject2.list[i].dt_txt.includes("18:00:00")) {
        highTemp[i] = jsObject2.list[i].main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject2.list[i].weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject2.list[i].weather[0].description; // note how we reference the weather array

        let now = new Date(jsObject2.list[i].dt_txt);
        weekday = days[now.getDay()];
        document.getElementById("day" + day).innerHTML = weekday;
        document.getElementById("forecast" + day).innerHTML = highTemp[i] + "&deg; F";
        document.getElementById("icon" + day).setAttribute("src", imagesrc); // focus on the setAttribute() method
        document.getElementById("icon" + day).setAttribute("alt", desc);
        day++;
      }
    }
  });