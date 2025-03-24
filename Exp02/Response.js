// Express.js, the response (res) object provides various methods to send responses to the client.

const express = require("express");
const app = express();

const path = require("path");

// 1. res.send()
// Sends a response of any type (string, object, buffer, etc.).

app.get("/send", (req, res) => {
  res.send("Hello, this is a response using res.send()!");
});

// res.json()
// Sends a JSON response.

app.get("/json", (req, res) => {
  res.json({ message: "Hello, this is a JSON response!" });
});

// res.status()
// Sets the HTTP status code for the response.

app.get("/status", (req, res) => {
  res.status(404).send("Page not found!");
});

// res.redirect()
//Redirects the client to another URL.

app.get("/redirect", (req, res) => {
  res.redirect("/jsonrediredpath");
});
//res.sendFile()
///Sends a file as a response.

app.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "example.txt"));
});

//res.end()
// Ends the response process without sending any data.

app.get("/end", (req, res) => {
  res.end();
});

//res.set()
// Sets HTTP headers.

app.get("/set-header", (req, res) => {
  res.set("Custom-Header", "MyHeaderValue");
  res.send("Header Set");
});

// res.cookie()
// Sets a cookie in the response.

app.get("/cookie", (req, res) => {
  res.cookie("username", "keerthana", { maxAge: 900000 });
  res.send("Cookie has been set!");
});

//res.clearCookie()
//Clears a cookie.

app.get("/clear-cookie", (req, res) => {
  res.clearCookie("username");
  res.send("Cookie has been cleared!");
});

//res.download()
// Triggers a file download.

app.get("/download", (req, res) => {
  res.download(path.join(__dirname, "example.txt"));
});

app.listen(3000, () => console.log("Server running on port 3000"));
