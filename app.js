const API_KEY = `886705b4c1182eb1c69f28eb8c520e20`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
// const mapIframe = document.querySelector("#map-iframe");
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4> ${data.weather[0].main} </h4>
        </div>
    `
}
// const updateMap = (latitude, longitude) => {
//     const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d109578.13919639078!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1688740798317!5m2!1sen!2sin`;
//     mapIframe.src = mapUrl;
//   };
form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
        // updateMap(0, 0);
    }
)










// const API_KEY = "886705b4c1182eb1c69f28eb8c520e20";
// const form = document.querySelector("form");
// const search = document.querySelector("#search");
// const weather = document.querySelector("#weather");
// const mapIframe = document.querySelector("#map-iframe");

// const getWeather = async (city) => {
//   weather.innerHTML = `<h2>Loading...</h2>`;
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
//   const response = await fetch(url);
//   const data = await response.json();
//   return showWeather(data);
// };

// const showWeather = (data) => {
//   if (data.cod === "404") {
//     weather.innerHTML = `<h2>City Not Found</h2>`;
//     return;
//   }
//   weather.innerHTML = `
//     <div>
//         <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
//     </div>
//     <div>
//         <h2>${data.main.temp} ℃</h2>
//         <h4>${data.weather[0].main}</h4>
//     </div>
//   `;
// };

// const updateMap = (latitude, longitude) => {
//   const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d109578.13919639078!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1688740798317!5m2!1sen!2sin`;
//   mapIframe.src = mapUrl;
//   zoom :0;
// };

// let map;

// // async function initMap() {
//   const  Map  = await google.maps.importLibrary("maps");

//   map = new Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// initMap();
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   const city = search.value;
//   getWeather(city);
// //   updateMap(0, 0); // Set initial coordinates to (0, 0)
// });
