# Week 5, Module 2, Networking
* MAC address length: 48 bits/ 6 bytes

Net module: ```const net = require('net)```

```javascript
const server = net.createServer();

server.listen(3000,() => {
  console.log("Server listening on port 3000!");
});

server.on('connection', (client) => {
  client.write('Hello there');
  client.on('data', (data) => {
    client.setEncoding('utf8');
    console.log('Message from client: ', data.toString());
  });
});
```

```javascript
const net = require('net');
const conn = net.createConnection({
  host: '127.0.0.1',
  port: 3000,
});

conn.setEncoding('utf-8');

conn.on('data', (data) => {
  console.log('Server says: ', data);
  conn.write('Hello back there, server!');
});
```

### Reminder of Property Value Shorthand in ES6
* Create two key-value pairs in exports object (values must match key names)```module.exports = { function1, variable1 }``` 
* Assign in requiring file: ```const { function1, variable1} = require(...);```

## HTTP
* User-agent is usually a web browser, but can be a bot, or anything else, acting on behalf of the user
* Server can be a single machine (and is that, logically) but typically an array of machines (load balancing), or some other software entity that constructs the response required
* HTTP/1.1 host header allows multiple servers to share the same IP
* Proxies: transparent (non-content altering) or non-transparent (altering content)
* Proxies may do a multitude of things, e.g.
  * caching
  * filtering
  * load balancing
  * authentication
  * logging
* HTTP: simple, extensible, stateless but not sessionless
* Controllable with HTTP:
  * Caching
  * Relax origin constraint
  * Authentication (www-auth, or cookies)
  * Proxy and tunneling
  * Sessions
* HTTP/2 not human readable: frames
* HTTP Verbs: GET POST PUT DELETE (+5 others)
* A URL has
  * protocol
  * host
  * port
  * path
  * query parameters
  * anchor
* HTTP Response has
  * status code
  * body
* Important status codes
  * 200 OK
  * 201 OK and resource created
  * 404 not found
  * 500 server error
* body can contain anything, often html or JSON
* HTTP headers: key-value based

## Unrelated: look for files with matching content
```bash
grep -rnw '/path/to/somwhere' -e 'pattern'
```
`r` - recursive
`n` - line number
`l` - just give file names of matching files
`w` - match entire word (regex)
`e` - pattern (regex)

## JSON
* JavaScript Object Notation
* Subset of JS language
* keys must be double-quoted strings
* serialization: transform to string - ```JSON.stringify()```
* deserialization: parse from string - ```JSON.parse()```
* ```JSON.parse();``` fails with syntax error if the provided string is not valid JSON
* Content-type response header for JSON is typically ```application/json; charset=utf-8``` (check ```curl -i ipinfo.io```)
* Douglas Crockford, discoverer of JSON: JSON will never change; there's no version number or mechanism to extend it. It may be replaced one day, but even then JSON will still work.

## API
* Application Programming Interface
* Set of requirements that govern how apps talk to each other
* Widespread availability of APIs made modern web experience possible
* REST: Representational STate Transfer (http)
* https://www.programmableweb.com/
* POSIX (Portable Operating System Interface): set of standards for compatibility between OSes.

## Chai assertion 
* ```assert.isNotEmpty(target)``` ensures target has data. Not undefined, null, not an empty string or empty array.



