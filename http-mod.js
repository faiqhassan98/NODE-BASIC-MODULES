// const http = require('http');
// http.createServer(function(req,res){
//     res.write("Welcome to Nodejs");
//     res.end();
// }).listen(5000)

const http = require('http');
http.createServer(function(req,resp){
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.write('Welcome to NodeJS');
    resp.end();
}).listen(5000);