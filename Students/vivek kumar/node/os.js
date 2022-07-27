const os=require('os');
var fs=require('fs')
console.log(os.freemem());
console.log(os.getPriority())
console.log(os.hostname())


fs.readFile('input.txt', function(err,data){
if(err){
    return console.error(err);
}
console.log("something")
})

var dd=fs.readFileSync('input.txt')
console.log("read :" + dd.toString())

console.log("opening file")
fs.open("input.txt", 'r+', function(err,fd){
    if (err) {
        return console.error(err);
    }
    console.log("file opened successfully")
});
