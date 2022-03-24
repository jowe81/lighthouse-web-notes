# Automated Testing in React
* Regression testing: Making sure a bug never returns in subsequent versions of the software

## Why writing tests?
* Enhanced workflows
* Confidence that the app is going to work according to specs
* Code coverage - how much do you need? Logarithmic relationship of testing work and return; find sweet spot (don't aim for 100%)
  * If your test does something that the consumer of your code doesn't then it's testing implementation details (such as using a private function)
  * if a refactor breaks your tests, then it's testing implementation details (not good)

## Types of testing
* Static Code Analysis
  * (ESLint) is a form a testing
  * Flow: find type errors
* Unit tests
  * Test a function
* Integration tests
  * Start server, connect to database, test API
  * the process of proving that two or more units of code work together
  * Best balance of cheap, run quickly, and solve the biggest problems
  * Poke fewer holes in reality (don't test far-out edge-cases?)
  * Test higher up your tree (don't test just a button)
* End-to-end tests
  * Cypress
  * visitApp, typeForm, check for Return

Approach
* Static (ESlint, Flow)
* Some unit Tests (not too many)
* Integration tests (focus here)
* Some E2E

## Jason Lengstorf
* https://www.youtube.com/watch?v=zqdCM8zR6Mc
* Make the right thing the easy thing (when shaping a process assume that everybody there is the laziest person on the planet)
* Path of least resistance, default action, needs to be the RIGHT thing
* Make the learning curve as shallow as possible
* "If you're a 10x developer and everybody else is a 1x, the worst thing you can do ist just be a 10x developer. The best thing you can do is be a 5x developer and help everyone else on the team become a 2x developer." Figure out a way to multiply.
* Important skill: Managing up. Execs also need training. Example:
  * Untested product is fragile
  * Fragile products break in a unpredictable ways
  * Unpredictability causes delays
  * Delays cost money and frustrate customers
  * (Focus on benefits to the exec)
* Make code quality a point of pride
* Visually represent code health in public (eg SonarCube)

## Unit Testing
* Differentiate between test errors (test doesn't pass) and code errors (code crashes)
* Component and its children are considered a unit for our purposes
* 3 Phases:
  * Initialize the component that we would like to test.
  * Trigger the change that executes the unit.
  * Verify that the unit produced the expected result.
* Example (Jest):
  ```javascript
  it("renders its `children` prop as text", () => {
    const { getByText } = render(<Button>Default</Button>);
    expect(getByText("Default")).toBeInTheDocument();
  });
  ```
  * render() from @testing-library/react returns an object with query functions for the rendered component (getBy...)
  * combine query variant with a type (getBy|LabelText, getAll|ByTitle etc. )
  * getByTestId finds the element that has a prop data-testid by that prop's value
  * The types of queries:
    * ```getBy...``` thorw error if it doesn't find
    * ```queryBy...``` return null if it doesn't find
    * ```findBy...``` asynchronous (for stuff that takes time)
  * import render, cleanup, act from @testing-library/react
* Continuous Integration: run tests automatically after each commit
* ```it``` and ```test``` are the same
* ```xit``` and ```test.skip``` are also the same

### Mock Functions
* Use Mock functions to "poke holes in reality"; e.g. to fake an API call
* ``` const fn = jest.fn(pass_or_declare_a_mock_function)```
* Example
  ```javascript
  it("uses the mock implementation", () => {
  const fn = jest.fn((a, b) => 42);
  fn(1, 2);
  expect(fn).toHaveReturnedWith(42);
  });
  ```
* other methods: ```expect(fn).toHaveBeenCalledWidth()```, ```expect(fn).toHaveBeenCalledTimes(n)```
* We can capture the different calls made to the function and the arguments for each call.
* We can configure the function to return any value that we want for the specific test.

### Mock libraries 
* ```src/__mocks__/library.js```
* Will be called instead of library.js when called during testing

### Mock axios
* in mock axios.js, export functions like so
  ```javascript
  export default { 
    get: jest.fn(url => {}),
    put: ...
  }
  ```
* this exposes utilities to use in the tests for error testing, such as ```axios.get.mockRejectedValueOnce()```


### Folder Structure Jest
* ```npm test --verbose``` sends the flag to npm 
* ```npm test -- --verbose``` for the green checkmarks like mocha (pass flag to jest)
* Jest docs jestio.
* Jest will find .js files in __tests__
* Jest will find .test.js/.spec.js files anywhere
* Jest will find extensions js/jsx/ts/tsx
* using the full src/components/__tests__/Button.test.js path is a good idea

### Setup/Teardown
* beforeAll(fn, timeout)
* beforeEach(fn, timeout)
* afterEach(fn, timeout)
* afterAll(fn, timeout)

### Prop-types library
* A runtime alternative to TypeScript/Flow
* Ensure that the correct types of props get passed to components
* ```npm install --save-dev prop-types```
* https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes


### Integration tests
* Test more than one small part
* Test user flow / simulate user interaction

### Async / Await
* hide promise chain
* async/await function does not need to return promise

### Scoping to containers
* render() returns a container object
* render() returns query functions that are scoped to the document.body (getByText etc)
* for (more tightly) scoped queries, we need to ```import``` the queries from the ```@testing-library/react```
* ```getByText``` can take a container element: ```getByText(container, "query string")```
* ```waitForElement``` takes a callback!

### Use of Queries / Roles /ARIA
* https://testing-library.com/docs/queries/about/#priority

### Some utility functions returned by render()
```javascript
import { 
  render, 
  cleanup, 
  waitForElement, 
  fireEvent, 
  prettyDOM, 
  getByText, 
  getAllByTestId, 
  queryByText, 
  getByAltText,
  queryByAltText,
  getByLabelText, 
  getByPlaceholderText, 
  findByText,
  getByDisplayValue
} from "@testing-library/react";
```

### Reducer testing:
```javascript
import { reducer, actions } from "./application.js";

it("throws an error with an unsupported type", () => {
  expect(() => reducer({}, {type: null})).toThrowError(/called with unknown action type/i);
});
```

* note that we're passing a function to expect
* This function is called by the test framework so that it can catch the error that is thrown.