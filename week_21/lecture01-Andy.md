# Andy Lindsey - Extra stuff on React

* Andy maintains this resource: http://project-resources.herokuapp.com/

# React Router 
* dynamically update URL
* simulate multipage app(?)
* ```npm react-router-dom```
* ```src/router```
* ```import { BrowserRouter as Router, Link, Route } from 'react-router-dom';```

```javascript

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';

const Main = () => {
  return(
    <Router>
      <nav>
        <Link to="/about">About</Link><br/>
        <Link to="/products">Products</Link><br/>
        <Link to="/">Home</Link><br/>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default Main;
```
* just use one Router component per app
* can use wildcard in links (```/products/*```)
```javascript
import {Link, Routes, Route} from 'react-router-dom';

const Products = () => {
  return (
    <div>
      This is the products component
      <nav>
        <Link to="/products/1">Product #1</Link>
        <Link to="1">Product #1 (relative link)</Link>
      </nav>
      <Routes>
        <Route path=":productId" element={<Product />} />
        <Route path="" element={<h2>Please choose from the list</h2>}/>
      </Routes>
    </div>
  )
}

export default Products;
```
* useParams gives us access to route parameters
```javascript
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Product = () => {
  const params = useParams(); //gives access to route params
  const navigate = useNavigate(); //allows programmatically navigating the app


  useEffect(() => {
    setTimeout(() => {
      navigate('/about');
      //can also go backwards/forwards in history by passing navigate an integer e.g. navigate(-1)
    }, 2000);
  }, []);

  return (
    <div>
      <h2>This is Product {params.id}</h2>
    </div>
  );
}
```

# Styled Components
```npm i styled-components```
* Allows us to style components using essentially inline styles
* styled is an object that has every possible Dom object as a method
* invoke a function like this is valid javascript: ``` console.log`` ```
* Create styled components outside of other components 
* Avoids leaking styles, encapsulates styles
```javascript
import styled from 'styled-components';

//Create a Header component with styles
const Header = styled.h1`
  color: blue;
  border: 2px solid lightgrey;
`;

const Paragraph = styled.p`
  //styles...
`

//Conditional styling
const Custom = styled.h2`
  color: ${ props => props.electric ? 'yellow' : 'darkgrey' };
  background-color: ${ props => props.electric ? 'firebrick' : 'turquoise' };
`

const FancyLookingComponent = () => {
  return (
    <div>
      <h2>Fancy Component</h2>
      <Header>Do I look good??</Header>
      <Paragraph>NOt as good as I do</Header>
      <Custom electric>I am fancy</Custom>
      <Custom >Not as fancy</Custom>
    </div>
  )
}
```
## Wrap component to style it
* Passes a prop called className to MyComponent
* In MyComponent: <div className={props.className}>...</div>

```javascript
const Wrapped = styled(MyComponent)`
  color: tomato;
`
```

# More Hooks

## useContext
* eliminates prop drilling
* almost replacing redux (external state store)
* create ```src/context```

* ```src/context/CountContext.js``` holds only the below:
```javascript
import { createContext } from 'react';
export default createContext();
```

* ```Parent.jsx```
```javascript
import {useState} from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

//Not itself a component but has a provider.
import CountContext from './CountContext';


const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
    This is the parent
    </div>
    <CountContext.Provider value={{ count, setCount }}> {/*ever child has now access to these */}
      <ChildOne />
      <ChildTwo />
    </CountContext.Provider>
  )
}

export default Parent;
```

* ```ChildOne.jsx```
```javascript

import CountContext form "./CountContext";
import { useContext } from 'react';

const ChildOne = () => {
  const { count, setCount} = useContext(CountContext);
  return (
    <div>
      This is ChildOne, the count is {count}.
    </div>
  )
}

```
* ```ChildTwo.jsx```: use setCount to increment


## useRef
* Attach references to DOM elements 
* Something like jQuery.focus() (needing a direct DOM update) is not as simple in React.


* ```src/reference/Focus.js```
```javascript
import { useRef } from 'react';
import { useState } from 'react';

const Focus = () => {
  const inputRef = useRef(); //just call it - no parameter; gives permanent reference
  const [searchTerm, setSearchTerm] = useState('');

  const setFocus = () => {
    inputRef.current.focus(); //inputRef.current holds the reference after rerender
  }

  return(
    <div>
      <h2>Focus Component</h2>
      <div>
        <input 
          ref={inputRef} 
          value={searchTerm}
          onChange{event => setSearchTerm(event.target.value)}
        />
        <button onClick={setFocus}>Set focus on input field</button>
      </div>
    </div>
  )
}

export default Focus;
```

* ```src/reference/StaleState.jsx```
* Stale State: hanging on to data from a previous render
* Happens when using async code

```javascript
import {useState, useEffect, useRef} from = 'react';

const StaleState = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef();
  countRef.current = count; //This eliminates the stale state problem 


  const launchAlert = () => {
    setTimeout(() => {
      alert(`The current count is ${countRef.current}`);
    }, 2200);
  }

  return (
    <div>
    Stale State
    <h2>Count: {count}</h2>
    <button onClick={() => setCount(count + 1)}>Click me!</button>
    <button onClick={launchAlert}>Launch Alert</button>
    </div>

  )
}

```

## Component Libraries
* Google search: react component library
* Most popular one: material ui (MUI)
* http://mui.com
* Ant design: http://ant.design
* React charts 
* Use libraries to speed up your process