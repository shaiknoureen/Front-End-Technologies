import process from 'process';

process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});

console.log('This message is displayed first.');


process.on('exit', (code) => {
    setTimeout(() => {
        console.log('This will not run');
    }, 0);
});


process.on('multipleResolves', (type, promise, reason) => {
    console.error(type, promise, reason);
    setImmediate(() => process.exit(1));
});

async function main() {
    try {
        return await new Promise((resolve, reject) => {
            resolve('First call');
            resolve('Swallowed resolve');
            reject(new Error('Swallowed reject'));
        });
    } catch {
        throw new Error('Failed');
    }
}

main().then(console.log);














