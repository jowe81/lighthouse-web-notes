# Week 2 Notes
## Closures

https://eloquentjavascript.net/03_functions.html#h_hOd+yVxaku

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

## Name of a function
```javascript
func = function area(a, b) { return a * b; };
console.log(func.name); //area
```

## Invoke a callback function with all its arguments
```javascript
const f = function(callback) {
  callback.apply(null, args);
}
```
