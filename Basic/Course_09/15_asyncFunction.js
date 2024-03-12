// const add = (a, b) => a + b;
// const res1 = add(2, 3); //res1 is now 5
// console.log(`The result of adding 2 and 3 is ${res1}`);

// const add2 = (a, b, callback) => callback(a + b);
// const res2 = add2(2, 9, console.log);

const add = async (a, b) => {
  return a + b;
};
const main = async () => {
  const res3 = await add(4, 6);
  console.log(`The result of adding 4  and 6 with async/await is ${res3}`);
};
main();

// Then

add(2, 3).then((value) => {
  console.log(value);
});

const step1 = async () => console.log('Step One');
const step2 = async () => console.log('Step Two');

// await step1();
// await step2();

await step1.then(step2);
