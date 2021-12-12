# JQuery
# Browser Object Model
* Sits on top of the DOM (which is at window.document)
* ```window``` is the global object (so no need to explicitly reference)
* window
  * location
    * ```.href```
  * navigator
    * information about the browser
    * ```userAgent```
  * document 
  * screen
    * display information
    * orientation
  * history
  * event
  * frames
* in devtools, $0 refers to currently selected DOM element
* in the devtools console, autocomplete is a great way to look up API functions
## document.querySelector()
* use css selectors instead of ```getElementByID``` or ```getElementByTagName```
* returns one element; to get all matches ```use document.querySelectorAll()```

## VSCode Live Server Extension
* spin up a quick http server that listens for changes in the file, and updates the browser

## See mdn docs for HTMLElement object methods/properties

## ```this```
* ```this``` inside of event listener refers to the HTML element - _do not use ```() => {}```!_
