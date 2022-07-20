// Массивы
const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13] // можем хранить числа, строки, булевые значения, объекты  и тд
// const people = [
//     {name: 'Andrey', budget: 5000},
//     {name: 'Kristina', budget: 2000},
//     {name: 'Gleb', budget: 500}
// ]
// console.log(cars)
// console.log(cars.length)
// //Function
// function addItemToEnd(){

// }
// // Method
// cars.push('Рено') // at the end

// console.log(cars)

// cars.unshift('Волга') // at the beginning
// console.log(cars)
// cars.pop() // at the end, также можно занести в переменную
// cars.shift() // delete at the beginning, также можно занести в переменную 
// // const firtsItem = cars.shift()
// // const lastItem = cars.pop()
// console.log(cars)
// console.log(cars.reverse()) // переворачивает массив

// console.log(cars.indexOf('БМВ')) // возвращает индекс элемента, который мы ищем. строки, числа 

// const index = people.findIndex(function(person){
//     return person.budget === 2000
// }) // findindex - является циклом
// console.log(people[index])

// const person = people.find((person) => {
//     return person.budget === 2000
// })
// console.log(person)

// console.log(cars.includes('Мазда')) // содержит ли массив, возвращет булевое значение

// // каждый элемент массива заглавными буквами
// const upperCaseCars = cars.map( car => { // преобразовывает данные. метод map возвращает новый массив, старый остается без изменений
//     return car.toLocaleUpperCase()
// })
// console.log(upperCaseCars)

// // возвести все цифры в квадрат

// const pow2Fib = fib.map(num => num ** 2)
// console.log(pow2Fib)

// отфильтровать масси и избавиться от ненужных элементов
// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => {
//     return num > 20
// })
// console.log(filteredNumbers)
// console.log(pow2Fib)

// Задача 1
// const text = "Привет, мы изучаем JavaScript"
// const reverseText = text.split("").reverse().join('')
// console.log(reverseText)

// просуммировать бюджет более 1500, массив people
const people = [
    {name: 'Andrey', budget: 5000},
    {name: 'Kristina', budget: 2000},
    {name: 'Gleb', budget: 500}
]
const allBudget = people
.filter(person => person.budget > 1500)
.reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0) // принимает функцию, начальное значение - от которого считаем
// функция примает acc - считает каждую итерацию

console.log(allBudget)
