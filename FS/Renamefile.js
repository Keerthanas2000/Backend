const fs = require('fs');

const oldPath = 'sample.txt';
const newPath = 'renamed_sample.txt';

fs.rename(oldPath, newPath, (err) => {
    if (err) {
        console.error('Error renaming file:', err.message);
    } else {
        console.log(`File renamed from ${oldPath} to ${newPath}`);
    }
});
