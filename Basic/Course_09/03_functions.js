'use strict';

const total = (prices) => {
  let amount = 0;
  for (const price of prices) {
    amount += price;
  }
  return amount;
};

const goodsPrices = [1500, 25, 100, 10];

const amount = 100;
console.log({ amount });
{
  const amount = total(goodsPrices);
  console.log({ amount });
}
// Function Declaration
function sum(a, b) {
  return a + b;
}
// Function Expression
const sum1 = function max(a, b) {
  return a + b;
};
// Array Function Expression
const sum2 = (a, b) => {
  return a + b;
};
const sum3 = (a, b) => a + b;

// console.log('sum', sum(3, 7)); //9
// console.log('sum1', sum1(4, 8)); //12
// console.log('sum2', sum2(6, 9)); //15
// console.log('sum3', sum3(2, 4)); //6

// default parameters
function multiply(x, y = 1) {
  return x + y;
}
// console.log('multiply', multiply(4));

// Rest parameters
function multiply2(...args) {
  return args[0] + args[1];
}
// console.log('multiply2', multiply2(3, 7));

function multiply3(a,...args) {
  return a + args[0];
}
// console.log('multiply3', multiply3(3, 7));