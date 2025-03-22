const express = require("express");
const app = express();

// Home Page
app.get("/", (req, res) => {
  res.send("Welcome to port 3000");
});

// About Page
app.get("/About", (req, res) => {
  res.send("Welcome to About page");
});

// Contact Page with Styled Text
app.get("/Contact", (req, res) => {
  res.send(`<h1 style="color:red;">Welcome to contact page</h1>`);
});

// Extracting username
app.get("/:username", (req, res) => {
  res.send(`Hi, your username is: ${req.params.username}`);
});


// app.get('/:user/:age', (req, res)=>{
//   res.send(`<h1 style='color:red' > Hi ${req.params.user}
//         connect to us at: support@help.com as  you are ${req.params.age} age..</h1>`)
// })

// app.get('/:user/:company', (req, res)=>{
//   res.send(`<h1 style='color:red' > Hi ${req.params.user}
//         connect to us at: support@help.com as  you work at ${req.params.company}</h1>`)
// })
// Routes are checked in order.
// If two routes have the same pattern, the first one will always be matched first.
// To avoid conflicts, use unique route prefixes (like /age/ and /company/).


// http://localhost:3000/Myusername/age/03	

// http://localhost:3000/Myusername/company/Google	

// Extracting User & Age
app.get("/age/:user/:age", (req, res) => {
  res.send(`<h1 style='color:red'> Hi ${req.params.user}, 
        connect to us at: support@help.com as you are ${req.params.age} years old.</h1>`);
});

// Extracting User & Company
app.get("/company/:user/:company", (req, res) => {
  res.send(`<h1 style='color:red'> Hi ${req.params.user}, 
        connect to us at: support@help.com as you work at ${req.params.company}.</h1>`);
});

// Extracting User ID (Only 2 or 3 digits)
app.get("/:Userid(\\d{2,3})", (req, res) => {
  res.send(`Hi user ID with regex: ${req.params.Userid}`);
});

// Optional Parameter for User ID
app.get("/:UseriD?", (req, res) => {
  let user_id = req.params.UseriD || "0";
  res.send(`My user ID is ${user_id}`);
});

// Start Server
app.listen(3000, () => {
  console.log("Connected to server at port 3000");
});
