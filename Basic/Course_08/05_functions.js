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
  clearInterval(interval)
}, 3000);
