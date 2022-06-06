var http = require('http');

var server = http.createServer(handleRequest);
function handleRequest(req, res) {
    res.end('Welcome');
}
server.listen(3000, () => {
    console.log('listening 0n the prot 3000');
});