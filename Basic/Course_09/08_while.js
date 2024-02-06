'use strict';

let i = 0;

while (i < 10) {
  i++;
  console.log('Hello', i);
  if (i === 5) break;
  console.log('World');
}

console.log('End');
{
  let i = 0;

  do {
    console.log('Hello', i);
    if (i === 5) {
      i++;
      continue;
    }
    console.log('World');
    i++;
  } while (i < 10);

  console.log('End');
}

const sum = (...args) => {
  let value = 0;
  while (args.length > 0) {
    value += args.pop();
  }
  return value;
};

const res = sum(1, 2, 3, 4, 5);
console.log(res);

{
  const sum = (...args) => {
    if (args.length === 0) return 0;
    let value = 0;
    do {
      value += args.pop();
    } while (args.length > 0);
    return value;
  };

  const res = sum(1, 2, 3, 4, 5);
  console.log(res);
}


const now = (date = new Date()) => date.getTime();

const sleep = (interval) => {
  const end = now() + interval;
  while (now() < end);
};

console.log('Sleep 5 seconds');
sleep(5000);
console.log('Done');