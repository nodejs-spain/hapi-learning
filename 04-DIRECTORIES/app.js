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
    path: '/foo/bar/baz/{filename}',
    method:'GET',
    handler: {
        directory: {
            path: Path.join(__dirname, 'public')
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
