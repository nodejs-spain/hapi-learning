var  Hapi = require('hapi')
    ,Path = require('path')
    ,Vision = require('vision')
    ,server = new Hapi.Server()

server.register(Vision, function (err) {
    if (err) throw err;
});
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.views({
    engines: {
        html: require('handlebars')
    },
    relativeTo: __dirname,
    helpersPath:'helpers',
    path: 'templates'
});

var handler = {
    view: 'index.html'
}

server.route({
    path: '/', 
    method:'GET', 
    handler: handler
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});
