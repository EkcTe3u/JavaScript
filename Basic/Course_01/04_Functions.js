// 1. Функции

// 1.1 Function Declaration можем обращаться когда захотим
// function greet(name) {
//     console.log("Привет - ", name)
// }
// 1.2 Function Expression сначада задается, потом вызывается
// const greet2 = function greet2(name) {
//     console.log("Привет 2 - ",name)
// }
// greet('Andrey')
// greet2('Andrey')
// console.log(typeof greet) // для определения функция это или переменная
// console.dir(greet) // функции являются объектами

// 2. Анонимные функциии

// let counter = 0
// setInterval(function(){
//     console.log(++counter)
// }, 1000)

// 3. Стрелочные функции

// function greet(name) {
//     console.log("Привет - ", name)
// }

// const arrow = (name) => {
//     console.log('Привет - ', name)
// }
// const arrow2 = name => console.log('Привет - ', name) // идентично первой записи

// arrow('Andrey')
// arrow2('Andrey')

// const pow2 = num => {
//     return num **2
// }
// // const pow2 = num => num **2

// console.log(pow2(5))

// 4. Параметры по умолчнию

const sum = (a, b=1) => a+b // мы можем задать по умолчанию значение параметра. если не задавать значение по умол, будет NaN
console.log('Сумма = ', sum(3)) // также можно во второй параметр передавать b = a * 2, который зависит от предыдущих параметров

function sumAll(...all) {  //rest all, неограниченное кол-во передаваемых параметров. массив
    // console.log(all)
    let result = 0
    for (let num of all) {
        result += num
    }
    return result
    }

//sumAll(1,2,3,4,5)
const res = sumAll(1,2,3,4,5,6,7)
console.log(res)

// 5. Замыкание (из одной функции возвращаем другую)

function createMember(name){
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Andrey')
console.log(logWithLastName)
// фактически logWithLastName равно функции, которую мы задали в createMember. постоянно работает с именем Андрей
// logWithLastName = return function(lastName) {
//     console.log(name + lastName)
// }
console.log(logWithLastName('Sozdatelev'))
// параметр name замкнулся, а параметр lastName варьируется


