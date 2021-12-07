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


  

