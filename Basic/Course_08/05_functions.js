// function declaration

function greet(name) {
  console.log('Hello - ', name);
}
greet('Andrey');

// Function exspression

const greet2 = function (name) {
  console.log(`Hi, ${name}`); // template string
};
greet2('Andrey');

console.log(greet.toString());

setTimeout(function () {
  greet('Kristina');
}, 1500);

// repeat every 3000
const interval = setInterval(function () {
  greet('Gleb 3000');
  clearInterval(interval);
}, 3000);

// arrow function

const arrow = (name) => {
  console.log('Hello', name);
};

arrow('Andrey');

function pow(num, exp) {
  return Math.pow(num, exp);
}

console.log(pow(3, 3));

// default parameters

const sum = (a, b = 2) => a + b;
console.log(sum(40));

function sumAll(...numbers) {
  console.log(numbers);
  let res = 0
  for ( let num of numbers){
  res += num}
  return res;
}

console.log(sumAll(1, 2, 3, 4, 5));
