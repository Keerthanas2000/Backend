const fs = require('fs');

const filePath = 'sample.txt';

fs.watch(filePath, (eventType, filename) => {
    if (filename) {
        console.log(`File ${filename} changed, event: ${eventType}`);
    }
});
