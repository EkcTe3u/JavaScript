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

// // 5. Приоритет операторов
// const fullAge = 38
// const birthYear = 1984
// const currentYear = 2022
// //<; >; <=; >=
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6. Условные операторы

// const courseStatus = 'fail' // status - ready, fail, pending

// // if (условие) { выполняемый код
    
// // }   
// if (courseStatus === 'ready') {
//     console.log('Курс готов и его можно проходить')
// }else if (courseStatus === 'pending') {
//     console.log('Курс находится в процессе разработки')
//  } else {
//     console.log('Курс не получился')
//  }

//  const num1 = 20
//  const num2 = '20'
//  console.log(num1 === num2)

 //== только значение
 // === значение и тип данных

// const isReady = true 
//  if (isReady) {                           // (isReady) тоже самое (isReady === true)
//     console.log('Все готово')
//  } else {
//     console.log('Все не готово')
//  }

 // тернарные выражения
// isReady ? console.log('Все готово') : console.log('Все не готово')
// 7. Булевая логика
// Логическое И &&
//Логическое ИЛИ ||
// Логическое НЕ !

// 8. Функции

// функция название(параметр){тело функции}
// function calculateAge(year) {
//  return 2022 - year
// }
// const myAge = calculateAge(1984) //функция(значение year)
// console.log(myAge)
// console.log(calculateAge(1984))

// function logInfoAbout(name, yearOfBirth){
//     const age = calculateAge(yearOfBirth)
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
// }
// logInfoAbout('Андрей', 1984)
// logInfoAbout('Кристина', 1988)
// logInfoAbout('Глеб', 2013)

// function logInfoAbout(name, yearOfBirth){
//     const age = calculateAge(yearOfBirth)
//     if (age > 0) {
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     }
//     else {
//         console.log('Вообще-то это уже будущее')
//     }
// }
// logInfoAbout('Андрей', 1984)
// logInfoAbout('Алиса', 2025)

// 9. Массивы

// const cars = ["Мазда", "Мерседес", "Хонда"] // квадратные скобки, перечесление данных в кавычках
// // console.log(cars)
// const cars = new Array("Мазда", "Мерседес", "Хонда")
// console.log(cars)
// console.log(cars[0]) // индекс начинается с 0
// console.log(cars.length) // длина массива
// // содержание массива можно менять, хоть он и создан через const
// cars[0] = "BMW"
// console.log(cars)
// cars[3] = "Мазда" // массив можно расширять
// console.log(cars)


// 10. Циклы
// const cars = ["Мазда", "Мерседес", "Хонда"]
// for (let i = 0; i < cars.length; i++) { // переменныя через let в (); условие; что делать
// console.log(i)
// }
// const cars = ["Мазда", "Мерседес", "Хонда", "Porshe"]
// for (let i = 0; i < cars.length; i++) { 
//     const car = cars[i]
//     console.log(car)
// }
// for (let car of cars){ // тоже самое более сокращенное
//     console.log(car)
// }


// 11. Объекты