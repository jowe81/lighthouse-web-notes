# VueJS Tutorial
https://vuejs.org/tutorial
* data() returns an object with variables accessible by the component
* method() returns an object with functionality for the component

```javascript
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    toggle() {
      // ...
    },
    onInput(e) {
      this.text = e.target.value; 
    }
  }
}
```
```html
<template>
  <input :value="text" @input="onInput" placeholder="Type here">
  <!-- or (shorthand for two-way binding): -->
  <input v-model="text">
  <p>{{ text }}</p>
</template>
```