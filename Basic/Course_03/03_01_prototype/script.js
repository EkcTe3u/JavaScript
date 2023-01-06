// const person = {
//     name: 'Andrey',
//     age: 38,
//     greet: function(){
//         console.log('Greet!');
//     }
// }

const person = new Object({
    name: 'Andrey',
    age: 38,
    greet: function(){
        console.log('Greet!')
    }
})

Object.prototype.sayHello = function(){
    console.log('Hello!')
}

const lena = Object.create(person)
lena.name = 'Elena'

const str = 'I am string'