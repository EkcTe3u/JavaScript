const smallestDivisor = num => {
    if(num <= 0){
        return NaN;
    }else if(num === 1){
        return 1;
    }
    else{
        let counter = 2;
        while(num % counter != 0){
            counter++;
        }
        return counter;
    }
};

console.log(smallestDivisor(5))

const isPrime = (num) =>{
    if (num <=1){
        return false
    }else{
    counter = 2;
    while (num % counter != 0){
        counter++;
    }
    if(counter === num){
        return true;
    }else{
        return false;
    }
}
}
console.log(isPrime(-3))

const sumOfSquares = (a, b) =>a * a + b ** 2;
console.log(sumOfSquares(2, 3))

const squareSumOfSquares = (a ,b) => (a ** 2 + b ** 2) ** 2;

const sqiare = (a) => a ** 2;
sqiare(22)

const x = 7;
const f = (x) => () => () => x;
console.log(f(10)()());

