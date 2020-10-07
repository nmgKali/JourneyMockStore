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
    if (req.url.indexOf("apple") >= 0) {
        res.setHeader('Content-Type', 'application/pkcs7-mime');
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
    } else {
        res.setHeader('Content-Type', 'text/html')
        res.end("<html><head><title>helllllllo</title><meta name='description' content='testing universal links'/></head><body>meow</body></html>")
    }

}).listen(process.env.PORT || 5000)
//
// server.listen(port, hostname, () => {
//     console.log("meow");
    // console.log(`Server running at http://${hostname}:${port}/`);
// });