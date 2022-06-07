var http = require('http');
var url = require('url');
var fs = require('fs');
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var parsedurl = url.parse(req.url);
    var pathname = parsedurl.pathname;
    console.log(parsedurl, pathname);

    if (req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./index.html').pipe(res);
    } else if (req.method === 'GET' && req.url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./about.html').pipe(res);
    } else if(req.method === 'GET' && pathname.split(".").pop() === 'css'){
        console.log(pathname ," :Path name");
        res.setHeader("Content-Type", "text/css");
        fs.createReadStream(__dirname + req.url).pipe(res);
    } else{
        res.end('404 : Page Not Found');
    }
}

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
