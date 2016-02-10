# REST WELL WITH HAPI
## HELLO_HAPI
### Exercise 1 of 13

Create a hapi server that listens on a port passed from the command line and
replies with "Hello hapi" when an HTTP GET request is sent to / .

The workshop will execute requests against the server and verify the output.

---
## HINTS

Create a server that listens on port 8080 , if none is passed from the command
line, with the following code:
```javascript
    var Hapi = require('hapi');
    var server = new Hapi.Server();
    
    server.connection({
        host: 'localhost',
        port: Number(process.argv[2] || 8080)
    });
```
Routes are added via the route function:
```javascript
    server.route({path: '/', method:'GET', handler: anonOrYourFunction});
```
Handlers can be anonymous functions or separately declared (just like in
javascript :P), but all of them should have this signature:
```javascript
    function handler(request, reply) {
    
        // Request has all information
        // Reply handles client response
    
        reply();
    }
```
Calling the start function gets a server listening on the assigned port. Note
that a callback is required when calling start:
```javascript
    server.start(function () {
        console.log('Server running at:', server.info.uri);
    });
```
---
 * To print these instructions again, run: makemehapi print
 * To execute your program in a test environment, run: makemehapi run program.js
 * To verify your program, run: makemehapi verify program.js
 * For help run: makemehapi help


