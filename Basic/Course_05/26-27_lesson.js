// lesson 26

// Реализуйте функцию isInternationalPhone(), которая проверяет формат указанного телефона. Если телефон начинается с +, значит это международный формат.

// isInternationalPhone('89602223423'); // false
// isInternationalPhone('+79602223423'); // true
const isInternationalPhone = (number) => {
    if (number[0] === '+') {
        return true
    } else {
        return false
    }
}

console.log(isInternationalPhone('88'))

// const isInternationalPhone = (phone) => phone[0] === '+';

// lesson 27

// Реализуйте функцию isLeapYear(), которая определяет, является ли год високосным или нет. Год будет високосным, если он кратен 
// (то есть делится без остатка) 400 или он одновременно кратен 4 и не кратен 100. Как видите, в определении уже заложена вся необходимая логика, 
// осталось только переложить её на код:

// isLeapYear(2018); // false
// isLeapYear(2017); // false
// isLeapYear(2016); // true
// Кратность можно проверять так:

// // % - возвращает остаток от деления левого операнда на правый
// // Проверяем что number кратен 10
// number % 10 === 0
 
// // Проверяем что number не кратен 10
// number % 10 !== 0

const isLeapYear = (year) => ((year % 400 === 0) || (year % 4 === 0) && (year % 100 != 0));

console.log(`isLeapYear ${isLeapYear(2016)}`)

// lesson 28

console.log(false || 'yes')

// 0, '' (пустая строка), undefined, NaN, null приводятся к false. Эти значения называют falsy.

// Реализуйте функцию getLetter(), которая извлекает из переданной строки указанный символ (по порядковому номеру, а не индексу) и возвращает его наружу. 
// Если такого символа нет, то функция возвращает пустую строку.

// Примеры вызова:

// const name = 'Hexlet';
 
// // Обычное обращение возвращает undefined
// name[10]; // undefined
 
// // 11 символ соответствует 10 индексу
// getLetter(name, 11); // ''
 
// getLetter(name, 1); // 'H'
// getLetter(name, 0); // ''
// getLetter(name, 6); // 't'

const getLetter = (name, number) => name[number-1] || '';

console.log(getLetter('abcd', 1))