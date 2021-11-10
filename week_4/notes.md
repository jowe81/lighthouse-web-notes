## OOP ct'd

### ```super```
References the superclass. Use e.g. to call methods of the parent class when overriding a method in a subclass.

### Getters and setters
* Validate data before assigning it to a property
* Computing on the fly when returning data

### ```get``` and ```set```
Define getters and setters like so:
```javascript
  class Pizza {

    get size() {
      return this._size;
    }

    set size(size) {
      this._size = size;
    }
  }

  pizza = new Pizza();
  pizza.size = 'l';
  console.log(pizza.size);
```
Define getters and setters like methods (with the ```get``` or ```set``` keyword, respectively), but call them like properties (no parenthesis, use = operator to assign)

This is syntactic sugar but it is useful, cleaning up the code.

### Note that there appears to be only one way to define methods in classes
```javascript
//Inside class {}
constructor methodname(parameter) {}

methodname(parameter) {}

set methodname(parameter) {}

get methodname() {} //No parameter on getter
```

No function keyword, no traditional function expression, no arrow functions.

## OOP Goals and Best Practices

### Goals
* reusability: reduce duplicated code
* modularity: breaking code up in sensibly-divided units
* Make a complex thing easy to read, write, and maintain

### Convention for "private" properties
* start a property name with an underscore to indicated it's supposed to be private (though that doesn't actually make it private; you're relying on convention)

### Single Responsibility Principle
* each class should have only one task, specifically:
* each class should have ONLY ONE REASON TO CHANGE

### Inheritance / Abstraction
* use inheritance and abstraction to break up code into sensibly devided units (flower and bush are both plants)

### OO or traditional modularization?
* No one-fits-all answer. Depends on project.

## Dependency Injection
Passing an object the things it needs to perform its task, rather than having the object access them itself.

```javascript

  //accountObject has the method the Withdrawal instance
  //needs to access to perform the transaction
  t1 = new Withdrawal(accountObject, amount);

```

## ```array.reduce()``` on objects
```javascript
  //* Return object in reducer function
  //* ES6 notation: if arrow function returns object, wrap it in parentheses
  this.transactions.reduce((prev, curr) => ({ amount:prev.amount + curr.amount }));
```

## Property Value Shorthans
You can omit the property name when you define an object where keys and values are identical:
```javascript
const cat = 'meow';
const dog = 'woof';
const mouse = 'squeak';

const animals = { cat, dog, mouse };
//instead of animals = { cat: cat, dog: dog, mouse: mouse }

console.log(animals);
// { cat: 'meow', dog: 'woof', mouse: 'squeak'}
```
You can also do it the other way (destructuring):
```javascript
//Assuming an object animals with the properties cat, dog and mouse exists
//Assuming further that cat, dog, and mouse aren't existing variables in this scope
const { cat, dog, mouse } = animals;

console.log(cat); // meow
console.log(dog); // woof
console.log(mouse); // squeak
```

## String functions
### ```str.replace(regex, replacerFunction(match):replacement)```
Make the regex global /.../g to run a replacer function for each match
* regex refresher:
  * `\w` Alphanumeric
  * `\W` non-Alphanumberc
  * `\b` Word boundary (matches the position, not a character)
  * `\B` Word boundary (matches the word character on the boundary)
  * `i` global flag for case-insensitive
  * `g` global flag for global ("match all")
### ```str.substr(start,length)```
Omit length for the rest of the string

## ASync Flow Control
* Callbacks are common way to handle

## process.stdout
* Use ```process.stdout.write()``` as an alternative to console.log. Will not print a newline character automatically
* ```\r``` (carriage return) to go back to the beginning of the line

## Events and process.stdin
* ```process.stdin``` deals with the standard input (keyboard)
* Register an event handler for a keystroke with ```process.stdin.on(callback(data))```
* CTRL + C produces ```\u0003```
* Use Property Value Shortand to assign stdin/stdout: ```const { stdin: input, stdout:output } = require('process');```
* ```readline``` is a built-in module that allows reading a line (from any input stream)
  * ```const rl = require('readline').createInterface({process.input, process.output});```
  * ```rl.question(string, callback(answer))```
  * Call ```rl.close()``` to close the interface and relinquish control
