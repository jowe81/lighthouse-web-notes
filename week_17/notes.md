# React Project: Interview Scheduler
## Tools
* If you want to manually test your components in isolation: use _Storybook_.
* If you want to run your entire application in development mode: use _webpack-dev-server_.
* If you want to run unit or integration tests from the command line: use _Jest_.
* If you wan to run automated end-to-end tests in the browser: use _Cypress_.

## Module bundler (webpack):
* Embed environment variables into the code at build time
* Remove code that does not ever get run
* Use features of JavaScript that aren't standard

## Storybook, button
```javascript
<Button danger={true}>Cancel</Button>
```
can be shortened to
```javascript
<Button danger>Cancel</Button>
```
because JSX considers that the existence of the prop name is enough to determine it's truthy.
* Button text is not specified by using another prop, but ```props.children``` is used instead.

## Component Creation Process
* Create a file with our component name
* Create & Export the component function
* Add the base HTML in the return statement of our component
* Create & Import a CSS / SCSS file holding the style of our component
* Write stories for Storybook to render our component in isolation
* Refactor the hardcoded content to use props & state

* The process we have to go through to get data to lower parts of the React Component tree is referred to as prop drilling (or threading).