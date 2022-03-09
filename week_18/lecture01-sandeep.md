# Immutable Update Patterns

* Never modify state directly
* Always make copy
* Then modify
* Then update
* Be very careful about arrays and objects, when passing things by reference
* Always use previous state (prev) to update when batching state updates

```javascript
const [rockets, setRockets] = useSatet(listOfRockets);

const arrayOf Roockets = Object.values(rockets)

const refuleRocket = (id) => {
  const updatedRockets = { ...rockets };
  const updatedRocket = { ...updatedRockets[id]};

  updatedRocket.lastRefuleDate = new Date();
  updatedRockets[id] = updatedRoecket;
  setRockets(updatedRockets);
}
```

## Planning app process
* Draft data structures
* Draft HTML structures
- body
  - header
    - h1 "rocket station"
  - section
    - 
* Draft Component structures
- App
  - Header
  - RocketList
    - Rocket
  - RefuelAllButton

## VSCODE:
* React snippets

* When making lists in react always use unique and non-changing keys (not array index!)
* Use destructuring of props at head of component -> easy to read list of props

## Styling
* can pass style as object in jsx: ```<article style={{bgcolor:'black'}}>...</article>```