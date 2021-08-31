const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenimages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
//Java Script에서 HTML element를 만드는 역할

bgImage.src = `img/${chosenimages}`;

document.body.appendChild(bgImage);
//appendChild는 body에 html을 추가해주는 역할을 함
//append는 가장 뒤에, prepend는 가장 위에 오게 하는 것

//사실 5~10줄까지 하는 일은 html에 <img src = "0.jpeg" />와 같음
//그러나 그것을 Java Script에서 해냈다는 것이 다름