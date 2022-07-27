const path = require('path');

path.basename('C:\\temp\\myfile.html');


console.log(process.env.PATH);

const net = require('net');
net.createServer().listen(
    path.join('\\\\?\\pipe', process.cwd(), 'myctl'));


    const blockList = new net.BlockList();
    blockList.addAddress('123.123.123.123');
    blockList.addRange('10.0.0.1', '10.0.0.10');
    blockList.addSubnet('8592:757c:efae:4e45::', 64, 'ipv6');
    
    console.log(blockList.check('123.123.123.123'));  
    console.log(blockList.check('10.0.0.3'));  
    console.log(blockList.check('222.111.111.222'));  
    
    console.log(blockList.check('::ffff:7b7b:7b7b', 'ipv6')); 
    console.log(blockList.check('::ffff:123.123.123.123', 'ipv6')); 

    const server = net.createServer((socket) => {
        socket.end('goodbye\n');
      }).on('error', (err) => {
        throw err;
      });
      
      server.listen(() => {
        console.log('opened server on', server.address());
      });





































      