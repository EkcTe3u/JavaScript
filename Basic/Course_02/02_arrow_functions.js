// function sum (a, b) {
//     return a + b
// }

// function cube (a) {
//     return a ** 3
// }

// const sum = (a, b) => {
//     return a + b
// }
// console.log(sum(2, 5))

// const cube = a => {
//     // один параметр можно убирать скобки
//     return a ** 3
// }

// const cube = a => a ** 3
// console.log(cube(2))

// setTimeout (function () {
//     console.log("After 1 second")
// }, 1000)

// setTimeout (() => {
//     console.log("After 2 seconds")
// }, 2000)

// setTimeout (() => console.log("After 3 seconds"), 3000)


// Context

function log() {
    console.log(this);
}

const arrowLog = () => console.log(this);
// const person = {
//     name: "Andrey",
//     age: 37,
//     log: log,
//     arrowLog: arrowLog,
//     delayLog: function () {
//         const self = this
//         global.setTimeout (function(){
//             console.log(self.age +" "+ self.name);
//         }, 500)
//     }
// }

const person = {
    name: "Andrey",
    age: 37,
    log: log,
    arrowLog: arrowLog,
    delayLog: function () {
        global.setTimeout (() => {
            console.log(this.age +" "+ this.name);
        }, 500)
    }
}
// person.log()
// console.log(global);
// person.arrowLog()
person.delayLog()
