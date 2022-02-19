# React

* Capitalize class names
* _className_ for CSS class instead of _class_
* Have container div with _id="root"_
* Call ```ReactDOM.render(element, container)``` to render the application
* JSX is stricter than HTML: all tages must close, and children close before their parents
* Have only a single element at the root level
* HTML comments are not allowed (but JS comments are)


## Standard scripts
* ```npm start``` serve up the development environment
* ```npm build``` make deployable (static) version of the site/app
* ```npm eject``` eject from the create-react-app ecosystem and manually configure things (irreversible)

## Props
Pass either as key-value pairs:
```javascript
<Profile firstName="Amy" lastName="Mansell" avatar="imgfile.png" />
```
or use the spread operator to pass object:
```javascript
const user = {
  firstName: "Amy",
  lastName: "Mansell",
  avatar: "imgfile.png"
}
<Profile {...user}>
```

### Render arrays
JSX will render all elements when passed an array:
```javascript
const greetings = [
  "<h2>Ola</h2>", "<h2>Hello</h2>", "<h2>Bonjour</h2>"
]

<section>
  <h1>List of greetings<h1>
  {greetings}
</section>
```
If a component is part of a list each instance needs to be passed a unique key as a prop.

### Props.children
https://codeburst.io/a-complete-guide-to-props-children-in-react-c315fab74e7c

Each component receives in its props a property ```.children```, containing all the HTML/JSX between the opening and closing tag in the context of its invocation.

This example component renders all the images between its invoking tag

```javascript
<ImageSlider>
  <img src="/assets/img-1.pg" />
  <img src="/assets/img-2.pg" />
  <img src="/assets/img-3.pg" />
</ImageSlider>
```
Definition:
```javascript
export default function ImageSlider(props) { 
    return (
      <div className="img-slider">
        {props.children}
      </div>
    );  
}
```
## State
* Retain information across multiple renders
* ```useState``` hook
* Import: ```import React, { useState } from "react";```
* ```useState``` uses array destructuring to return two values: ```const [count, setCount] = useState(0);
* ```useState``` argument is optional; default value for the state
* Call hooks at the top of the component function (not inside loops or other functions)
* ```setState``` triggers re-render of the component!
* Lift up state that needs to be available to other components to the closest common ancestor, then pass it back down as props
* Put state-changing logic in parent component, and pass down ready made function to the child. This helps with debuggin (keep the logic close to the state definition)

## Controlled components
* Use state setters to handle onChange events on form elements to bind them to application state

## Fragments
* JSX allows only one parent in the return statement, but can use <React.Fragment> to avoid creating unnecessary <div> containers. 
* shorthand: <> </>
  * the shorthand doesn't accept props though
* use fragments in conditional expressions that may result in multiple root elements as well

## JS and REACT
* Brad Westfall article: https://reacttraining.com/blog/javascript-the-react-parts/
* MDN closures article: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
* A closure is the combination of a function and the lexical environment within which that function was declared. 
```javascript
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```
* To emulate private methods (OOP), return an object with functions from a closure, execute at definition time:
```javascript
const counter = (function(){
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter+=val;
  };
  return {
    increment: function(){
      changeBy(1);
    },
    decrement: function(){
      changeBy(-1);    
    },
    value: function(){
      return privateCounter;
    }
  };
})();

console.log(counter.value());
counter.increment();
...
```
* Function definition types
  * function declaration: ```function name() {}```
    * can be hoisted
  * function expression: ```const name = function() {}```
    * cannot be hoisted
    * creates it's own ```this``` context
    * use for jQuery event handlers
  * arrow function (expression): ```const name = () => {}```
    * cannot be hoisted
    * does not have it's own ```this``` context: ```this``` on the inside is the same as ```this``` on the outside (therefore the regular fn exp above is the right choice for jQuery event handlers); ```$(this)``` will be the element the event was triggered on

* Object method shorthand (can drop the function keyword):
```javascript
const obj = {
  insteadOfThis: function() {
    // do stuff
  },

  youCanDoThis() {
    // do stuff
  }
}
```
* Object destructuring
  * can even use in fn definition; very cool!
  ```javascript
  function add({ x, y }) {
    return x + y;
  }
  ```
* Array destructuring
  ```javascript
  const arr = ['michael', 'jackson'];
  [ first, last ] = arr;
  console.log(last, first); //jackson michael
  ```
  Super cool with ```Promise.all()```:
  ```javascript
  Promise.all([
  Promise.resolve("a"),
  Promise.resolve("b"),
  Promise.resolve("c")
  ]).then(([a, b, c]) => {
    console.log(a, b, c); // a b c
  });
  ```

* Property shorthand
```javascript
  const name = "michael";
  const person1 = { name: name };
  const person2 = { name }; //identical to above
```

* ...Spread syntax (Arrays and Objects)
```javascript
const person = ['Michael', 'Jackson']
const profile = [...person, 'developer']
profile // ['Michael', 'Jackson', 'developer']
```
* ...Rest syntax (Arrays and Objects)
  ```javascript
  const profile = { first: 'Michael', last: 'Jackson', occupation: 'developer' }
  const { occupation, ...rest } = profile
  occupation // developer
  rest // { first: 'Michael', last: 'Jackson' }
  ```
  * Pick a property by name! Awesome
* Computed property names - more awesomeness:
  ```javascript
  // Computed property names (ES2015)
  let i = 0
  let a = {
    ['foo' + ++i]: i,
    ['foo' + ++i]: i,
    ['foo' + ++i]: i
  }
  ```
* Optional chaining with ```?.```
  ```javascript
    users?.length //instead of
    users && users.length
  ```
* Styling components: https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
  * create-react-app: regular style sheet for each component

  ```Button.css```
  ```javascript
  .Button {
    padding: 20px;
  }
  ```
  ```Button.js```
  ```javascript
  import React, { Component } from 'react';
  import './Button.css'; // Tell webpack that Button.js uses these styles

  class Button extends Component {
    render() {
      // You can use them as regular CSS styles
      return <div className="Button" />;
    }
  }
  ```
  * use SASS with create-react-app by renaming .css to .scss (?)
  * Use BEM for naming: http://getbem.com/naming/
    * .block
    * .block--modifier
    * .block__element
    * .block__element--modifier