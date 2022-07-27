var fi = require("fs");
fi.readFile('sai.txt', function(err,data) {
    if(err) {
        return console.error(err);
    }
    console.log("Asynchronous read");
});
