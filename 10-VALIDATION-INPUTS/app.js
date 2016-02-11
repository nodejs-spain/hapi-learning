var  Hapi = require('hapi')
    ,Path = require('path')
    ,Joi = require('joi')
    ,server = new Hapi.Server()

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

var handler = function(req,res) {
    res('login successful')
}

var validate = {
    payload: Joi.object({
        isGuest: Joi.boolean().required(),
        username: Joi.string().when('isGuest', { is: false, then: Joi.required() }),
        password: Joi.string().alphanum(),
        accessToken: Joi.string().alphanum()
    }).options({ allowUnknown: true }).without('password', 'accessToken')
}
server.route({
    path: '/login',
    // Importante el POST, no GET
    method:'POST', 
    handler: handler,
    config: {
        validate: validate
    }
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});
