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



// Types of Middleware in Express.js
// Middleware functions in Express.js are functions that execute before the route handler, modifying the request (req), response (res), or calling next() to pass control to the next middleware.

// Here are the different types of middleware:

// 1. Application-Level Middleware
// 📌 Applies to the entire application.

// Used for logging, authentication, error handling, etc.
// Attached using app.use() or app.METHOD().
// Example: Logging Middleware

// const express = require("express");
// const app = express();

// // Middleware function
// app.use((req, res, next) => {
//   console.log(`${req.method} request received at ${req.url}`);
//   next(); // Pass control to the next middleware/route handler
// });

// // Route
// app.get("/", (req, res) => {
//   res.send("Welcome to Home Page");
// });

// app.listen(3000, () => console.log("Server running on port 3000"));
// ✅ Pros: Global execution for all routes.
// ❌ Cons: Can impact performance if applied unnecessarily.

// 2. Router-Level Middleware
// 📌 Applied only to specific routes using express.Router().

// Useful for modularizing routes.
// Example: Middleware for User Routes

// const express = require("express");
// const router = express.Router();

// // Middleware for user routes
// router.use((req, res, next) => {
//   console.log("User middleware executed");
//   next();
// });

// // Routes
// router.get("/profile", (req, res) => res.send("User Profile"));
// router.get("/settings", (req, res) => res.send("User Settings"));

// // Attach router to app
// const app = express();
// app.use("/user", router);

// app.listen(3000, () => console.log("Server running"));
// ✅ Pros: Keeps the main file clean.
// ❌ Cons: Need to attach explicitly to each route.

// 3. Built-in Middleware
// 📌 Express provides some built-in middleware functions:

// express.json() → Parses JSON request bodies
// express.urlencoded({ extended: true }) → Parses URL-encoded form data
// express.static() → Serves static files
// Example: Using Built-in Middleware

// const express = require("express");
// const app = express();

// // Parse JSON
// app.use(express.json());

// // Parse URL-encoded form data
// app.use(express.urlencoded({ extended: true }));

// // Serve static files
// app.use(express.static("public"));

// app.listen(3000, () => console.log("Server running"));
// ✅ Pros: Optimized and easy to use.
// ❌ Cons: Cannot be customized deeply.

// 4. Error-Handling Middleware
// 📌 Handles errors and prevents server crashes.

// Must have 4 parameters: (err, req, res, next).
// Example: Handling Errors

// const express = require("express");
// const app = express();

// // Error Middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something went wrong!");
// });

// // Example route with an error
// app.get("/", (req, res) => {
//   throw new Error("Oops! Server error.");
// });

// app.listen(3000, () => console.log("Server running"));
// ✅ Pros: Catches errors globally.
// ❌ Cons: Must be defined after routes.

// 5. Third-Party Middleware
// 📌 External packages for authentication, logging, etc.

// Example: Using morgan for Logging

// const express = require("express");
// const morgan = require("morgan"); // Third-party middleware

// const app = express();
// app.use(morgan("dev")); // Logs all requests

// app.get("/", (req, res) => res.send("Home Page"));

// app.listen(3000, () => console.log("Server running"));
// ✅ Pros: Ready-made solutions for common tasks.
// ❌ Cons: Extra dependency, may slow down app.

// 6. Request-Specific Middleware
// 📌 Executes only for certain requests, based on conditions.

// Example: Middleware for Admin Access

// const express = require("express");
// const app = express();

// // Middleware for admin check
// const adminMiddleware = (req, res, next) => {
//   if (req.query.role === "admin") {
//     next(); // Allow access
//   } else {
//     res.status(403).send("Access Denied");
//   }
// };

// // Protected route
// app.get("/admin", adminMiddleware, (req, res) => {
//   res.send("Welcome, Admin!");
// });

// app.listen(3000, () => console.log("Server running"));
// ✅ Pros: Efficient, runs only when needed.
// ❌ Cons: Need to be attached manually to each route.

