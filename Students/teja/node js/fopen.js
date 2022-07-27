var fs = require("fs");
console.log("opening file");
fs.open("doc.txt", "r+", function(err,data){
    if(err){
        return console.error(err);
    }
    console.log("file opened successfully")
})