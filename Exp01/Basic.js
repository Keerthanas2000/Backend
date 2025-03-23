// example of middleware

// it is a function that can modify req, or response , end the request, response cycle early ,pass control to next middleware

// Types of middleware

// Application level
// router level
// error handling
// built in
// third party

const express = require("express");
const app = express();

// Route Handler

const middleware3 = (req, res, next) => {
  console.log("Middleware 3 is executing");
  next();
};

app.use((req, res, next) => {
  console.log("Midddleware 1");

  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");

  next();
});

app.use(middleware3);

app.get("/", (req, res, next) => {
  console.log(" get Route handler is working");
  res.send("Hello from Router");
  next();
});

app.listen(3000, (err) => {
  console.log("Server running in port 30000");
});
