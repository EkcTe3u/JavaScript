'use strict';

console.log(0b11); // 3
console.log(0o11); // 9
console.log(0x11); // 17

console.log(parseInt(5, 10)); // 5
console.log(parseInt('5', 10)); // 5
console.log(parseInt('+5', 10)); // 5
console.log(parseInt('5mm', 10)); // 5

console.log(parseInt('(5)', 10)); // NaN
console.log(parseInt('"5"', 10)); // NaN
console.log(parseInt('[5]', 10)); // NaN

console.log(parseInt('NaN', 10)); // NaN
console.log(parseInt(Infinity, 10)); // NaN
console.log(parseInt('Infinity', 10)); // NaN
console.log(parseInt('-Infinity', 10)); // NaN

console.log(5.1, parseInt(5.1, 10)); // 5.1 5
console.log(5.1 * 1e50, parseInt(5.1 * 1e50, 10)); // 5.1e+50 5
console.log(0.000000000005, parseInt(0.000000000005, 10)); // 5e-12 5
console.log(0.0000005, parseInt(0.0000005, 10)); // 5e-7 5
console.log(0.000005, parseInt(0.000005, 10)); // 0.000005 0
