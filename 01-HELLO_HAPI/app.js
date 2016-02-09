    var Hapi = require('hapi');
    var server = new Hapi.Server();
    
    server.connection({
        host: 'localhost',
        port: Number(process.argv[2] || 8080)
    });


    server.route({path: '/', method:'GET', handler: handlerGet});


    function handlerGet(request, reply) {
    
        // Request has all information
        // Reply handles client response
    
        reply('Hello hapi');
    }

    server.start(function () {
        console.log('Server running at:', server.info.uri);
    });
