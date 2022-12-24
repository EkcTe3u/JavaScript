// const title = "hello"
// const isVisible = () => Math.random() > 0.5
// const template = `
//  ${isVisible() ? `<p>Visible</p>` : 'test'}
//  <h1 id = 'demo' style = "color: red">${title}</h1>`


// Methods

const str = "Hello"

console.log(str.startsWith("He"));
console.log(str.endsWith("lo"));

console.log(str.includes("el"));

// delete spase

console.log(str.trim());
console.log(str.trimEnd());
console.log(str.trimStart());

console.log(str.padEnd(10, 123));
console.log(str.padStart(15));