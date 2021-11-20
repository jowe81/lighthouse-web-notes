# Promises
* Wrapping
* Thening
* Catching
* Chaining

* Fulfilled (resolved)
  * resolves only once (with value)
  * subsequent .then/.catch function will receive the value given to resolve() as an argument
  * if promise is passed, it will execute first and the value it resolves to will be passed to the next link in the chain
* Rejected
  * rejects only once
  * subsequent .catch function will receive the value given to reject() as an argument
  * if promise is passed, it will execute first and the value it resolves to will be passed to the next link in the chain
* Pending
* Settled

### Error HAndling
```javascript
get('example.json')
.then(resolveFunc)
.catch(rejectFunc)
```
is equivalent to
```javascript
get('example.json')
.then(resolveFunc)
.then(undefined, rejectFunc)
```

### Check up on
* Service Worker API (create apps that work offline?)
* Fetch-API (natives promises to simplify XML HTTP requests)

Promises on main thread and can potentially be blocking.
Think of them as try/catch wrappers around async code.

# Clean Code
## Functions
* use default parameter synax instead of mutating function arguments: ```function handleThings(opts = {}) {};```
* look up ... (rest syntax?)
* never mutate or reassign parameters
* trailing commas on last item in multiline signatures, declarations are good
* use arrow notation for anonymous callbacks
* refactor early, refactor often (change code without changing what it does, for better legibility)

# cURL
* make HTTP request from command line and output response
* argument ```-i``` will output response headers
* redirect to file: ```curl www.example.com > index.html```
* ```-o```, ```-O``` arguments will also store to file; the latter will use the filename in the URL
* can chain ```-O URL1 -O URL2 ...```
* follow location headers (redirects): ```-L```
* pass HTTP Auth creds: ```curl -u username:password URL```
* can use to download via FTP
* can use to upload via FTP: ```curl -u ftpuser:ftppass -T myfile.txt ftp://ftp.testserver.com```
* ```-v``` verbose, ```-trace``` even more verbose
* can be used to send mail via SMTP

# Unicode, Character Encoding, UTF-8
* Read: [Joel on Software, on character encoding](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)
* Bottom line: use UTF-8 always, and
* Use ```<meta http-equiv="Content-Type" content="text/html; charset=utf-8">``` on EVERY html page

# DNS
* Record types:
  * A - IPV4 name
  * CNAME - canonical name (Alias)
  * MX - Mail exchange
  * NS - Name server for zone
  * AAAA - IPV6 name
* ```nslookup```
  * set type = ... (Defaults to A)
  * example.com
  * prints out the found records

# Express
* built on node http module
* originally Canadian
* route parameters:
  * ```/path/:param```: in the request handler, ```param``` will be available at req.params.param
* Routes should be ordered from most specific to least specific
* ```res.redirect(URL)```!

# Templates (EJS)
* files that define presentation separately from logic (javascript separate from HTML)
* separate different parts of an HTML doc into different files to keep it managable
* EJS: Embedded JavaScript (template engine)
* Set templating engine in express: ```app.set('view engine','ejs');```
* Then use ```res.render('path/to/view');``` to render corresponding view file ```views/path/to/view.ejs```
* Pass data like so: ```res.render(path,data);```
* Default views directory is ```views```
  * Can put ```partials``` and ```pages``` as subdirectories
* Inside an .ejs template, include _partials_ like so: ``` <%- include('RELATIVE/PATH/TO/FILE'), [data] %>```
  * Partials have access to all data passed to the main view file
  * Partials filenames should start with an underscore ```_head.ejs```
* Execute code without rendering to page: ```<% ... %>```
* Render a variable: ```<%= variable %>```
* Loop over data/use control structures: 
```javascript
<ul>
  <% mascots.forEach(function(mascot) { %>
    <li>
      <strong><%= mascot.name %></strong>
      representing <%= mascot.organization %>,
      born <%= mascot.birth_year %>
    </li>
  <% }); %>
</ul>
```
# HTTP verbs and CRUD
* GET: Read
* POST: Create
* PUT: Update
* DELETE: Delete
* Safe methods do not modify server state in any way (GET)
* Idempotent methods do not further modify server state if executed more than once (POST, DELETE)

# cURL
* include headers: ```-i```
* headers only: ```-I```
* follow redirect: ```-L```