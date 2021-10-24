# Week 1
#### Oct 22, 2021
## Git and Gists

Fork: copy of someone's repo or gist

A gist is a small code snippet that only one person can contribute to

To clone it: 
* copy the SSH URL
* git clone [URL] local_dir_name

## Markdown

\# Header H1

\###### Header H6

\* Unordered list item

&nbsp;&nbsp;&nbsp;&nbsp;\* Indented unordered list item

\'\'\' javascript [Code block] \'\'\' (backticks)

\'messageText\' format as code (backticks)

## Git and Branches

`git -b [branchname]` Create and checkout new branch

`git checkout [branchname]` Switch to branch

## Template Literals
Inject variable content into strings:
```javascript
const color = 'green';
console.log(`The light is on ${color}`);
```

#### October 22, 2021
# Functions

## Pure function
A function that has no side-effects (such as printing to the console) and doesn't rely on other functions' side effects (such as global bindings).

Pure functions are much easier to test than non-pure functions.

## Function Rules
* Start function name with a verb if possible
* camelCase for Javascript functions
* indent properly
* accomplish single task
* pass in parameters (no global variables

# Equals and Type Coercion
Always use ===, comparing both type and value.
The == operator will try to match the types of the expressions on both sides before comparing them, and can result in unintended outcomes. 

# Keyboard shortcuts
* `CMD + ~` switches between windows of same app
* `CMD + SHIFT + F` Global search in VSCode
* `CMD + LEFT/RIGHT` Go to start/end of line (with shift: select)
* `CMD + UP/DOWN` Go to start/end ef document (with shift: select)
* `CMD + W` Close open tab
* `CMD + ALT + LEFT/RIGHT` Navigate through tabs
* `CMD + P` Go to file (VSCode)
* `CMD + /` Comment out current or selected line(s) (VSCode)

# Data types
## Primitive types
* null
* undefined
* boolean
* number
* string
* symbol (new in ES6)

## Fundamental types
All primitive types plus:
* object

# Objects
* keys are always strings (or symbols)
* can (and should) leave out the quotes when defining a key in an object literal: `{ keyname: "value"}`
* UNLESS the key contains non-alpha-numeric characters
* when accessing a non-extant key, `undefined` will be returned
* `Object.keys()` returns an array of the objects' keys

## Iterate over objects: for ... in
```javascript
for (let key in object) { 
  console.log(key);
}
```
This will log all keys of the object. 

To ensure only to loop over actual (non-inherited) properties, use
```javascript
object.hasOwnProperty(property)
```

## Functions are first-class objects in JS
* This is a distinctive feature of Javascript

## Higher-Order functions
* Functions that operate on other functions (for example, functions accepting callbacks such as .filter, .forEach etc)
* Allows to compose bigger functions with smaller functions and package functionality in less code, with less bugs, more reusably and easier to read and debug. Amazing!
* [Video](https://www.youtube.com/watch?v=BMUiFMZr7vk)