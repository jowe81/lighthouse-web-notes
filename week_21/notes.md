# Cypress
- uses jQuery selector engine. cy.get() same as $.();
- can chain other jQuery methods like .find(), .children() etc.
- chain .should() after selector method to make assertions
  - .should('have.class', className)
  - .should('be.disabled')
  - .should('not.have.value', value)
  - .should('have.css', parameter, value)
- Best practice for targeting elements is to use [data-cy=...] attribute: ```cy.get('[data-cy=...]')```
- The below yield elements with data-test(*) attribute:
  - getBySel yields elements with a data-test attribute that match a specified selector.
  - getBySelLike yields elements with a data-test attribute that contains a specified selector.

## Commands Run Asynchronous and Serially
- https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Commands-Are-Asynchronous
- None of the tests run until the entire test function has finished executing - so do not put synchronous code into the test function
- Use .then() to do anything in order
- https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Commands-Run-Serially

## Chaining
- can chain ```get().contains().should()```

# Class Based React Components

```javascript
import React, { Component } from "react";

class Application extends Component {
 render() {
  return <div></div>;
 }
} 
```
* All class-based React components must extend the React.Component class.
* All class-based React components must override the render method of the React.Component superclass that they extend.
* If overriding constructor (which is not required), must call ```super(props)```
* Every component that we create as a class inherits this.props, this.state and this.setState
* Always use this.setState to change state
  * Important: only the property(ies) passed in to ```this.setState({})``` will change
  * No need to merge state ourselves, unlike with hooks (```setState({...state, changingProp: value})```)
* State updates are asynchronous: When we call this.setState we cannot immediately access the new values on this.state
* If new state depends on old state, pass a function to ```this.setState()```, taking ```prev``` and returning an object with state changes.
  ```javascript
  increment = event => {
    this.setState(previousState => ({
      count: previousState.count + 1
    }));
  };
  ```  

## Resources explaining difference between class based and function components:
* https://reactjs.org/docs/react-component.html
* https://reactjs.org/docs/state-and-lifecycle.html
* https://reactjs.org/docs/faq-state.html

## State and binding ```this```
* https://medium.com/free-code-camp/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56

## Lifecycle Methods (the most important ones)
* Mount phase
  * ```constructor, render, componentDidMount```
* Update phase
  * ```render, componenetDidUpdate```
* Unmount phase
  * ```componentWillUnmount```
* More: https://reactjs.org/docs/react-component.html

## Local Storage
* ```localStorage.getItem("itemName")```
* ```localStorage.setItem("itemName", "value")```
* use ```JSON.parse()```/```JSON.stringify()```


## Side Effects
* API calls: initially in componentDidMount()
* Websockets: Connect and setup listener in componentDidMount()

# More Resources On React, JS etc

## People to follow on Twitter on React and other JS topics
* https://medium.com/northcoders/8-javascript-experts-you-must-follow-on-twitter-b3293fb14ab5

## Conference talks
* AssertJS 2018 https://www.youtube.com/playlist?list=PLZ66c9_z3umNSrKSb5cmpxdXZcIPNvKGw
* React Conf 2018 https://www.youtube.com/playlist?list=PLPxbbTqCLbGE5AihOSExAa4wUM-P42EIJ
* JSConf https://www.youtube.com/user/jsconfeu/playlists
* https://www.reactrally.com/
* https://reactloop.com/