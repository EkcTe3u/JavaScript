// summary of https://www.youtube.com/watch?v=Bluxbh9CaQ0
// 1. Переменные
// variable
// var name = 'Andrey' // можно менять string
// const lastname = 'Sozdatelev' //если не меняется
// let age = 37 // можно менять number
// name = 'andrew'

// console.log(name)
// console. log(lastname)
// age = 29
// console.log(age)

// const isProgrammer = true // boolean
// const firstName = 'Andrey'
// const lastname = 'Sozdatelev'
// const age = 37

// const _private = 'private'
// const $ = 'some value'
// const if = 'sdf' err
//const 5number = 5 // err

// 2. Мутирование
//console.log('Имя человека: ' + firstName + ' , а возраст человека:' + age)

// 3. Операторы
// const currentYear = 2022
// const birthYear = 1984
// const currentAge = currentYear - birthYear
// console.log(currentAge)
// const a = 10
// const b = 5
// let c = 5
// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// //console.log(c++) //старое значение, потом прибавляем
// //console.log(++c) // сначала прибавляем, потом выводим
// //console.log(c--) // сначала выводим старое значение, потом уменьшаем на 1
// // console.log(--c) // уменгьшаем на 1, выводим значение
// //c = c + a 
// c += a // Тожесамое что c = c + a
// console.log(c)

// 4. Типы данных

// const isProgrammer = true 
// const firstName = 'Andrey'
// const lastname = 'Sozdatelev'
// const age = 37
// let x
// console.log(typeof(isProgrammer))
// console.log(typeof(firstName))
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)

// 5. Приоритет операторов
const fullAge = 38
const birthYear = 1984
const currentYear = 2022
//<; >; <=; >=
const isFullAge = currentYear - birthYear >= fullAge
console.log(isFullAge)