function hello(){
    console.log('Hello!', this)
}
// hello()

const person = {
    name: 'Andrey',
    age: 38,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()

    }
}

// person.sayHello()
// person.sayHelloWindow()

const kristina = {
    name: 'Kristina',
    age: 33
}
// const fnKristinaLogInfo = person.logInfo.bind(kristina, 'QA Engineer', '+7906')()
// fnKristinaLogInfo()
// вызываются сразу
// person.logInfo.call(kristina, 'QA Engineer', '+7906')
// массив, два параметра
person.logInfo.apply(kristina, ['QA Engineer', '+7906'])

// +++++
const array = [1, 2, 3, 4, 5]

Array.prototype.multBy = function(n) {
    return this.map(function(i){
        return i * n
    })
}

console.log(array.multBy(2))