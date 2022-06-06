var http = require('http');

var server = http.createServer(handleRequest);
function handleRequest(req, res) {
    console.log(req.headers);
    console.log(req.method, req.url);
    res.writeHead(201 ,{'Content-Type' : 'text/plain'});
    res.end('Welcome');
}
server.listen(4444, () => {
    console.log('listening 0n the prot 4444');
});