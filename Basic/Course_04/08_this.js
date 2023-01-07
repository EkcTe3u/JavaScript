const user = {
    name: 'Andrey'
}
user.sayHi = function() {
    console.log('Hello ' + this.name);
}
user.sayHi()

function nameFunc() {
    // 'use strict'
    console.log(this)
}
nameFunc()