# Hooks - Sandeep

* Any functionality outside your components gets "hooked in" with a hook
* for example API interactions
* Abstract outside logic away from the components
  * it takes in something and gives back something
* Package pieces of logic and reuse them (DRY code)
* If you master React hooks, you'll be 90% better than the avg React developer
* Library of popular custom hooks: http://github.com/react-hookz/web/tree/master/src

## APIs:
* http://rickandmortyapi.com
* Google 'awesome APIs' for all kinds
* request states: pending, fulfilled, error
* Always use useEffect for things with side effects
  * dependency array:
    * empty array: run once
    * no array: run always
    * items in array: run when any item changes
  * Return optional callback for cleanup
* response.json() is chainable to fetch

## Custom Hook
* src/hooks
* name it ```useX```
* define single function with same name as file, export as default

* Array vs Object destructuring: you can rename your items

* To test hook, must use react-hooks-testing-library

* Jest cheatsheet
* http://devhints.io/jest