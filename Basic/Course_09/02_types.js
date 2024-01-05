'use strict';

const values = {
  name: 'Mouse', //string
  price: 25, // number
  stock: false, //true, false - boolean
  avg: (a, b) => (a + b) / 2n, // bigInt
  reference: null,
  primitive: undefined,
  numbers: [NaN, Infinity],
};

for (const key in values) {
  const value = values[key];
  const type = typeof value;
  console.log({ key, value, type });
}