const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//document가 아닌 login-form에서 바로 찾을 수 있도록 input 앞에 지정해준다
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
//String만 포함된 변수는 일반적으로 대문자로 표기함
const USERNAME_KEY = "username";
//반복해서 쓰여지기 때문에 효율을 위해 하나의 변수로 지정해줌
//대문자로 변수를 지정해놓으면 string이라는 사실을 기억할 수 있음

function onLoginSubmit(event) {
    //입력되는 값을 loginInput의 value와 같게 하되
    //html에서는 그 값을 username이라는 새로운 변수로 만듦
    event.preventDefault();
    //브라우저가 기본 동작을 실행하지 못 하게 막기
    //form을 submit하면 기본적으로 페이지가 새로고침되는 것
    //event object는 preventDefault 함수를 기본적으로 가짐 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //form을 다시 숨겨줌
    const username = loginInput.value;
    //loginInput.value를 username이라는 변수로 저장함
    //loginInput이란 입력창에 입력받은 값을 말하는 것!
    localStorage.setItem(USERNAME_KEY, username);
    //username값을 username이라는 key와 함께
    //localStorage에 저장해줌 => application
    paintGreetings(username);
    //paintGreetings 함수를 호출함
    //username이라는 하나의 인자를 받고 있음
    //user가 form 안에 있는 input에 입력한 유저명
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    //비어있는 h1 요소 안에 텍스트를 추가해주는 역할
    greeting.classList.remove(HIDDEN_CLASSNAME);
    //h1 요소로부터 "hidden" 이라는 클래스명을 제거해줌
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //savedUsername이 만약 null이라면 (값이 없다면)
    //loginForm에서 class="hidden"을 제거함
    loginForm.addEventListener("submit", onLoginSubmit);
    //뒤에 ()를 추가한다는 건 function을 '즉시' 실행한다는 뜻임
    //즉시 실행되길 원하지 않을 때는 뒤에 ()를 적어주지 않으면 됨
    //submit된 후에 동작을 실행하겠다는 의미
} else {
    paintGreetings(savedUsername);
    //null값이 아니라면 h1의 텍스트를 받아서
    //그대로 보여주는 paintGreetings 함수 호출
}