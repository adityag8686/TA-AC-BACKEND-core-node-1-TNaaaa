let fs = require("fs");
let path = require("path");

fs.writeFileSync("content.md" , "");

fs.readFile('./content.md', (err, content) => {
    console.log(err,content);
})

let buff = Buffer.alloc(20);
console.log(buff);
buff.write("Welcome to node js");
console.log(buff.toString());