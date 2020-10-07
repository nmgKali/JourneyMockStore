console.log("Ran index.js")

const http = require('http'),
    fs = require('fs');



// let aasaContent;
// fs.readFile('/app/apple-app-site-association.txt', function (err, data) {
//     if (err) {
//         throw err;
//     }
//     aasaContent = data;
//     http.createServer(function(request, response) {
//         response.setHeader(200, {"Content-Type": "application/json"});
//         response.write("lol");
//         response.end();
//     }).listen(8000);
// });

// const http = require('http');
//
const hostname = 'namogoo-test-store.herokuapp.com';
const port = 80;
//
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("{\n" +
        "  \"applinks\": {\n" +
        "    \"apps\": [],\n" +
        "    \"details\": [\n" +
        "    {\n" +
        "      \"appID\": \"5PJ977824G.com.namogoo.CustomerJourneyMockStore\",\n" +
        "      \"paths\": [\"*\"]\n" +
        "    }\n" +
        "    ]\n" +
        "  }\n" +
        "}");
}).listen(process.env.PORT || 5000)
//
// server.listen(port, hostname, () => {
//     console.log("meow");
    // console.log(`Server running at http://${hostname}:${port}/`);
// });