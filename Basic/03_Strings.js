// // Strings
// const firstName = 'Андрей'
// console.log(typeof firstName)
// const age = 37

// function getAge() {
//     return age
// }
// // // const output = "Привет, меня зовут " + name + " и мой возраст " + age + " лет." // легко запутаться если много переменных
// // //const output = `Привет, меня зовут ${firstName} и мой возраст ${getAge()} лет` 
// // const output = `Привет, меня зовут ${firstName} и мой возраст ${age < 30 ? 'A' : 'B'} лет` // можем использовать тернарные выражения
// // console.log(output)
// const output = `
//     <div> this is div</div>
//                                                  <p> this is p</p>
// ` // можем писать в несколько строк, сохраняются все отступы, переходы
// console.log(output)

// внутренние методы

// const firstName = 'Андрей'
// console.log(firstName.length) // длина строки, количество символов
// console.log(firstName.toUpperCase()) // все заглавные
// console.log(firstName.toLowerCase()) // все прописные
// console.log(firstName.charAt(2)) //какой второй символ в строке, начинается с 0 индекса!!!
// console.log(firstName.indexOf('рей')) // поиск в строке по индексу, начная с 3 индекса. если -1, значит ничего не нащлось и можно оперировать этим значением
// console.log(firstName.startsWith('анд'))
// console.log(firstName.startsWith('Анд')) // true регистрозависима, начинается ли строка с этих символов

// console.log(firstName.toLowerCase().startsWith('анд')) // можно вызывать несколько методов
// console.log(firstName.endsWith('ей'))
// console.log(firstName.repeat(3)) // повтор текста 3 раза
// const string = '  password   '
// console.log(string.trim()) // удаляет все пробелы
// console.log(string.trimStart()) //в начале
// console.log(string.trimEnd()) // в конце

function logPerson(s, name, age) {
    if (age<0) {
        age = 'еще не родился'
    }
    console.log(s, name, age)
    // return 'Info about person'
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Andrey'
const personName2 = 'Artem'
const personAge = 37
const personAge2 = -10

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(output)
console.log(output2)