// Как предотвратить изменение объекта?

// Дескрипторы свойст у объектов
// enumerable — является ли свойство видимым при перечислениях (например, в цикле for..in, Object.keys);
// writable — доступно ли свойство для записи;
// configurable — отвечает за то, можно ли изменять другие декскрипторы свойства, удалять свойство, изменять тип свойства.

'use strict';

const laptop = { os: 'Alice' };

//посмотреть текущие свосйства объектов
console.log(Object.getOwnPropertyDescriptor(laptop, 'os'));

// перреназначение дескриптора свойства 'os'
Object.defineProperty(laptop, 'os', {
  value: 'MacOS',
  writable: true, // можем изменить значие объекта
  enumerable: true, //будем видеть свойство через enumerable в цикле for..in, Object.keys
  configurable: true, // можем изменять или удалять свойство  writable, enumerable
});

console.log(laptop.os);

laptop.os = 'Windows'; // mistake 'use strict' mode if writable: false

console.log(laptop);

//Методы

// Метод Object.preventExtensions() запрещает добавление новых свойств, но позволяет изменять и удалять существующие.
const obj = { name: 'Alice', age: 25 };

Object.preventExtensions(obj);

// Попытка изменить свойство
obj.name = 'Bob'; // Сработает
// obj.surname = 'Dilan'; // mistake 'use strict' mode
console.log(obj.name); // "Bob"
delete obj.age;
console.log({ obj });

// Метод Object.seal() запрещает добавление и удаление свойств, но позволяет изменять существующие свойства, если они не являются неперезаписываемыми writable: false
// работает только на первом уровне вложенности.

const secondObj = { name: 'Alice', age: 25 };

Object.seal(secondObj);

// Попытка изменить свойство
secondObj.name = 'Bob'; // Сработает
console.log({ secondObj }); // "Bob"

// Попытка добавить новое свойство
// secondObj.job = 'Developer'; // Не сработает
// console.log(secondObj.job); // undefined

// Попытка удалить свойство
// delete secondObj.name; // Не сработает
// console.log(secondObj.name); // "Bob"

// Метод Object.freeze() полностью запрещает изменение объекта: нельзя добавлять, удалять или изменять свойства. Также нельзя изменять дескрипторы свойств
// работает только на первом уровне вложенности.
