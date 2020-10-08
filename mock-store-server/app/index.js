const openssl = require('openssl-nodejs')
const http = require('http'),
    path = require('path'),
    appDir = path.dirname(require.main.filename);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    if (req.url.indexOf("apple") >= 0) {

        const aasa = path.join(appDir, 'apple-app-site-association')
        res.setHeader('Content-Type', 'application/pkcs7-mime')
        res.end(aasa)

    } else {
        res.setHeader('Content-Type', 'text/html')
        res.end("<html><head><title>helllllllo</title><meta name='description' content='testing universal links'/></head><body>meow</body></html>")
    }

}).listen(process.env.PORT || 5000)