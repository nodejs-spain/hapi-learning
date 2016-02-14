var  Hapi = require('hapi')
    ,Path = require('path')
    ,Boom = require('boom')
    ,server = new Hapi.Server()

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.state('session', {
    ttl: 1000000,
    domain: 'localhost',
    path: '/',
    // isSecure: true,
    // isHttpOnly: true,
    encoding: 'base64json',
    // clearInvalid: false, // remove invalid cookies
    // strictHeader: true // don't allow violations of RFC 6265
});

var handlerCheck = function(req,res) {
    var response = ""
    var cookie = res.state.session
    console.log('cookie',cookie);
    if ('makemehapi' == cookie.key) {
        res({ user: 'hapi' })
    }else{
        res(Boom.unauthorized('Missing authentication'))
    }
}
var handlerSet = function(req,res) {
    // base64json
    // 10 ms
    // localhost
    session = { key: 'makemehapi' }
    res('cookie setted').state('session', {key:'makemehapi'})
}

server.route({
    path: '/check-cookie',
    method:'GET', 
    handler: handlerCheck,
    config: {
        state: {
            parse: true,
            failAction: 'log'
        }
    }
});
server.route({
    path: '/set-cookie',
    method:'GET', 
    handler: handlerSet,
    config: {
        state: {
            parse: true,
            failAction: 'log'
        }
    }
    
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});
