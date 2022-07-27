const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
    setTimeout(() => {
        console.log("please turn off the water!it's a gentle reminder");
    });
    console.log('please turn off the motor!');

});
console.log("the script is running")
myEmitter.emit('waterfull');
console.log("the script is still stunning")
myEmitter.emit('waterfull');

