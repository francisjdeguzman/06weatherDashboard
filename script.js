var apiKey = "86e0bf944269a42058a53565ccc7ebb5" ;
var cityInput = cityInput.val();
var uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey ;
var weatherURL = "https://api.openweathermap.org/data/2.5/forecast/daily?q=" + cityInput + "&units=metric&cnt=5" + APIKey;

// Weather search button
$("#search").on('click', function () {
    event.preventDefault();
    console.log("searchMe");
// API - Forecast
    $.ajax({
        url: weatherURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        console.log(weatherURL);
    });
});

// API - UV
$("#search").on('click', function () {
    event.preventDefault();
    console.log("searchMe");

    $.ajax({
        url: uvURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        console.log(uvURL);
    });
});

// City history to local
function storeCity(city) {
    var currentCity = $('<li>').text(city);
    currentCity.attr({type: 'button', class:'storeCity', name:city});
    $('#cities').append(currentCity);
    localStorage.setItem(city, city);
};