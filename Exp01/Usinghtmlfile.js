const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// to get  the current working directory

console.log(__dirname);

app.use("/static", express.static(path.join(__dirname, "public")));

// If you place a CSS file or image inside public/style.css, you can access it in the browser at:


// path.join(__dirname, 'public') generates the full absolute path to the public folder.

// express.static() is a built-in middleware that serves static files like:

// CSS

// JavaScript

// Images

// Fonts
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log("server is running in port 3000");
});
