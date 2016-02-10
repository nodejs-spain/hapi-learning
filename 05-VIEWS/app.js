'use strict';
var  Hapi = require('hapi')
    ,Path = require('path')
    ,Vision = require('vision')
    ,server = new Hapi.Server()

server.register(Vision, function (err) {
    if (err) throw err;
});

server.views({
    engines: {
        html: require('handlebars')
    },
    path: Path.join(__dirname, 'templates')
});

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});


server.route({
    path: '/',
    method:'GET',
    handler: {
        view: 'index.html'
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
