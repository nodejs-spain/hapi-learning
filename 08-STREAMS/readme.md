# STREAMS
## Exercise 8 of 13

Create a hapi server which responds to GET requests to / by streaming a
ROT13'd version of a file that contains:

    The Pursuit of Hapi-ness

Output should look like:

    Gur Chefhvg bs Uncv-arff

---
## HINTS

### Stream

The hapi handler reply function can accept a stream as an argument.

### File

The fs module has a createReadStream(pathToFile) function that would be useful.

### Simple ROT13

In this exercise, we'll be using rot13-transform. To install rot13-transform:

    npm install rot13-transform


* To print these instructions again, run: makemehapi print
* To execute your program in a test environment, run: makemehapi run program.js
* To verify your program, run: makemehapi verify program.js
* For help run: makemehapi help

