# REST WELL WITH HAPI
## HANDLING
### Exercise 3 of 13

Create a server which responds to requests to / with a static HTML file named
index.html containing the following:
```
    <html>
        <head><title>Hello Handling</title></head>
        <body>
            Hello Handling
        </body>
    </html>
```
---
## HINTS

This exercise requires you to install the inert module, which is a hapi plugin
for serving static files and directories. You'll need to register the plugin in
your code in order to serve static files:
```
    var Inert = require('inert');
    
    server.register(Inert, function (err) {
        if (err) throw err;
    });
```
You can declare handlers as objects instead of functions. The object must
contain one of the following: file (requires inert plugin), directory
(requires inert plugin), proxy (requires h2o2 plugin), or view (requires
vision plugin).

For example, handler can be assigned an object with the file key:
```
    handler: {
        file: "index.html"
    }
```
Be careful: in practice, you'll need to provide an absolute path to an
index.html file in your program's directory. To achieve this, you'll probably
need the path core module, its join() function, and the __dirname global
variable.


 * To print these instructions again, run: makemehapi print
 * To execute your program in a test environment, run: makemehapi run program.js
 * To verify your program, run: makemehapi verify program.js
 * For help run: makemehapi help


