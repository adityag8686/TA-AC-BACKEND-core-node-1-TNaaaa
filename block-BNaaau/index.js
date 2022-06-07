// Q. Create a basic server using http's createServer
//   - listen for request on port 5000
//   - console request and response object
//   - do a request using browser on `localhost:5000`
//   - check out console for request and response object

let http = require('http');
// var server = http.createServer(handleRequest);

// function handleRequest(req, res) {
//     console.log(request);
//     console.log(response);
//     res.end("welcome to homepage");
    
// }
// server.listen(5000, () => {
//     console.log('listening 0n the port 5k');
// });
// // Q. create a node server 
// //   - add listener on port 5100
// //   - respond with 'My first server in NodeJS' using response object

// let http1 = require('http');
// let server1 = http1.createServer(handleRequest1);

// function handleRequest1(req, res) {
//     res.end('My first server in NodeJS');
// }
// server1.listen(5100, () => {
//     console.log('listening 0n the port 5100');
// });


// // Q. write code to create a node server 
// //   - add listener on port 5555
// //   - console request headers
// //   - respond with content of user-agent from request headers.

// let http2 = require('http');
// let server2 = http2.createServer(handleRequest2);

// function handleRequest2(req, res) {
//     console.log(req.headers)
//     console.log(req.headers["user-agent"]);
//     res.end('USer Agent');
// }
// server2.listen(5555, () => {
//     console.log('listening 0n the port 5555');
// });


// // Q. write code to create a node server 
// //   - add listener on port 5566
// //   - console request url and request method
// //   - return a text response with requested url and method
// let http3 = require('http');
// let server3 = http3.createServer(handleRequest3);

// function handleRequest3(req, res) {
//     console.log(req.method, req.url);
//     res.end(req.method, req.url);
// }
// server3.listen(5566, () => {
//     console.log('listening 0n the port 5566');
// });

// // Q. write code to create a node server 
// //   - add listener on port 7000
// //   - also add a callback function to listener with a console `server listening on port 7000`
// //   - return entire request headers in response.
// let http4 = require('http');
// let server4 = http4.createServer(handleRequest4);

// function handleRequest4(req, res) {
//     console.log(req.method, req.url);
//     res.end(JSON.stringify(req.headers));
// }
// server4.listen(7000, () => {
//     console.log('listening 0n the port 7k');
// });
// // Q. create a server
// //   - add a listener on port 3333
// //   - set status code 202 in response using `res.statusCode`.
// let http5 = require("http");
// let server5 = http5.createServer(handleRequest5);

// function handleRequest5(req, res) {
//     res.statusCode = 202;
//     res.end(res.statusCode);
// }
// server5.listen(3333, "localhost", () => {
//     console.log("listening 0n the port 3333");
// });
// // Q. create a server 
// //   - add a listener on port 8000
// //   - set appropriate header for html response using `res.setHeader`
// //   - return an HTML response(`<h3>Welcome to altcampus</h3>`) 

// let http6 = require("http");
// let server6 = http6.createServer(handleRequest6);

// function handleRequest6(req, res) {
//     res.setHeader("Content-Type", "text/html");
//     res.end("<h3>Welcome to altcampus</h3>");
// }
// server6.listen(8000, "localhost", () => {
//     console.log("listening 0n the port 8k");
// });
// // Q. Repeat above question using `res.writeHead` to set status code and Content-Type at the same time.
// let http7 = require("http");
// let server7 = http7.createServer(handleRequest7);

// function handleRequest7(req, res) {
//     // res.setHeader("Content-Type", "text/html");
//     // res.end("<h3>Welcome to altcampus</h3>");
//     res.writeHead( 202,  {"Content-Type": "text/html"})
// }
// server7.listen(8000, "localhost", () => {
//     console.log("listening 0n the port 8k");
// });
// // Q. create a basic node server
// //   - add a listener at port 8888
// //   - add appropriate header for json response
// //   - send json response({success: true, message: 'Welcome to Nodejs'})
// let http8 = require("http");
// let server8 = http8.createServer(handleRequest7);

// function handleRequest7(req, res) {
//     res.setHeader("Content-Type", "application/json");
//     res.end("{success: true, message: 'Welcome to Nodejs'}");
// }
// server8.listen(8888, "localhost", () => {
//     console.log("listening 0n the port  8888");
// });

// Q. create a server
//   - add listener on port 5050
//   - use postman to do a POST request on index route
//   - console to check request method
//   - send HTML response i.e. `<h2>posted for first time</h2>`

let http9 = require("http");
let server9 = http9.createServer(handleRequest9);

function handleRequest9(req, res) {
  console.log(req.method);
  if(req.method==='POST' && req.url==='/index'){
      console.log("working here ")
    res.setHeader("Content-Type", "text/html");
    res.end("<h2>posted for first time</h2>");
  }
}
server9.listen(5050, "localhost", () => {
  console.log(" server is listening at port 5050");
});



// Q. create a server and handle 2 different requests
//   - add a listener on port 2345
//   - handle GET request on '/' route where return your name in plain text in response
//   - handle GET request on '/about' route and return your name in h2 as HTML page.
//   - add a error handler at last to handle request made on other than above routes with a status code of 404.
    
// Q. Handle 2 requests on same route with different method
//     1. GET on '/users' route where return a simple HTML form with name and email field
//     2. POST on '/users' route with a message 'Posted for the second time'.
// let http10 = require("http");
// let server10 = http10.createServer(handleRequest9);
// let fs = require("fs");

// function handleRequest9(req, res) {
//     if (req.method === "GET" && req.url === "/users") {
//         fs.createReadStream("./index.html").pipe(res);
//     }else if (req.method === "POST" && req.url === "/users") {
//         res.end("Posted for the second time");
//     } 
// }
// server10.listen(9000, "localhost", () => {
//     console.log(" server is listening at port 9000");
// });
// Q. create a server and handle query params from the request on following url i.e. `/users?email=nodeserver@gmail.com` from browser

//   - parse the  request url using parse method from url module
//   - console pathname from parsed url in above step
//   - grab url using `req.url`
//   - differentiate between `req.url` and `parsedUrl.pathname`
//   - grab the email from query params
//   - return json response with email from query params

let http11 = require("http");
let url = require("url");
let server11 = http11.createServer(handleRequest11);
let fs = require("fs");

function handleRequest11(req, res) {
    let parsedUrl = url.parse(req.url);
    console.log(parsedUrl.pathname);
    if (req.method === "GET" && parsedUrl.pathname === "/users") {
        res.setHeader("Content-Type", "application/json");
        res.end(parsedUrl.query);
    }
}
server11.listen(20000, "localhost", () => {
    console.log(" server is listening at port 20000");
});