var fs = require("fs");
console.log("opening file")
fs.open("input.txt", 'r+', function(err,fd){
    if (err) {
        return console.error(err);
    }
    console.log("file opened successfully")
});
