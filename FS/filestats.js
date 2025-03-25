const fs = require('fs');

const filePath = 'sample.txt';

fs.stat(filePath, (err, stats) => {
    if (err) {
        console.error('Error getting file stats:', err.message);
    } else {
        console.log('File Stats:', stats);
    }
});
