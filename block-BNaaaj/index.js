console.log('Welcome to Nodejs');

let os = require ("os");
console.log(os.cpus.length);
console.log(os.freemem);
console.log(os.uptime);
console.log(os.version);


var{readFile,readFileSync, unlink} = require("fs");


let buff1 = Buffer.alloc(12);
let buff2 = Buffer.allocUnsafe(12);

buff1.write('This is Aditya Goswami')
buff2.write('This is a example of buff2')

console.log(buff1.toString(),buff2.toString());

var sync = readFileSync("./app.js");

var async = readFile("./app.js", (error, content) => {
    console.log(error, content.toString());
})



