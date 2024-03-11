function add(x) {
  function closure(y) {
    const z = x + y;
    console.log(`${x} + ${y} = ${z}`);
    return z;
  }
  return closure;
}

const result = add(3)(5);
console.log('The result is: ', result);

const add2 = (x) => (y) => x + y;
res = add2(10)(7);
console.log('Another way to get the same result:', res);

const logger = (kind) => {
  const color = logger.colors[kind] || logger.colors.info;
  return (s) => {
    const date = new Date().toISOString();
    console.log(color + date + '\t' + s);
  };
};

logger.colors = {
  warning: '\x1b[1;33m',
  error: '\x1b[0;31m',
  info: '\x1b[1;37m',
};

// Usage

const warning = logger('warning');
const error = logger('error');
const debug = logger('debug');
const slow = logger('slow');

slow('I am slow logger');
warning('Hello');
error('World');
debug('Bye!');


