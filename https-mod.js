const https = require('https');

https.createServer(function(req, resp){
    resp.write("Welcome to https Module");
    resp.end();
}).listen(3000);