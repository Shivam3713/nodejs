// const fs= require("fs");
// const http = require("http");
// const server = http.createServer();
// server.on("request", (req, res) =>{
//     var fs = require("fs");
//     fs.readFile("read.txt", (err, data)=>{
//         if(err) return console.error(err);
//         res.end(data.toString());
//     });
// });
// server.listen(6000); 

//2nd way
//reading from a stream
//create a readable stream
//handle stream evenets=>data,end and error

// const fs = require("fs");
// const http = require("http");
// const server1 = http.createServer();
// server1.on("request", (req, res) =>{
//     const rstream = fs.createReadStream("read.txt");
//     rstream.on('data', (chunkdata)=>{
//         res.write(chunkdata);
//     });
//     rstream.on('end', ()=>{
//         res.end("end");
//     });
//     rstream.on("error", (err) =>{
//         console.log(err);
//     });
// });
// server1.listen(5000);

//change the name of file inputs
//this is using zlib method 


var zlib = require('zlib');
var http = require('http');
var fs = require('fs');
http.createServer(function(request, response) {
  var raw = fs.createReadStream('index.html');
  var acceptEncoding = request.headers['accept-encoding'];
  if (!acceptEncoding) {
    acceptEncoding = '';
  }

  // Note: this is not a conformant accept-encoding parser.
  // See http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3
  if (acceptEncoding.match(/\bdeflate\b/)) {
    response.writeHead(200, { 'content-encoding': 'deflate' });
    raw.pipe(zlib.createDeflate()).pipe(response);
  } else if (acceptEncoding.match(/\bgzip\b/)) {
    response.writeHead(200, { 'content-encoding': 'gzip' });
    raw.pipe(zlib.createGzip()).pipe(response);
  } else {
    response.writeHead(200, {});
    raw.pipe(response);
  }
}).listen(1337);