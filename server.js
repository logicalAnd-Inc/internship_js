/*! 
 * @file server.js
 * @copyright © 2018 By Logue <http://logue.be/>.
 * @license MIT
 */
const http = require("http");
const fs = require('fs');

function getType(_url) {
    const types = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".svgz": "image/svg+xml"
    }
    for (var key in types) {
        if (_url.endsWith(key)) {
            return types[key];
        }
    }
    return "text/plain";
}

const server = http.createServer(function(req, res) {
    const url = "src" + (req.url.endsWith("/") ? req.url + "index.html" : req.url);
    if (fs.existsSync(url)) {
        fs.readFile(url, (err, data) => {
            if (!err) {
                console.log('\u001b[36mFetch: \u001b[0m', url);
                res.writeHead(200, {
                    "Access-Control-Allow-Origin": "*",
                    "Pragma": "no-cache",
                    "Cache-Control": "no-cache",
                    "Content-Type": getType(url)
                });
                res.end(data);
            } else {
                console.error('\u001b[31mError: \u001b[0m', url);
                res.statusCode = 500;
                res.end();
            }
        });
    } else {
        console.error('\u001b[35mNot Found: \u001b[0m', url);
        res.statusCode = 404;
        res.end();
    }
});

const port = process.env.PORT || 3000;
server.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});