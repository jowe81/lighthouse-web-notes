# Week 3
## ES6 quiz things to remember
Arrow functions DO NOT DECLARE THEIR OWN SCOPE but inherit PARENT SCOPE
let is block-scoped, and that includes if { } blocks

In the case of arrow functions, this is a great advantage when using them as callbacks. No need to save the parent context into a parent-scope helper variable anymore!


## Searching in strings
```javascript
somestring.search(querystring);
somestring.search(new Regexp(querystring, switches));
```

## Recursion

### recursive case
The exit condition is not met, function calls itself
### base case
Exit condition has been met, function no longer calls itself

Each recursive call breaks the problem down into a smaller problem and eventually gets to the base case, when no more recursion is needed to solve the problem.

## Modules

### Every javascript file is considered a module in node
That means we always have access to a global ```module``` object in the file that's currently being executed. It's empty by default, but we can assign a function or object which in turn can be retrieved from within another file using ```require()```.

### Packages

* run npm init in project directory to generate package.json
* package.json: 
  * name and versions fields are mandatory for publishing.
  * main denotes the entry point and will default to index.js.
  * version: semantic versioning format [SemVer](http://semver.org): MAJOR.MINOR.PATCH
    * MAJOR version number: incompatible API change
    * MINOR version number: backwards compatible feature additions
    * PATCH backwards compatible bug fixes
* ```npm install packet``` will install packet and add it as a dependency to package.json
* package-lock.json holds more information about dependencies (updated by npm)

### Testing

* Every complex function starts small and simple
* Unit testing tests isolated functionality without relying on external resources (database, other files etc). Should have lots of unit tests.
* Integration tests test the interaction of several parts of the system (e.g a script interacting with a database). More complicated, take longer to write and maintain, should be used more sparingly.
* Functional tests test the entire system and includes automating browsers. Should have very few. Difficult to write, complicated to maintain. Example: "register a user"
* "Happy Path Testing": Testing the essentials without testing for a lot of exceptions such as mistyped input

### Unit Testing Tools: Mocha / Chai

* In project directory
  * for browser tests, run ```npm install mocha chai --save-dev```
  * for node/console tests, run ```npm install -g mocha```
  * Make ./test subdirectory

* Testing on node:
  * To run test, use the ```mocha``` command
  * To use Chai ```const chai = require('chai')```
  * Omit ```require('chai')``` for browser tests!

* Testing in the browser:
  * Create a test runner: html file that runs the tests 
  
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mocha Tests</title>
    <link rel="stylesheet" href="node_modules/mocha/mocha.css">
  </head>
  <body>
    <div id="mocha"></div>
    <script src="node_modules/mocha/mocha.js"></script>
    <script src="node_modules/chai/chai.js"></script>
    <script>mocha.setup('bdd')</script>

    <!-- load code you want to test here -->
    <script src="exampleModule.js"></script>
    <!-- load your test files here -->
    <script src="./test/exampleModuleTest.js"></script>
    <script>
      mocha.run();
    </script>
  </body>
</html>
```

### Test file example
* ```describe('moduleName', () => {});``` groups a series of tests
* Inside ```describe``` a series of ```it('should do whatever...', () => {},"did not do whatever");``` statements will contain the test code
* Leaving an ```it``` statement with just the first parameter will mark the test as pending, effectively allowing the creation of a to-do list for tests

### Node vs browser testing

* Requires slightly different structure of the test file
```javascript
// classNameTest.js

var chai = require('chai');
var assert = chai.assert;

var className = require('../js/className.js');
var addClass = className.addClass;

// The rest of the file remains the same

describe('addClass', function() {
  ...
});
```

```javascript
// className.js

module.exports = {
  addClass: function(el, newClass) {
    if(el.className.indexOf(newClass) !== -1) {
      return;
    }

    if(el.className !== '') {
      //ensure class names are separated by a space
      newClass = ' ' + newClass;
    }

    el.className += newClass;
  }
}
```
* Article: https://www.sitepoint.com/unit-test-javascript-mocha-chai/

### NPM
* --save-dev or -D flag: save to devDependencies (not in production)
* --no-save: don save as a dependency at all
* package.json needs test suite in "test" property (mocha) to enable ```npm test```


### String methods
* ```string.replace(search, replacement)```
* ```string.replaceAll(search, replacement)```

### Regular Expressions
* ^, $ beginning, end of line
* \s single white-space character
* \S single non-white-space character
* \d digit [0-9]
* [] character class, eg/ [a-z]
* [^] negated character class
* \w word character (alphanumeric)
* \W not a word character
* \b word boundary (following or preceding char matches \W )

## OOP
* state: an object's static properties?
* behavior: an object's methods
* ```this``` inside a method refers to the object the method was called on

### Classes
* Class name should always be a noun, and capitalized
* ```class Pizza { }```
 ```javascript
pizza1 = new Pizza();
pizza2 = new Pizza();
```
* Constructor function ```constructor()```
* Use constructor method to set default values/properties/state
* Adding methods
```javascript
class Pizza(){

  methodName(parameters){

  }

}
```

### Inheritance
* extend a class with the keyword ```extend```
```javascript

class subClass extends superClass {

  //superClass's methods and static properties pulled in here when instantiating subClass

  subClassMethod() {

  }

}

```
* extending classes are called subclasses
* extended class is the superclass of its subclass

## More on Recursion

https://medium.com/angular-in-depth/learn-recursion-in-10-minutes-e3262ac08a1

"The unknown number of nested loops is a common characteristic of all problems that are recursive in their nature and should give you a hint that recursive solution is required."

### Tail Call Optimization

If nothing comes after the recursive call, the compiler can optimize the call stack use.