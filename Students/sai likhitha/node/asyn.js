var fi = require("fs");
var data = fi.readFileSync('input.txt') ;
    
    console.log("Asynchronous read:"+data.toString());
    console.log("File system read")
