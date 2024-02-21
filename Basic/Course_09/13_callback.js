// const add = (a, b) => a + b;

// const res = add(2, 3);
// console.log(`The result is ${res}`); // The result is 5

// const add = (a, b, callback) => callback(a + b);
// const res = add(2, 3, (res) => {
//   console.log(res);
// });
// callback last, error first
const add = (a, b, callback) => {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    callback(new Error('Invalid arguments'));
    return;
  }
  callback(null, a + b);
};
const res = add(2, 3, (err, sum) => {
  if (err) console.error(err);
  console.log({ sum });
});

const Electronics = [
  { name: 'Laptop', price: 1500 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 100 },
  { name: 'HDMI cable', price: 0 },
];
const inStock = (item) => item.price > 0;
const available = Electronics.filter(inStock);
console.log(available);

const printA = (callback) => {
  console.log('A');
  callback();
};
const printB = (callback) => {
  console.log('B');
  callback();
};
const printC = (callback) => {
  console.log('C');
  callback();
};

printA(() => {
  printB(() => {
    printC(() => {
      console.log('D');
    });
  });
});
console.log('------');
const step6 = () => console.log('D');
const step5 = () => printB(step6);
const step4 = () => printC(step5);
const step3 = () => printA(step4);
const step2 = () => printB(step3);
const step1 = () => printA(step2);
step1();

setTimeout(() => {
  console.log('callback 1');
}, 20);
setTimeout(() => {
  console.log('callback 2');
}, 10);
setTimeout(() => {
  console.log('callback 3');
}, 15);

setInterval(() => {
  console.log('setinterval');
}, 10);
