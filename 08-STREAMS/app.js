var  Hapi = require('hapi')
    ,Path = require('path')
    ,Rot13 = require("rot13-transform")
    ,Fs = require('fs')
    ,server = new Hapi.Server()

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

var handler = function (req, res) {
    res(
        Fs.createReadStream(Path.join(__dirname,'text.txt')).pipe(Rot13())
        )
}

server.route({
    path: '/', 
    method:'GET', 
    handler: handler
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});
