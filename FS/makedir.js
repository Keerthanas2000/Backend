const fs = require('fs');

const dirPath = 'newFolder';

fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
        console.error('Error creating directory:', err.message);
    } else {
        console.log(`Directory '${dirPath}' created successfully.`);
    }
});
