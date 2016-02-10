# PROXIES
## Exercise 6 of 13

A proxy lets you relay requests from one server/service to another.

Create a server which listens on a port passed from the command line, takes any
requests to the path /proxy and proxies them to http://localhost:65535/proxy.

---
## HINTS

This exercise requires you to install the h2o2 module, which is a hapi plugin
for handling proxies. You'll need to register the plugin in your code in
order to use the proxy configuration:
```javascript
    var H2o2 = require('h2o2');
    
    server.register(H2o2, function (err) {
        if (err) throw err;
    });
```
The proxy key can be used to generate a reverse proxy handler.
```javascript
    handler: {
        proxy: {
            host: '127.0.0.1',
            port: 65535
        }
    }
```
-------------------------------------------------------------------------------
Background info: en.wikipedia.org/wiki/Proxy_server


* To print these instructions again, run: makemehapi print
* To execute your program in a test environment, run: makemehapi run program.js
* To verify your program, run: makemehapi verify program.js
* For help run: makemehapi help

