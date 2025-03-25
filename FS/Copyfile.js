const fs = require('fs');

const source = 'sample.txt';
const destination = 'copy_sample.txt';

fs.copyFile(source, destination, (err) => {
    if (err) {
        console.error('Error copying file:', err.message);
    } else {
        console.log(`File copied from ${source} to ${destination}`);
    }
});
