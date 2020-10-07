console.log("Ran index.js")

// const http = require('http'),
//     fs = require('fs');




// fs.readFile('./index.html', function (err, html) {
//     if (err) {
//         throw err;
//     }
//     http.createServer(function(request, response) {
//         response.setHeader(200, {"Content-Type": "application/json"});
//         response.write("lol");
//         response.end();
//     }).listen(8000);
// });

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});