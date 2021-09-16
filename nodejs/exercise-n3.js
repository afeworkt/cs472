const http = require('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(req.url);
    res.end();
});

server.listen(8080)
// request http://localhost:8080/apples          response => /apples
// request http://localhost:8080/pears           response => /pears
// request http://localhost:8080/strawberries    response => /strawberries
