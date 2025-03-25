const fs = require("fs");

// async

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log("error in reading file");
    return;
  } else {
    console.log("File content is:", data);
  }
});

// sync

const data2 = fs.readFileSync("example.txt", "utf8");
console.log("Synchronous file content:", data2);


