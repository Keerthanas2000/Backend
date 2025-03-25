const fs = require('fs');
const directoryPath = './fs-demo';

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err.message);
    } else {
        console.log('Files in directory:', files);
    }
});
