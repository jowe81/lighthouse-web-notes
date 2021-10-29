# Week 2 Notes
## Closures
```javascript
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
```
When wrap1 gets assigned wrapValue(1), it is assigned a function that returns the local variable local in wrapValue, at the time of calling set to 1. When wrap() gets executed, it remembers that context/scope.

