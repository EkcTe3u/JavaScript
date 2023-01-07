function sayHi(name){
    let prhase = 'Hello, ' + name +'!'
    console.log(prhase);
}
sayHi('Andrey')

function makeCounter() {
    let currectCounter = 0
    return function(){
        return currectCounter ++
    }
}

const counter = makeCounter()

console.log(counter());
console.log(counter());
console.log(counter());
console.log('------------------------');

const counter2 = makeCounter()

console.log(counter2())
console.log(counter2())