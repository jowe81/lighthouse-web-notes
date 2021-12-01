# Week 7
## Password Storage
* Passwords shouldn't be encrypted, but should be hashed
* Encryption can be reversed (decryption), hashes can confirm whether a given input matches the hashed password, without having to have access to the actual password.

## BCrypt
* For now, use v2.0.0 to avoid issues with later versions
  * ```npm install -E bcrypt@2.0.0```
* ```bcrypt.hashSync(plaintext)``` returns the hash to store
* ```bcrypt.compareSync(plaintext, hash)``` is used to check password at login time

## Object.values()
* returns array of object values in same order as for..in loop

## REST
- Set of conventions for accessing and manipulating resources over HTTP
- CRUD: Create, Read, Update, Delete
- BREAD: Browser, Read, Edit, Add, Delete (Reading is split into browsing/searchin, and getting a specific item)

### Typical routes for the resource User
  - ```GET /users``` Get list of users (browse/search)
  - ```GET /users/:id``` Get a specific user (read)
  - ```POST /users``` Create a new user (add)
  - ```PUT /users/:id``` Update a user (edit)
  - ```DELETE /users/:id``` Delete a user (delete)

Two more typical routes:
  - ```GET /users/new``` Get the form for creating a new user
  - ```GET /users/:id/edit``` Get the form to edit a user