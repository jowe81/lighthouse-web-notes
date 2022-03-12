# React Review (Eduardo)
* NPM init: create package.json file in current folder
* CORS: ```app.use('*')``` or ```app.use([array of domains])``` allows requests originating from specified domains
* Express, can do:
  ```javascript
  const app = require('express')()
  ```
  instead of
  ```javascript
  const express = require('express')()
  const app = express();
  ```

## Class based component:
```javascript
//Class based: get this.props
class TodoItem extends React.Component {
  render() {
    const task = this.props.task;
    return <div>{task} (class based)</div>
  }
}
```
