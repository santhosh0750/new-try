
async function getWeatherData(){
    var cityName= document.getElementById('cityName').value
    console.log(cityName)
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ea3db719b3bc8d3a4b69bb83a580fddb`)
    let safe = await data.json();
    console.log(safe)
    var weathercontainer = document.getElementById('weathercontainer')
    weathercontainer.innerHTML=
}
