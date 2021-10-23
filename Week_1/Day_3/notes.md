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