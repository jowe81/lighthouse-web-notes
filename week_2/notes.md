Symbol creates a reference to a string which is guaranteed to be unique.

```javascript
const sym1 = Symbol('a');
const sym2 = Symbol('b');
console.log(sym1 === sym2)

-> false
```
### Primitive datatypes
Often used
* Strings
* Boolean
* Numbers
* Null/NaN
* Undefined

Rarely used
* Symbol
* BigInt


### Non primitive datatypes:
1. Arrays
2. Objects
3. Functions

### Declare a BigInt
```
let num = 54321n
```
### Code Visualization
pythontutor.com

You can store a function in an array 
```
let array = [123, 'abc', true, {}, [], function(){} ];
```

### Declare an object

```javascript
const champions = {
  team: "Raptors",
  year: 2019,
  mvp: ["Leonard", "James", "Giannis"],
  printMvps: function() {
    const roster = this.mvp;
    for (const player of roster) {
      console.log(`MVP: ${player}`);
    }
  }
};

console.log(champions);
console.log(champions.printMvps());
```

Omitting quotes on key declarations is fine; JS knows they are always strings

### Accessing object properties
Bracket notation: most flexible, can pass in variables
Dot notation: direct key access only, only alpha-numeric characters only, must start with alpha

### Delete a property
```
delete obj.prop
```

or assign null (although that won't remove the property).

### Object types vs primitive types
Pass by reference vs pass by value

### Looping over objects
```
for .. in
```
(for .. of / each is for arrays)