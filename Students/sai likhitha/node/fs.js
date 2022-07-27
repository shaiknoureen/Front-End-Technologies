var fi = require("fs");
fi.readFile('input.txt', function(err,data) {
    if(err) {
        return console.error(err);
    }
    console.log("Asynchronous read:");
});
