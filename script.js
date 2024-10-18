// const url = "http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${apiId}"

let temp=document.getElementById("current-temp");
let img=document.getElementById("weather-img");
let humidity=document.getElementById("current-humidity");
let windSpeed=document.getElementById("current-wind");
let loc=document.getElementById("location");

let apiId='66136bbfefb944a882c44001241710';

// let city=document.getElementById("search-input").value;

// let location=document.getElementById("location");

function getWeatherData(event){

    event.preventDefault();
    let city=document.getElementById("search-input").value;
    // let city="kolkata";

    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiId}&q=${city}`)
    .then((data)=>data.json())
    .then((data)=>{
        weatherData=data;
        showTemp(data);
        console.log(data);
    });
}

function showTemp(data){
    temp.textContent=`${data.current.temp_c} °C`;
    let newImg=`${data.current.condition.icon}`;
    img.setAttribute('src',newImg);
    humidity.textContent=`${data.current.humidity} %`;
    windSpeed.textContent=`${data.current.wind_kph} km/h`;
    loc.textContent=`${data.location.name}`;
}

getWeatherData();
// console.log(weatherData.current.temp_c);
// console.log(weatherData)
// await fetch(url).then((data)=>data.json().then((data)=>console.log(data)))