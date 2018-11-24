/**
 * Shahab Younas 
 * Simple Example code, creating a web server
 */

 //Dependencies 
const http = require('http');
const url = require('url');

//Server handler
const handler = (req, res) => {

    const parsedUrl = url.parse(req.url, true);

    if (parsedUrl.pathname === '/') {

        res.writeHead(200, { 'Content-type': 'text/plain' });
        res.write('Node JS webserver');
        res.end();

    } else {

        res.writeHead(404, { 'Content-type': 'text/plain' });
        res.end();
    }
}

// Create a server
const server = http.createServer(handler);

// Port listner
server.listen(3000);

