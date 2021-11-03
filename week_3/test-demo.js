const assert = require('assert');

const sayHi = (name) => `Hi ${name}`;
const result = sayHi("Johannes");
//console.log(sayHi());
console.assert(result === "Hi Johannes","Return was unexpected");
console.log("Not executed");

assert.strictEqual(sayHi("Charlotte"),"Hi Charlotte");
//console.log(assert);

