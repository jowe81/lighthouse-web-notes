# VueJS Tutorial
https://vuejs.org/tutorial
* data() returns an object with variables accessible by the component
* the methods object contains functionality for the component

## Data and input bindings

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

## Control flow
```html
<script>
export default {
  data() {
    return {
      awesome: true
    }
  },
  methods: {
    toggle() {
      this.awesome = !this.awesome
    }
  }
}
</script>

<template>
  <button @click="toggle">toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</template>
```

## Loops
* mutating the array or reassigning it will trigger a re-render
* unique key is required, as in React
```html
<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>    
    {{ newTodo }}
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }} {{ todo.id }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>
```

## Computed Properties:
```javascript
data() {

}, 
computed: {
    // ...
    filteredTodos() {
      return this.hideCompleted ? this.todos.filter((e) => !e.done) : this.todos;
    }
  },
methods: {...}
```

## Refs and Hooks: Mounted

* the named ```ref``` attribute will be accessible in this.$refs.name, after mounting the component
* the mounted() function is called when the component has mounted
* other lifecycle hooks: ```created```, ```updated```

```html
<script>
export default {
  mounted() {
    this.$refs.p.textContent = 'mounted!'
  }
}
</script>

<template>
  <p ref="p">hello</p>
</template>
```

## Watchers
* functions in the ```watch``` array are called when corresponding data (same variable name) changes

```javascript
export default {
  data() {
    return {
      count: 0
    }
  },
  watch: {
    count(newCount) {
      // yes, console.log() is a side effect
      console.log(`new count is: ${newCount}`)
    }
  }
}
```

## Child components
* like React
* props need to be declared 

```html
<script>
import ChildComp from './ChildComp.vue'

export default {
  components: {
    ChildComp
  },
  data() {
    return {
      greeting: 'Hello from parent'
    }
  },
  props:{ msg: String }
}
</script>

<template>
  <ChildComp :msg="greeting"/>
</template>
```
## Emits
* components can emit events to the parent component
* child declares an ```emit```
* To send, use ```this.$emit('emit-name', data)```

### ChildComp.vue
```html
<script>
export default {
  emits: ['response'],
  created() {
    this.$emit('response', 'hello from child')
  }
}
</script>

<template>
  <h2>Child component</h2>
</template>
```
### Parent

```html
<script>
import ChildComp from './ChildComp.vue'

export default {
  components: {
    ChildComp
  },
  data() {
    return {
      childMsg: 'No child msg yet'
    }
  },
  methods: {
    receiveResponse(msg) {
      this.childMsg = msg;
    }
  }
}
</script>

<template>
  <ChildComp @response="receiveResponse"/>
  <p>{{ childMsg }}</p>
</template>
```

## Slots
* Like React outlet?

### Parent
```html
<script>
import ChildComp from './ChildComp.vue'

export default {
  components: {
    ChildComp
  },
  data() {
    return {
      msg: 'from parent'
    }
  }
}
</script>

<template>
  <ChildComp>This will be displayed within SLOT element in the child component</ChildComp>
</template>
```

### Child
```html
<template>
  <slot>Fallback content</slot>
</template>
```