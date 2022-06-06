console.log('Welcome to Nodejs');
let os = require ("os");
console.log(os.cpus.length);
console.log(os.freemem);
console.log(os.uptime);
console.log(os.version);

let fs = require("fs");


let buff1 = Buffer.alloc(12);
let buff2 = Buffer.allocUnsafe(12);

buff1.write('This is Aditya Goswami').toString();
buff2.write('This is a example of buff2').toString();
