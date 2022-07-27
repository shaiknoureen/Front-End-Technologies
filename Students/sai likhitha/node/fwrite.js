var fs = require('fs');
console.log("writing the data in the existing file")
fs.writeFile('doc.txt', 'my Ide is not working', function (err){
    if (err){
        return console.error(err);
    }

    console.log("data driven in to the existence file!")
    console.log("lets a read it after updating")
var fy = require("fs");
 fy.readFile('doc.txt', function (err,data) {
    if(err) {
        return console.error(err);
    }
    console.log("Asynchronous read:" + data.toString());
    
});
});
