// // classes
// class Person {
//   constructor(userName, age, isMarried) {
//     this.userName = userName;
//     this.age = age;
//     this.isMarried = isMarried;
//   }

//   sayHi(yourName) {
//     console.log(`Привет, ${yourName}! Меня зовут ${this.userName}.`);
//   }
// }

// // Теперь создадим новые объекты на основе класса person

// const person1 = new Person("Марк", 30, false);
// const person2 = new Person("Павел", 28, true);

// console.log(person1);
// console.log(person2);

// Они были созданы с указанными свойствами, плюс оба имеют методы которые были описаны в конструкторе

// person1.sayHi("Юрий");
// person2.sayHi("Елена");

// ================= DOM elements ================

// document.querySelector("h1");
// document.querySelector(".header");
// document.querySelector("#footer");

// const header = document.querySelector("h2");

// console.log(header);
// document.querySelector("h3").classList.add("red");
// document.querySelector("h3").classList.add("blue");

// const headers = document.querySelectorAll("h2");
// console.log(headers);
// for (let item of headers) {
//   item.classList.add("red-text");
// }

// const paragraphs = document.querySelectorAll("p");
// for (let item of paragraphs) {
//   item.classList.add("green-text");
// }

// ================= CSS ================
//  .add()
//  .remove()
//  .toggle() переключает
//   .contains() содержит
const heading = document.querySelector("h2");
heading.classList.add("red-text");
heading.classList.remove("red-text");
heading.classList.toggle("red-text");
heading.classList.toggle("green");

heading.classList.contains("green");

// ================= атрибуты ================

/*
getAttribute(attrName) — возвращает значение указанного атрибута
setAttribute(name, value) — добавляет указанные атрибут и его значение к элементу
hasAttribute(attrName) — возвращает true при наличии у элемента указанного атрибута
removeAttribute(attrName) — удаляет указанный атрибут

toggleAttribute(name, force) — добавляет новый атрибут при отсутствии или удаляет существующий атрибут.
hasAttributes() — возвращает true, если у элемента имеются какие-либо атрибуты
getAttributesNames() — возвращает названия атрибутов элемента
*/

// const img = document.querySelector("#logo");
// img.getAttribute("src");

// img.setAttribute("src", "./img/php.png");
// img.setAttribute("width", "200");
// img.setAttribute("src", "./img/js.png");

// img.src = "./img/js.png";

// const button = document.querySelector("#button");
// button.setAttribute("value", "Send");

// ======== Работа с прошлушкой событий ===========

const button = document.querySelector("#button");
const img = document.querySelector("#logo");

button.value = "Delete";

// button.addEventListener("click", function () {
//   console.log("Click!");
//   img.remove();
// });

// button.addEventListener("click", function () {
//   console.log("Click2");
//   img.remove();
// });

button.onclick = function () {
  console.log("Click 1!");
  img.remove();
};
button.onclick = function () {
  console.log("Click 2!");
  img.remove();
};

// ======== Работа с прошлушкой событий форма===========
const inputText = document.querySelector("#input-text");
const textBlock = document.querySelector("#text-block");

// inputText.addEventListener('input', function(){
//     // console.log('Input!!')
//     console.log(inputText.value)
//     textBlock.innerText = inputText.value
// })

function inputHandler () {
    // console.log('Input!!')
    console.log(inputText.value)
    textBlock.innerText = inputText.value
}

inputText.addEventListener('input', inputHandler)