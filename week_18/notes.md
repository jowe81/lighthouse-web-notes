# Scheduler API
## Hooks
* ```useEffect```, ```useState``` etc. must not be called conditionally, but always at the top of the component function.
* Can call hooks only from inside React components
* The method that gets passed to the hook must return ```undefined``` or a function (at least for ```useEffect```, where the function will be used for side effect cleanup). Best to always declare as multiline function.
* ```useEffect``` lets us run things conditionally on state (or prop) changes. Pass the state(s)/prop(s) that we depend on as an array as a second argument like so:  ```useEffect(() => { fetchResults(term); ... },[term])```
* Full example from compass:
  ```javascript
  function LiveSearch(props) {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);

    useEffect(() => {
      fetch(`/search?term=${term}`).then(setResults);
    }, [term]);

    return (
      <>
        <SearchBar value={term} onChange={setTerm} />
        <Results results={results} />
      </>
    );
  }
  ```
* Class based components work differently (componentDidMount, componentDidUpdate, componentWillUnmount)
* Requests to an API server are considered a side effect of rendering a component. Manage it with ```useEffect```
* When a component does not have any dependencies, but we only want it to run once, we have to pass useEffect an empty array (to avoid inifite loop).

## State -> prev
* setState() can take either a value or a callback that will be executed and the value that it returns will be set as the state. This callback has a parameter, and by convention, we call this parameter ```prev```, which holds the value of the state BEFORE setState was triggered by react. [and not at the time the effect was created!]

## Effect Cleanup
* return a cleanup function from the function that gets passed to ```useEffect```.
```javascript
useEffect(() => {
  if (likes > 0) {
    const timeout = setTimeout(() => setLikes(prev => prev - 1), 1000);
    return () => clearTimeout(timeout); // clears the timer set above
  }
}, [likes]);
```
* timers, event listeners, socket connections are examples of effects that usually need cleanup

## Custom Hooks

* Put custom hooks in src/hooks (one per file)

```javascript
import { useState } from "react";
function useControlledInput(initial) {
  const [value, setValue] = useState(initial);

  return {
    value,
    onChange: (event) => setValue(event.target.value)
  };
}
```

## Optimistic via pessimistic UI rendering
* Optimistic UI doesn't wait for API response to indicate success to the user
* Depending on context, optimistic UI may be appropriate (if there is a low cost to a failure such as posting or liking content on social media). In other cases (bank transfers, automation...) pessimistic UI (traditional flow) is called for.
* https://medium.com/@duncandevs/ui-rendering-optimistic-vs-pessimistic-e8e0f4df264
