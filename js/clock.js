const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    //getClock 함수에 Date라는 Object를 생성
    //사용자가 호출하는 당시의 현재 날짜와 시간을 알려줌
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    //console.log는 page가 아닌 console창에 값을 띄우는 것
}

getClock();
setInterval(getClock, 1000);
    //매 5초마다 : 5000ms sayHello 함수 실행
    //setInterval : 시작부터 hello를 띄워줌
    //setTimeout : 5초부터 hello를 띄워줌