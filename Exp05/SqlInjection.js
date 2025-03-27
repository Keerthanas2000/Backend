// SQL Injection: Explained Simply
// SQL Injection is a cyber attack where an attacker manipulates SQL queries by injecting malicious SQL code into user input fields. This can allow attackers to access, modify, or delete data in a database without proper authorization.

// 🔴 How SQL Injection Works
// If a web application doesn’t sanitize user input, an attacker can enter SQL commands instead of normal data. This causes the database to execute unintended queries.

// Example of a Vulnerable Query
// Let’s say we have an insecure login system:


// let query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
// Here, if the attacker enters:


// email: admin' --  
// password: anything
// The query will become:


// SELECT * FROM users WHERE email = 'admin' --' AND password = 'anything'
// Since -- starts a SQL comment, the rest of the query is ignored!
// This means no password check happens, and the attacker logs in as "admin".

// 🔐 How to Prevent SQL Injection
// ✅ Use Parameterized Queries (Prepared Statements)
// Instead of inserting user input directly into a query, use placeholders:


// let query = "SELECT * FROM users WHERE email = ? AND password = ?";
// Connection_info.query(query, [email, password], (err, result) => {
//   if (err) {
//     console.log("Database error");
//   }
// });
// The ? placeholders ensure that user input is treated as data, not code.

// This prevents SQL Injection, because MySQL does not execute user input as part of the SQL command.

// ✅ Input Validation
// Restrict special characters like ', ", ;, --, etc.

// Use regex to validate email, numbers, and other inputs.

// ✅ Limit Database Permissions
// Give only necessary permissions to the database user (e.g., no DELETE permission for normal users).

// Use different database users for different tasks.

// 🚨 SQL Injection Attack Examples
// 1️⃣ Retrieving All Users
// If the query is:


// SELECT * FROM users WHERE email = 'user@example.com' AND password = 'password';
// An attacker can enter:


// email: ' OR 1=1 --
// password: anything
// Now the query becomes:


// SELECT * FROM users WHERE email = '' OR 1=1 --' AND password = 'anything';
// Since 1=1 is always true, the attacker retrieves all users.

// 2️⃣ Deleting All Data
// If a form field is used in a DELETE query:


// let query = `DELETE FROM users WHERE email = '${email}'`;
// An attacker can enter:


// email: ' OR 1=1 --
// Now the query becomes:


// DELETE FROM users WHERE email = '' OR 1=1 --';
// This deletes all users in the database!

// 🛡️ SQL Injection Prevention Checklist
// ✅ Always use parameterized queries (prepared statements).
// ✅ Sanitize and validate user input.
// ✅ Use the least privileged database user.
// ✅ Monitor and log SQL activity.
// ✅ Use Web Application Firewalls (WAFs).

