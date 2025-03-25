const fs = require("fs");
// write file will remove existing text and add new text to it

//async
fs.writeFile("example.txt", "Adding this text", (err) => {
  if (err) {
    console.log("error in writing to file");
    return;
  } else {
    console.log("file written successfully");
  }
});

//sync
fs.writeFileSync("example.txt", "New text");
console.log("file written succefully");
