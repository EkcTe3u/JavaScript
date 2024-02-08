'use strict';

const purchase = {
  Electronics: [
    { name: 'Laptop', price: 1500 },
    { name: 'Keyboard', price: 100 },
    { name: 'HDMI cable', price: 10 },
  ],
  Textile: [{ name: 'Bag', price: 50 }],
};
console.log(purchase);

// ключи объекта
const keys = Object.keys(purchase);
console.log({ keys });

// ключи и значения
const entries = Object.entries(purchase);
console.log({ entries });

console.log(purchase.Electronics.at(-1));
console.log(purchase.Electronics[2]);

// копирование массива

const items = [...purchase.Electronics];
console.log('items', items);

// Объединение массивов
console.log([...purchase.Electronics, ...purchase.Textile]);
