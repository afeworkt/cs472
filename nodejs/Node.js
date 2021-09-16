const dt = require('./myModule')
const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("The date and time are currently: " + dt.myDate());
    res.end();
});
server.listen(8080);
// request => http://localhost:8080/
// response =>
// The date and time are currently: Thu Sep 16 2021 16:41:03 GMT-0500 (Central Daylight Time)