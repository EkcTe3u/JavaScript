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

function inputHandler() {
  // console.log('Input!!')
  console.log(inputText.value);
  textBlock.innerText = inputText.value;
}

inputText.addEventListener("input", inputHandler);

// ======== Работа с прошлушкой событий event===========

// const list = document.querySelector("#list");

// list.addEventListener("click", function (event) {
//   // console.log(this)
//   // console.log(event)
//   console.log(event.target);
// });

// ======== Работа с прошлушкой событий elements===========
/*
// Создать элемент
document.createElement('tag-name')

// Изменить HTML содержимое внутри элемента
element.innerHTML = ''

// Изменить Текстовое  содержимое внутри элемента
node.innerText = ''

// Клонирование элемента
node.cloneNode() 
// true c внутренним содержимым (текст и теги), false - без внутреннего содержимого

// вставить элемент внутрь другого элемента
element.append(nodesOrDOMStrings)

// Удалить элемент
element.remove()
*/

const container = document.querySelector("#elementsContainer");
// make header
const newHeader = document.createElement("h1");
newHeader.innerText = "New header";
container.append(newHeader);

// Copy header
const mainHeader = document.querySelector("header");
const headerCopy = mainHeader.cloneNode(true);
container.append(headerCopy);

// вставка разметки через строки

const htmlExample = "<h2>Another header</h2>";
container.insertAdjacentHTML("beforeend", htmlExample);

// вставка разметки через шаблонные строки

const title = "Text of header";
const htmlExample2 = `<h2>${title}</h2>`;
container.insertAdjacentHTML("beforeend", htmlExample2);

// ================ TODO ======================

const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

todoForm.addEventListener("submit", formHandler);

function formHandler(event) {
  event.preventDefault();
  // get from input
  const tastText = todoInput.value;

  // create tag li
  const li = `<li>${tastText}</li>`;

  // add on page
  todoList.insertAdjacentHTML("beforeend", li);

  // clear input
  todoInput.value = "";

  // add focus to input
  todoInput.focus();
}
