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
        host: 'www.google.com'
        ,port: 80
    }
}

server.route({
	path: '/{path*}', 
	method:'GET', 
	handler: handler
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});
