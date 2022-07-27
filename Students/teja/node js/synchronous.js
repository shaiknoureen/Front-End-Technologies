var fy = require("fs");
vardata = fy.readFileSync('doc.txt')
console.log("synchronous read:" + data.toString());
console.log("file system read")