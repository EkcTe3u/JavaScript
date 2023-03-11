'use strict';
// single comment

/* multilene
   comments
*/

console.dir({ hoisted }); // { hoisted: undefined }
hoisted = 5; // Assign 5 to hoisted
console.dir({ hoisted }); // { hoisted: 5 }
var hoisted; // Declare hoisted

let scalarVariable = 6;
const scalarConstant = 7;

const o = { scalarVariable, scalarConstant };
console.dir(o);

o.scalarVariable = 8;
scalarVariable = 9;

console.dir(o);

// scalar
// строчки, числа, логические значения true, false

let scalar1 = 5;
let scalar2 = scalar1;
scalar1--;
scalar2++;
console.dir({ scalar1, scalar2 });

// ссылочные(структурные) типы функция, массив, объект

const object1 = { field: 5 };
const object2 = object1;
object1.field = 6;
console.dir({ object1, object2 });
