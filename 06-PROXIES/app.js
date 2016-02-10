var  Hapi = require('hapi')
    ,server = new Hapi.Server()
    ,H2o2 = require('h2o2');


server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(H2o2, function (err) {
    if (err) throw err;
});
var handler = {
    proxy: {
        host: '127.0.0.1',
        port: 65535
    }
}

server.route({
    path: '/proxy', 
    method:'GET', 
    handler: handler
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});
