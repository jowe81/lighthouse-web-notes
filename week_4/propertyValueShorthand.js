let sunny = "so hot";
let rainy = "so wet";
let windy = "so dangerous";

const conditions = {s: sunny, r: rainy, w: windy};

console.log(conditions);

let { s, r, w } = conditions; //s, r, w can't be valid existing variables

console.log(s, r, w);

//Example from exploringjs.com
const obj = { x: 4, y: 1 };
const {x, y} = obj;
console.log(x); // 4
console.log(y); // 1