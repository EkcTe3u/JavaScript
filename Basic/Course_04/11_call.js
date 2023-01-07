// call

// func.call(context, arg1, arg2, ...)

function showFullName(){
    console.log(`${this.name} ${this.surname}`)
}
const user = {
    name: 'Andrey',
    surname: 'Sozdatelev',
    surname2: 'ABC'
}

showFullName.call(user)

function showFullName2(firstPart, secondPart){
    console.log(`${this[firstPart]} ${this[secondPart]}`)
}

showFullName2.call(user, 'name', 'surname')
showFullName2.call(user, 'name', 'surname2')
function doSomething(){
    let arg = Array.prototype.slice.call(arguments)
    console.log(arg);
}

doSomething('abc', '123', 'water')
