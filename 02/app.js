    var Hapi = require('hapi');
    var server = new Hapi.Server();
    
    server.connection({
        host: 'localhost',
        port: Number(process.argv[2] || 8080)
    });


    server.route({
	path: '/{name}',
	method:'GET',
	handler: handlerName
    });
    function handlerName(req, reply) {
        // Request has all information
        // Reply handles client response
        reply('Hello '+req.params.name);
    }


    server.start(function () {
        console.log('Server running at:', server.info.uri);
    });
