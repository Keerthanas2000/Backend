const fs = require('fs');

const dirPath = 'newFolder';

fs.rmdir(dirPath, { recursive: true }, (err) => {
    if (err) {
        console.error('Error deleting directory:', err.message);
    } else {
        console.log(`Directory '${dirPath}' deleted successfully.`);
    }
});
