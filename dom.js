// async function itbe(){
//     let cityname =document.getElementById(cityname).innerText
//     console.log(cityname)
//     let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=ea3db719b3bc8d3a4b69bb83a580fddb`)
//     let rest = await data.json()
//     console.log(rest)
// }
let cityname =document.getElementById('cityname').value
console.log(cityname)