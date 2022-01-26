# SQL from our Apps - Charlotte

## PSQL commands
* \conninfo
* \du 
* \l //List databases
* \c - labber //change to user labber
* \c database [user] //change db and user together

* Create user:
```sql
CREATE ROLE labber LOGIN SUPERUSER PASSWORD 'labber';
```
Node:
* dotenv, express, pg
* make db reset script
```json
"scripts": {
  "db:reset": "psql -U labber -d tinyapp < /path/to/file.sql && [next command]"
}
```
* connect: make ```connction.js```, get values from 
```\conninfo``` in psql

connection.js
```javascript
require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER, //labber
  host: process.env.DB_HOST, //localhost ...etc
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

module.exports = pool;

```
server.js
```javascript
const pool = require('./connection');
```
* Use dotenv package (environment variables) to hide sensitive information from the public
* gitignore ```.env```

## App Structure
src/database/connection.js
src/database/seedfiles...
src/routes/userRoutes.js
src/routes/urlRoutes.js