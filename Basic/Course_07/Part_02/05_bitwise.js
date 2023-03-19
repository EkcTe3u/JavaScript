'use strict';

const a = 9;
const b = 14;
const c = -9;

const aBinary = a.toString(2);
const bBinary = b.toString(2);
const cBinary = c.toString(2);

console.log(a + ' to base 2:  ' + aBinary);
console.log(b + ' to base 2: ' + bBinary);

console.log('Bitwise operators');

console.log(a + ' & ' + b + ' = ' + (a & b));  // and
console.log(aBinary + ' & ' + bBinary + ' = ' + (a & b).toString(2));

console.log(a + ' | ' + b, ' = ', a | b);
console.log(aBinary + ' | ' + bBinary + ' = ' + (a | b).toString(2)); // or

console.log(a + ' ^ ' + b, ' = ', a ^ b);
console.log(aBinary + ' ^ ' + bBinary + ' = ' + (a ^ b).toString(2)); // or -> /or

console.log('~' + a + ' = ' + ~a); // битовое не
console.log('~' + aBinary + ' = ' + (~a).toString(2));

console.log(a + ' << ' + 2 + ' = ', a << 2); // сдвиг влево
console.log(aBinary + ' << ' + 2 + ' = ' + (a << 2).toString(2));

console.log(b + ' >> ' + 2 + ' = ', b >> 2); // сдвиг вправо
console.log(b + ' >>> ' + 2 + ' = ', b >>> 2); // сдвиг вправо с прокруткой
console.log(bBinary + ' >> ' + 2 + ' = ' + (b >> 2).toString(2));
console.log(bBinary + ' >>> ' + 2 + ' = ' + (b >>> 2).toString(2));

console.log(c + ' >> ' + 2 + ' = ', c >> 2);
console.log(c + ' >>> ' + 2 + ' = ', c >>> 2);
console.log(cBinary + ' >> ' + 2 + ' = ' + (c >> 2).toString(2));
console.log(cBinary + ' >>> ' + 2 + ' = ' + (c >>> 2).toString(2));
