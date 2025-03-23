'use strict';
// Как клонировать объект

// Поверхностная (Shallow) Поверхностное клонирование создает новый объект, но не клонирует вложенные объекты. Вложенные объекты будут ссылаться на те же самые объекты, что и в оригинале. Если изменить в первом, то поменяется и во втором

let originalObj = {
  name: 'Andrey',
  surname: 'Sozdatelev',
  address: {
    town: 'Spb',
    street: 'The Komendantskiy prospect',
  },
};

// Object.assign({}, ObjectToCopy)
let assignObj = Object.assign({}, originalObj);
assignObj.name = 'Gleb';

// (...) спред оператор
let spreadObj = { ...originalObj };
assignObj.address.town = 'Moscow'; // поменяется во всех объектах, тк ссылкается на ссылку

console.log(originalObj);
console.log(assignObj);
console.log(spreadObj);

// Глубокая (Deep) рекурсивно копирует все уровни вложенности, создавая независимые копии

//  JSON.parse(JSON.stringify())
//  Не копирует функции.
//  Не копирует undefined и Symbol.
//  Не работает с циклическими ссылками.

const original = { name: 'Alice', details: { age: 25 } };
const clone = JSON.parse(JSON.stringify(original));

console.log(clone); // { name: "Alice", details: { age: 25 } }

// Изменение вложенного объекта в клоне не повлияет на оригинал

clone.details.age = 30;
console.log(original.details.age); // 25

// structuredClone()
// Не поддерживает функции, Symbol, DOM-узлы и некоторые другие типы.

const originalStructured = { name: 'Alice', details: { age: 25 } };
const cloneStructured = structuredClone(original);

console.log(cloneStructured); // { name: "Alice", details: { age: 25 } }

// Изменение вложенного объекта в клоне не повлияет на оригинал
console.log('change ------');
cloneStructured.details.age = 30;
console.log({ cloneStructured });
console.log({ originalStructured }); // 25

// Рекурсивное клонирование
