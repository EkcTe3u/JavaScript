const num = 10; // integer
const float = 10.1; // float
const pow = 10e3;
const big = 1_000_000;

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.isFinite(1 / 0));
console.log(Math.pow(2, 53) - 1);

const intNum = 15;
const floatNum = 15.15;

console.log(parseInt(intNum));
console.log(parseInt(floatNum));
console.log(parseFloat(floatNum));

console.log(0.3 + 0.1);
console.log((0.3 + 0.1).toFixed(10));
console.log(+(0.3 + 0.1).toFixed(10));

// BigInt

console.log(BigInt(Number.MAX_SAFE_INTEGER) + 54484488n);
console.log(parseInt(10n) - 4);
console.log(10n - BigInt(4));
console.log(10n / 4n);
