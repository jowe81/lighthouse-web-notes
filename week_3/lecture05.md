## November 2, TDD
#### Charlotte
* Test Driven Development
* Writing tests before code

### Happy Path vs Sad Path
* Happy Path: works properly, expected user behaviour. Testing for valid data. Do this first.
* Sad Path: Testing for invalid data, edge cases.

### Steps to writing test:
* Write the minimal amount of code to execute some tests
* Come up with test cases

### Test Cases for sayHi()
* Happy Path
  * Should return a name when we pass a name
* Sad Path
  * Should return an empty string when passed an empty string
  * ...


### Console.assert
Not the preferred way:
```console.assert(condition, 'error message');```

### Assert library

Preferred way:
Assert library in Node.js (this is a Node library, that is not in core Javascript or in the browser)

```const assert = require('assert');```

Convention: name of variable should match name of library

Tip: console.log the library object to find out what functions it contains.

```assert.strictEqual(actual, expected);```

* ```strict``` version compares type and value (no type coercion)
* throws assertion error if test fails

#### Ideally import assert.strict
```const assert = require('assert').strict```

### try/catch
Inspect error object

### Convention:
Always separate test code from actual code needed in production - never test in the same file


### Module.export
* Option I: export one thing
```module.export = sayHi```
* Option II: manuall assign properties to ```Module.exports```
* Option III: export object directly: ```module.exports = { ... }```
* No need to export everything in the module file. Can keep helper functions private.

### Require
* Can pick and choose with require:


```javascript
const { prop1, prop2, prop3 } = require('library');

prop1();
prop2();
...
```
### NPM
* Library interface at http://npmjs.com
* Never install anything globally,
  * so you don't have to maintain it globally either (i.e. updating, and sharing version between apps)
  * If you're working on a team, put it in dev-dependencies so that peers won't have to manually install dependencies
* ```npm install --save-dev package-name```
* Puts all depencies modules into the ./node-modules folder

### NVM
* nvm list shows node versions
* nvm let's you switch between versions

### Mocha
* Group tests: ```describe()```
* Specify a test: ```it()```


### Chai
* ```const { assert } = require('chai');```
* Chai has a lot more assertion functions

## Breakout Thu 4:30p PST



