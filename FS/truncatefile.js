const fs = require('fs');

const filePath = 'sample.txt';
const newLength = 10; // Trim file to 10 bytes

fs.truncate(filePath, newLength, (err) => {
    if (err) {
        console.error('Error truncating file:', err.message);
    } else {
        console.log(`File '${filePath}' truncated to ${newLength} bytes.`);
    }
});
