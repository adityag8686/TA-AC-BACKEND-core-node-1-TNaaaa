let http = require('http');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.method, req.url);
    if (req.method === `GET` && req.url === '/'){
        res.write('Welcome to Index Page');
        res.end();
    }else if (req.method === `GET` && req.url === '/about'){
        res.setHeader( 'Content-Type', 'text/html' );
        res.write('<h1>this is all about NodeJS </h2>');
        res.end();
    }else if ( req.method === 'POST' && req.url === '/about' ){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(`{message: this is a post request}`));
    }
    
}
server.listen(5000, () => {
    console.log('listening 0n the port 5k');
});