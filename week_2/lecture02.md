### October 30, 2021
#Lecture 03, Callbacks
## Agenda
* Different types of functions
* Functions as first-class citizens
* Higher-order functions 
* Callbacks
* Single Responsibility Principle
* Arrow functions
* Live Coding

Sandeep: Higher-order functions made me a 90% better programmer

Javascript is a functional programming language, not class based (although there are classes; syntactic sugar on objects)
Callbacks: controlling flow

### Difference between parameter and argument:
* parameter is in the declaration of the function
* argument is the data being passed into it

```javascript
function add(a, b) { //Parameters a, b
  return a + b;
}
add (2, 2) //Arguments being passed in
```
### Function Declaration
```
function funcName(){}
```
### Function Expression
```
const funcName = function(){}
```
Assign an anonymous function to a variable (means we can pass it)

### Anonymous Function
```
function(){}
```
If it doesn't have a name, it's an anonymous function

```javascript
(function(){
  console.log("hello");
})()
```
When using the function keyword as above, wrapping it in parentheses makes it an expression. That, then, can be called by adding parentheses at the end. BUT, bad practice - don't do.

### Arrow Functions
```javascript
const printUsername = () => {
  console.log("Name");
}
```

You can reduce some arrow functions to one-liners:
```javascript
const sum = (a, b) => a + b;
```

Remaining question:
Consider this code:
```javascript
const sum = function(a, b) { return a + b };
```

If you look at the memory address for ```sum``` after declaring the function as a function expression vs arrow function, what's the difference? Is there any?

Look into 'this' in arrow function vs function expression.

```javascript
function Employee(name){
  this.name = name;
  return this;
}

const Employee2 = (name) => {
  this.name = name;
  return this;
}

const sandeep = new Employee("Sandeep");
console.log(sandeep.name);

const sandeep2 = new Employee2("Sandeep");
console.log(sandeep.name);

```

### Functions are first class citizens in JS
A function can be treated like any other value in JS. Can be assigned to a variable, passed, and returned.

### Higher oder function:
A function that accepts another function as an input parameter or returns another function

#### Some favorite JS HOCs:
```javascript
.map
.reduce
.filter
.forEach
.some
.every
```

### array.forEach Demo

```javascript
const numbersArr = [1 , 3, 5, 7];

const doubleIt = (n) => n *2;

const printDoubles = (n) => console.log(doubleIt(n));

numbersArr.forEach(printDoubles);
```

### Single Responsibility (purpose) Principle
In above example, forEach has ONLY the responsibility of looping, and printDoubles is responsible for printing to the console.