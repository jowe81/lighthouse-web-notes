# Week 8 Front End

## Chrome Dev Tools
* Apple + Alt + J
* Sources Panel: file navigator, code editor, and JS Debugging page
  * Event Listener Breakpoints (eg. onClick)
  * DOM modification breakpoints
  * Manual breakpoints: ```debugger``` keyword
  * Watch expressions during debugging
  * Step through code line by line, to or through the next function call
  * Edit code directly in the code editor. Apple+S will save modifications (until reload)
* Rendering/animations tab - paint flash: indicate areas that are repainting (bad for performance)
* CSS Prototyping with DevTools
  * Add/remove classes
  * Copy styles from anywhere!
  * Get Screenshots of elements or areas of the page

### Events in the DOM
* Events have three phases: _capturing_, _target_, and _bubbling_.
* Usually, we attach listeners/handlers to the bubbling phase
* It's possible to listen during the capturing phase (HTML -> BODY -> rest of DOM tree -> Target element) by using ```addEventListener(event, handler, {capture:true})```
* The event object holds
  * ```event.target``` (the element on which the handler was initially triggered; to which it is attached)
  * ```event.currentTarget``` (the element on which the current handler sits, also ```this``` inside the handler)
* Some events don't bubble (eg. ```onFocus```)

### jQuery Events
* Couple ways to bind to an event
  * ```$("#el").on('click', () => {})```
  * ```$("#el").bind('click', () => {})```
  * ```$("#el").click(() => {})``` short version for click events
  * ```$("body").on("click", "button", () => {})``` listen to click events on ALL buttons inside ```<body>```
  * ```$(element).on()``` is the preferred option (functionally equivalent ones are mapped to it internally
* jQuery Event properties/methods:
  * ```preventDefault()```
  * ```stopPropagation()```
  * ```stopImmediatePropagation()```
  * ```originalEvent```
* If both, ```preventDefault()``` and ```stopPropagation()``` are necessary, can return false instead to achieve both with less code

  
### Using event delegation
* Bind to the closest parent element that allows to handle all events we're targeting (e.g. a ```<div>``` holding a table, when targeting specific rows or cells that are being added via ajax or otherwise dynamically manipulated)


## FlexBox
### Display property
* ```block```: element takes up entire space of the parent element (has margin, padding) (div, headers, section, footer, article, p, ul, ol, nav)
* ```inline```: element takes up only as much space as it needs to display content - doesn't automatically create a new line (span, em, strong, a)
* ```inline-block```: element combines both. Inline element with margin and padding. (button, img only)
* ```flex```: parent for flex items

### Parent properties
* ```flex-direciton``` defines main axis: ```row``` (horizontal, default) or ```column``` (vertical)
* ```justify-content``` spacing/positioning along the main axis
* ```align-items``` same for cross axis
* ```flex-wrap``` Wrapping along main axis
* ```align-content``` similar to justify-content, but for rows (cross-axis)

### Child properties
* ```order``` self-explanatory (give integer)
* ```flex-grow``` defines how much space the item should take up relative to the others
* ```flex-shrink``` opposite of flex-grow
* ```align-self``` like align-items but just for this element


## Fonts:
* fonts.google.com

### em
* relative to font-size of parent (multiple)
* if x is the font-size of the parent, then 1em is x

### Font-Awesome and CDNJS
* Libraries like font-awesome (icons) and others can be tied in viw cdnjs.com

## CSS:
* ```.parent > .direct_child```
* ```.parent .all_matching_descendants```
* ```.parent * ``` (All descendants)

### Pseudo classes 
* ```selector:hover {}```
* ```selector:link {}```
* ```selector:visited {}```
* ```selector:focus {}```
* ```selector1, selector2 {}``` define styles for multiple selectors

* ```em``` multiples of element's orig font-size
* ```rem``` multiples of root element's font-size
* ```vw```, ```vh``` viewport width/height
* ```vmin```, ```vmax``` viewport: whichever is greater

### Precendence/ Cascade
* Categories: inline styles (strongest), IDs, classes, attributes, elements (weakest)
* Greater specificity trumps lesser specificity
* In case of identical specificity, the last defined style takes precedence
* Order:
  * ```!important``` has greatest precedence but should be avoided
  * inline style
  * regular styles be selector specificity and declarataion order on identical spicificity

### Media queries
* ```@media print {}```
* ```@media screen and (min-width: 480px...) {}```
* Media queries can include these features: width, height, device-width, device-height, orientation, aspect-ratio, device-aspect-ratio, color, color-index, monochrome, resolution, scan, grid. Most of these features can be prefixed with min- or max-.
* Viewport meta: ```<meta name="viewport" content="width=device-width; initial-scale=1.0">```

## Forms
* POST requests from forms should use ```<form enctype="Content-Type: application/x-www-form-urlencoded">```
* URL encoded:
  * Key value pairs ```key=value```, concatenated with ```&```
  * non-alphanumeric chars are replaced with percent-encoding
* For search-forms, use ```GET```!
* Buttons linking elsewhere, even in a form, should use ```<a>``` (which can be styled as a button)
  
## CSS Variables
* declare a variable like this
```css
:root {
  --varName: #abcdef;
}
```
* use it like this
```css
selector {
  color: var(--varName);
}
```

## Client Javascript
* Ways to include: inline, ```<script>``` tag, external script. Avoid inline.
* ```<link rel="stylesheet" type="text/css" href="" >```
* Scripts should be at the end of the page; as the browser renders html and executes JS as it progresses through the source (if there was an ```alert()``` in a script at the top of tha page, the page wouldn't render until it's done with)

## DOM interaction with JS only
* ```document.addEventListener("click", () => {});```
* ```const div1 = document.getElementById("div-one");```
* Bunch of events get fired when typing in textarea: ```input```, ```keydown```, ```keypress```, ```keyup```
* ```keydown```/```keyup``` will get modifier keys (```keypress```, ```input``` will not)

## .bind(): Set JS execution context
* creates a new function that, when called, has its this keyword set to the provided value (example from mdn docs)
```javascript
const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
```

## Useful Events
* A bunch about events: https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/
* ```load``` fires on any resource that has finished loading (including dependent resources)
* ```beforeunload``` fires before browser leaves the page
* ```error``` fires when a resource fails to load (can respond, e.g. by hiding the resource) _BUT must use inline script here!_
* ```blur``` Opposite of focus (when element loses focus)
* ```keyup``` fires AFTER the value (text) in the textarea or input has changed (unlike ```keypress```)
* ```change``` fires after the element loses focus (not after each keystroke)

# JQuery
* ```$(form).serialize()``` turns form data into querystring encoded string