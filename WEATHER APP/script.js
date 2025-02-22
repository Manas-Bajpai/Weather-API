let weather ={
    "APIkey": "836d6eab709df8137488b17a77235b81",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city+ 
             "&units=metric&appid="
             +this.APIkey
            )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const{name} = data;
        const{icon,description} = data.weather[0];
        const{temp,humidity} = data.main;
        const{speed} = data.wind;
        document.querySelector(".city").innerText= "Weather in " + name;
        document.querySelector(".icon").src =  "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humid").innerText = "Humidity:" + humidity + "%"; 
        document.querySelector(".wind").innerText = "Wind Speed:" + speed + "km/h"; 
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-box").value);
      },
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-box").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Delhi");
