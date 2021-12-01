# Promises (Sandeep)
* address "callback hell" and easy error handling
* promise is pending, then resolves or rejects
* can write wrapper around callback based code to "promisify" it
* Node >15 has module ```readline/promises```
* ```.then()```, ```.catch()```, ```.finally()```
* Resolve an array of promises: ```Promise.all(arrayOfPromises).then(values)```
* Resolve an array of promises but do something after the first (fastest) returns: ```Promise.race(arrayOfPromises).then(value)```