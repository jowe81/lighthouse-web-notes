## Object and array destructuring
```javascript
//Ex 1: Obj destructuring
const object = { prop1: "green", prop2: "red"}l
let { prop1, prop2 } = object; //green, red

//Ex 2: Arr destructuring
const prices = [100, 200, 500];
let { hundred, twohundred } = prices;

//Ex 3: Combine both
const products = [
  drink = {
    id: 1,
    name: 'Pepsi',
    price: 25,
  },
  snack = {
    id: 2,
    name: 'Popcorn',
    price: 15,
  }
]

let [ first, { name, price } ] = products;

//Ex 4
let {name, race, id } = animal;

//Destructure while receiving parameters (animal object in this case)
const someFunction = ({name}) => {
  
}
```

## Spread Operator
```javascript
const animals = ['chicken', 'dog', 'cat', 'turtle'];
const pets = ['weasel', 'lizard', ...animals];

const human = {
  name: "Eduardo",
  height: 1.78
};

const owner = { id: 1, ...human };
```

## Rest... operator (rest of arguments)
```javascript
function human(id, ...theRestOfTheArgs) {
  { name, age } = theRestOfTheArgs;
}

human(5, "Eduardo", 35);
```

## Object property shorthand

```javascript
function human(id, name, age) {
  let person = {
    weight: 75,
    name,
    age,
  }
}
```

## Computed Properties
```javascript
const prop1 = "gender", prop2 = "name", prop3 = "age";

const human = {
  [prop1]: "female",
  [prop2]: "Jess",
  [prop3]: 41,
}

```

## Storybook

* to install: ```npx sb init```
```javascript
import Animal from '../components/Animal';
import { storiesOf } from '@storybook/react';

stories('Animal', module).add('Just rendering', () => {
  const animal = { id: "ABC", name: "Toby", race: "dog" };
  return (
    <Animal {...animal}/>
  );
});

stories('Animal', module).add('Another story', () => {
  const animal = { id: "ABC" };
  return (
    <Animal {...animal}/>
  );
})

```

## Controlled components
```javascript
import { useState } form "react";

export default function AddAnimal() {
  const [animal, setAnimal] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimal({
      ...animal,
      [name]: value //Overwrites data from ...animal
    })
  }

  return(
    <form>
      <input type="text" name="name" value={animal.name}>
      <input type="text" name="race" value={animal.race}>
      <input type="submit" value="Save">
    </form>
  )

}

```