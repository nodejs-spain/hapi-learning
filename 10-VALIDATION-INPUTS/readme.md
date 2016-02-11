# VALIDATION USING JOI OBJECT
## Exercise 10 of 13

By using a Joi object we can specify highly customizable validation rules in
paths, request payloads, and responses.

Create a server exposing a login endpoint and reply with "login successful" when
an HTTP POST request is sent to /login.

The endpoint will accept following payload variables:

isGuest       (boolean)
username      (string)
accessToken   (alphanumeric)
password      (alphanumeric)

Validation should consist of following conditions:

1. if isGuest is false, a username is required.
2. password cannot appear together with accessToken.
3. if any other parameters than specified above are sent, they should pass the validation.

-------------------------------------------------------------------------------
##HINTS

Create a server that listens on port 8080 with the following code:
```javascript
    
    var routeConfig = {
        path: '/a/path/',
        method: 'POST',
        handler: myHandler,
        config: {
            validate: {
               payload: Joi.object({
                    username: Joi.string(),
                    password: Joi.string().alphanum(),
                    accessToken: Joi.string().alphanum(),
                    birthyear: Joi.number().integer().min(1900).max(2013),
                    email: Joi.string().email()
               })
               .options({allowUnknown: true})
               .with('username', 'birthyear')
               .without('password', 'accessToken')
            }
        }
    }
```
All route information can be found here:

    file:///usr/local/lib/node_modules/makemehapi/node_modules/hapi/API.md

Joi information can be found here:

    file:///usr/local/lib/node_modules/makemehapi/node_modules/joi/README.md


* To print these instructions again, run: makemehapi print
* To execute your program in a test environment, run: makemehapi run program.js
* To verify your program, run: makemehapi verify program.js
* For help run: makemehapi help
