const fs = require('fs');

const filePath = 'sample.txt';

fs.access(filePath, fs.constants.F_OK | fs.constants.R_OK, (err) => {
    if (err) {
        console.error(`No access to '${filePath}' or file does not exist.`);
    } else {
        console.log(`You have access to '${filePath}'.`);
    }
});


// fs.access() checks if a file is accessible.

// fs.constants.F_OK checks if the file exists.

// fs.constants.R_OK checks if the file has read permissions.


// rm can remove file and dir   but unlink can only remove file not dir