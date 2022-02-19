# React (Eduardo)
* Developed by Facebook, then turned into open source
* UI Library - not focused on logic

## NPX: package runner tool
* ```npx create-react-app my-app```
* Run the create-react-app package (from the cloud) without installing/storing it

## Framework vs Library
* React is very light, just a few files (react and react-dom)
* Angular is a Framework - more files, big platform, lots to setup

## Declarative vs Imperative
* Declarative programming expresses logic of a computation without describing control flow details
* Imperative programming: step by step instructions


* Babel: Transpile code for cross browser compatibility
* ```package-lock.json``` sorts out child dependency conflicts


## Event handlers
* ```<div onClick={functionName}>```, the handler function will be passed an ```event``` object
* onClick: event object gives access to mouse position, timestamp etc.
* onChange: event object gives access to name and value of the input element
* onSubmit: event object gives access to form content, and preventDefault()
