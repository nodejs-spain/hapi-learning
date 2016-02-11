var  Hapi = require('hapi')
    ,Path = require('path')
    ,Joi = require('joi')
    ,server = new Hapi.Server()

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

var handler = function(req,res) {
    res('chicken!')
}

server.route({
    path: '/chickens/{breed}', 
    method:'GET', 
    handler: handler,
    config: {
        validate: {
            params: {
                breed: Joi.string().alphanum().min(3).max(30).required()
                // with: Joi.string().required(),
                // parameters: Joi.string().required()
            }
        }
    }
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});
