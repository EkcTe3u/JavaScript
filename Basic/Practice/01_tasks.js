// 1) Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел

const sum = (a, b) => {
  return a + b;
};
console.log(sum(4, 2));

// 2) Сделать функцию которая вернёт в консоль квадрат переданного числа

const sqrt = (a) => a ** 2;

console.log('sqrt = ', sqrt(3));

// Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON
// {"name":И,
// "surname":Ф,
// "middlename":О}

const jsonBack = (name, surname, middlename) => {
  return { name: name, surname: surname, middlename: middlename };
};

console.log('jsonBack = ', jsonBack('Andrey', 'Sozdatelev'));

// 4) вывести в консоль переменную-массив в которой будут все чётные числа. Переменную возвращяет функция которая на вход принимает массив чисел
// Если чётных чисел не нашлось, то функция вернёт текст "No even numbers"
const returnEvenNumbers = (massive) => {
  let newEvenMassive = [];
  let newOddMasive = [];
  for (const element of massive) {
    if (element % 2 === 0) {
      newEvenMassive.push(element);
    } else {
      newOddMasive.push(element);
    }
  }
  if (newEvenMassive.length === 0) {
    return 'No even numbers';
  } else {
    return `newEvenMassive = ${newEvenMassive}
newOddMassive = ${newOddMasive}`;
  }
};

console.log(returnEvenNumbers([1, 3, 5, 7]));
const bb = 'abraKadabRa';
console.log(bb.toLowerCase());
// Сделать функцию которая вернёт количество букв 'a' в переданном в неё слове.
// Алфавит Eng. Если нету букв 'а', то вернтуть текст "No a characters".

const returnA = (word) => {
  let massiveOfLetters = word.toLowerCase().split('');
  let counter = 0;
  for (const element of massiveOfLetters) {
    if (element === 'a') {
      counter++;
    }
  }

  if (counter === 0) {
    return 'No a characters';
  } else {
    return counter;
  }
};

console.log(returnA('brbrbrb'));
console.log(returnA('abrakadabRAAA'));

// 6) **Написать функцию которая выдаст список тестов для переданного в неё web-ui элемента
// Элементы: Phone number field, CheckBox, SignIn Button.
// 7) ***Написать функцию которая на вход получает JSON а возвращяет XML
// npm install --save xml-js
// import json2xml from 'xml-js';

// const jsonObj = {
//   name: 'Garage',
//   cars: [
//     { color: 'red', maxSpeed: 120, age: 2 },
//     { color: 'blue', maxSpeed: 100, age: 3 },
//     { color: 'green', maxSpeed: 130, age: 2 },
//   ],
// };

// const json = JSON.stringify(jsonObj);

// const xml = json2xml(json, { compact: true, spaces: 4 });

// console.log(xml);

function findMore(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
