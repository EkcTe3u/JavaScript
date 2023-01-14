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

// lesson 29

// Реализуйте функцию normalizeUrl(), которая выполняет так называемую нормализацию данных. Она принимает адрес сайта и возвращает его с https:// в начале.

// Функция принимает адреса в виде АДРЕС или https://АДРЕС, но всегда возвращает адрес в виде https://АДРЕС

// Можно использовать метод startsWith(), чтобы проверить, начинается ли строка с префикса https://. А потом на основе этого добавлять или не добавлять https://.

// Примеры вызова:

// normalizeUrl("google.com"); // "https://google.com"
// normalizeUrl("https://ai.fi"); // "https://ai.fi"

const text = "testCase"
console.log(text.startsWith("test"))

const normalizeUrl = (adress) => {
    if (adress.slice(0, 8) ===  'https://') {
        return adress
    } else {
        return `https://${adress}`
    }
}
console.log(normalizeUrl('abdre'))
console.log(normalizeUrl('https://ai.fi'))

// lesson 30

// Реализуйте функцию convertText(), которая принимает на вход строку и, если первая буква не заглавная, возвращает перевернутый вариант исходной строки. 
// Если первая буква заглавная, то строка возвращается без изменений. Если на вход передана пустая строка, функция должна вернуть пустую строку.

// Примеры вызова:

// convertText('Hello'); // 'Hello'
// convertText('hello'); // 'olleh'
 
// // Не забудьте учесть пустую строку
// convertText(''); // ''
// Перевернуть строчку можно используя функцию reverse(). В качестве аргумента в неё нужно передать строку, которую мы хотим перевернуть:
// 
// const result = reverse('Hello!');
// console.log(result); // => '!olleH'
// Есть разные подходы к решению этой задачи. Возможно, вам пригодится метод toUpperCase() и возможность получения символа из строки (например, str[0]).

// Попробуйте написать два варианта функции: с обычным if-else, и с тернарным оператором.

// const convertText = (text) => {
//     let rez = text.split("").reverse().join("")
//     if (text === ''){
//         return ''
//     }else if (text.slice(0, 1) === text.slice(0, 1).toUpperCase()){
        
//         return text
//     } else {
//         return rez
//     }
// }


// console.log(convertText("Hello!!!"));
// console.log(convertText(""));
// console.log(convertText("hello!!!"));
// console.log(convertText(""));

const convertText = (text) => {
    let rez = text.split("").reverse().join("")
    if (text === ''){
        return ''
    }else {
        return text.slice(0, 1) === text.slice(0, 1).toUpperCase() ? text : rez 
    } 
}



console.log(convertText("Hello!!!"));
console.log(convertText(""));
console.log(convertText("hello!!!"));
console.log(convertText(""));