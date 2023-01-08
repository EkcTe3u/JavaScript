// bind

// setTimeout(function(){
//     console.log('Hello!')
// }, 5000)

const user = {
    name: 'Andrey',
    sayHi: function(){
        console.log(this.name)
    }
}

setTimeout(user.sayHi.bind(user), 1000)

// function f(a, b){
//     console.log(this);
//     console.log(a + b);
// }

// const g = f.bind('Context')

// g(1, 2)

// const wrapper = func.bind(context, arg1, arg2, ...)