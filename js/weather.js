const API_KEY = "a01a8fd8c1180be61527ca3c96d70d6d";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        //data의 name -> 내가 사는 도시
        //data의 weather 배열의 0번째 -> 날씨
    });
}
//API란 기본적으로 다른 서버와 이야기할 수 있는 방법
function onGeoError() {
    alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);