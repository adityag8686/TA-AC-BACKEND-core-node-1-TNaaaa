let http = require('http');
var server = http.createServer(handleRequest);
var fs = require('fs')

function handleRequest(req, res) {
    console.log(req.method, req.url);
    if (req.method === `GET` && req.url === '/file'){
        fs.readFile('./node.html',(error,content)=> {
            console.log(content,error)
        })
    }else if (req.method === `GET` && req.url === '/stream'){
        res.setHeader( 'Content-Type', 'text/html' );
        fs.createReadStream('./node.html')
    }
    
}
server.listen(5555, () => {
    console.log('listening 0n the port 5.5k');
});