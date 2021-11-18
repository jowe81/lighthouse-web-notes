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

