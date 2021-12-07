# Security and Real World HTTP Servers
### Sandeep

* Security should be as much of a focus as UI development or backend development (the app itself)
* Cross Site Scripting: type simple HTML in an input box
* Passwords should be hashed
* Hashing is one way (can't decrypt)
* MD-5: Checksum (check integrity of file, for example - make sure it hasn't been tampered with)
* SHA256, SHA512
* Encryption:
  * Plain text + key -> Algorithm -> Cipher
  * Cipher + key -> Algorithm -> plain text
* Encryption process uses key
* Hashing process uses salt to randomize value

### Issue 3: HTTP/HTTPS
* Cookies can be stolen
* Transport Layer

### Review: Restful API conventions
* REST is a pattern/convention to organize URL structure of a webapp
* Resources based (DELETE /rockets/:id/delete)
* Use http verbs

### cookie-session
* set cookies by simply setting properties on ```req.session```
* clear all cookies by ```req.session = null```
