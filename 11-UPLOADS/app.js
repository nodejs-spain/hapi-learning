var  Hapi = require('hapi')
    ,Path = require('path')
    ,Inert = require('inert')
    ,server = new Hapi.Server()

server.register(Inert, function (err) {
    if (err) throw err;
});

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

var handler = function(req,res) {
    var json =    {
      description : req.payload.description,  //description from form
      file : {
        data : null,  //content of file uploaded
        filename : req.payload.file.hapi.filename, //name of file uploaded
        headers : req.payload.file.hapi.headers  //file header provided by hapi
      }
    }

    var body = '';
    req.payload.file.on('data', function (data){
      body += data
    });
    
    req.payload.file.on('end', function (){
        json.file.data = body
        res(JSON.stringify(json)
      // console.log(body);
    });
}


server.route({
    path: '/upload',
    // Importante el POST, no GET
    method:'POST', 
    handler: handler,
    config: {
        payload: {
            output : 'stream',
            parse : true
        }
    }
});
server.route({
    path: '/',
    method:'GET', 
    handler: {
        file: Path.join(__dirname,'public','form.html')
    }
    
});


server.start(function () {
    console.log('Server running at:', server.info.uri);
});
