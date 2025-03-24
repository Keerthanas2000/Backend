const express = require("express");
const { v4: uuidv4 } = require("uuid"); // Import UUID library

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Users data with UUIDs instead of numeric IDs
let users = [
  { id: uuidv4(), username: "Sachin", email: "Sachin@gmail.com" },
  { id: uuidv4(), username: "Rahul", email: "Rahul@gmail.com" },
  { id: uuidv4(), username: "Sourav", email: "Rahul@gmail.com" },
  { id: uuidv4(), username: "Virat", email: "Rahul@gmail.com" },
  { id: uuidv4(), username: "Rohit", email: "Rahul@gmail.com" },
  { id: uuidv4(), username: "Dhoni", email: "Rahul@gmail.com" },
];

// Get all users
app.get("/user", (req, res) => {
  res.json(users);
});

// Get a specific user by ID
app.get("/user/:id", (req, res) => {
  let id = req.params.id;
  let user = users.find((u) => u.id === id);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Create a new user with a UUID
app.post("/user", (req, res) => {
  let { username, email } = req.body;

  if (username && email) {
    let newUser = { id: uuidv4(), username, email }; // Assign UUID
    users.push(newUser);
    res.status(201).json({ message: "User created successfully", newUser });
  } else {
    res.status(400).json({ message: "Username and email are required" });
  }
});

// Update user (PUT - full replacement)
app.put("/user/:id", (req, res) => {
  let id = req.params.id;
  let { username, email } = req.body;

  let userIndex = users.findIndex((u) => u.id === id);
  if (userIndex !== -1) {
    users[userIndex] = { id, username, email }; // Replace entire user
    res.json({ message: "User updated successfully", user: users[userIndex] });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Update user (PATCH - partial update)
app.patch("/user/:id", (req, res) => {
  let id = req.params.id;
  let userIndex = users.findIndex((u) => u.id === id);

  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...req.body }; // Merge updates
    res.json({ message: "User updated successfully", user: users[userIndex] });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Delete a user
app.delete("/user/:id", (req, res) => {
  let id = req.params.id;
  let userIndex = users.findIndex((u) => u.id === id);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.json({ message: "User deleted successfully", users });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
