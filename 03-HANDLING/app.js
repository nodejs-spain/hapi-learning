var Hapi = require('hapi')
var server = new Hapi.Server()

var Inert = require('inert')
var Path = require('path')

server.register(Inert, function (err) {
    if (err) throw err;
});

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});


server.route({
    path: '/',
    method:'GET',
    handler: {
        file: Path.join(__dirname,'views','index.html')
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
    console.log('Path.join : ',Path.join(__dirname,'views','index.html'))
});
