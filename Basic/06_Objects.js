// Объекты
const person = { // ключ = значение
    name: 'Andrey',
    age: 37,
    isQAEngineer: true,
    languages: ['ru', 'en'],
    'complex key': 'Complex Value',
    ['key_' + (1 +3)]: '', // [] - вычисляемое значение
    greet ()    /* или :function() */ {
        console.log('greet from person')
    }
}

// console.log(person.name)
// console.log(person['age'])
// console.log(person["complex key"])
// person.greet()
// person.age++ // +1 age
// person.languages.push('ua') // add to array 
// // person['key_4'] = undefined
// delete person['key_4']
// console.log(person)

// Деструктуризация
// const name = person.name
// const age = person.age
// const languages = person.languages
// const {name, age, languages} = person // age: personAge = 10 - поменять имя переменной, назначить значение по умолчанию
// console.log(name, age, languages)

