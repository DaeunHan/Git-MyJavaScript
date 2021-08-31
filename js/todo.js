const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
//"todos"를 중복해서 적게 되기 때문에
let toDos = [];
//let : 이전 값들도 업데이트가 가능하도록

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
    //toDos array의 내용을 localStorage에 넣어줌
}
//JSON.stringify => 브라우저를 이용한 자바스크립트 기본 함수
//JavaScript Object나 array나 어떤 것이든 String으로 바꿔줌

function deleteToDo(event) {
    const li = event.target.parentElement;
    //event -> target -> parentElement를 찾음
    //button의 부모는 li
    //target은 클릭된 HTML element임 
    //모든 HTML element에는 하나 이상의 property가 있음
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));
    //filter함수ㄹ 이용해서 Deleting To Dos 
    //임의로 정해진 id는 String이기 때문에 정수로 변환
    saveToDos();
    //toDos DB에서 todo를 지운 뒤에 saveToDos 한 번 더 부르기!나 근ㄷ
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    //span의 text는 handleToDoSubmit에서 온 newTodo text가 됨
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //li>span
    li.appendChild(button);
    toDoList.appendChild(li);
    //append는 가장 마지막에 놓여있어야 함!
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    //toDoInput으로 받는 value를 newTodo라는 변수에 저장
    toDoInput.value = "";
    //입력하고 나면 빈칸 만들기 위해 toDoInput의 value에 빈값("") 넣기
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    //Todos를 하나의 object로 생성해 줌
    //마치 {id: 121212, text: drink}
    toDos.push(newTodoObj);
    //newTodo를 toDos array에 push함
    paintToDo(newTodoObj);
    //화면에 그 toDo를 그려줌
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    //forEach -> array에 있는 각각 item에 대해 설명해줌
    //function을 간략하게 작성하기 위해서 : => (arrow function)
    //parsedToDos에 있는 각각의 item에 대해서 console.log
}

