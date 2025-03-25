const express= require('express');
const path=require('path')


// path: A built-in Node.js module to work with file and directory paths.


const app=express();
const port=3000;


console.log(__dirname)

// console.log(__filename)


// added midddleware to include files
app.use('/static', express.static(path.join(__dirname, 'public')));
// Sets up a static file server.
// Any files inside the public directory can be accessed via /static/... in the browser.


app.get('/', (req, res)=>
{
      res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(port , ()=>
{
      console.log(`server is running in ${port}`)
})



// Explanation of the Code:
// This is a simple Node.js + Express server that serves static files and an HTML page. Below is a breakdown of what each part does:

// 1. Importing Required Modules:

// const express = require('express'); 
// const path = require('path');
// express: Imports the Express framework to create a web server.

// path: A built-in Node.js module that helps work with file and directory paths.

// 2. Setting Up the Express App:

// const app = express();
// const port = 3000;
// app: Creates an instance of an Express application.

// port: Defines the port number on which the server will listen.

// 3. Logging the Directory Name:

// console.log(__dirname);
// __dirname is a global variable that returns the absolute path of the directory where this script is located.

// Example Output:


// /Users/keerthana/project-folder
// 4. Serving Static Files:

// app.use('/static', express.static(path.join(__dirname, 'public')));
// express.static(path.join(__dirname, 'public')):

// Serves files inside the public folder as static files.

// The /static prefix means any file inside public can be accessed via /static/filename.

// Example Usage:
// If public contains:

// cpp
// Copy
// Edit
// public/
// ├── images/
// │   ├── logo.png
// ├── style.css
// The files are accessed as:


// http://localhost:3000/static/style.css
// http://localhost:3000/static/images/logo.png
// 5. Serving the Main HTML File:

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// });
// app.get('/'): Defines a route for the homepage (http://localhost:3000/).

// res.sendFile(path.join(__dirname, 'public', 'index.html')):

// Sends index.html from the public folder as a response.

// 6. Starting the Server:

// app.listen(port, () => {
//     console.log(`server is running in ${port}`);
// });
// Starts the server on port 3000.

// Outputs:

// pgsql
// Copy
// Edit
// server is running in 3000
// Possible Scenarios and Issues:
// 1. What if I Change the Folder Name?
// a) Folder Name is Different (e.g., 'assets' instead of 'public')
// If you rename public to assets without changing the code, the server will break because it cannot find public anymore.

// Fix: Update Code
// Change:


// app.use('/static', express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
// To:


// app.use('/static', express.static(path.join(__dirname, 'assets')));
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'assets', 'index.html')));
// 2. What If the Folder is Nested?
// a) Folder Structure:
// pgsql
// Copy
// Edit
// project/
// ├── server.js
// ├── static_files/
// │   ├── public/
// │   │   ├── index.html
// │   │   ├── style.css
// If public is now inside static_files, the path should be updated as:


// app.use('/static', express.static(path.join(__dirname, 'static_files', 'public')));
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'static_files', 'public', 'index.html')));
// 3. What if index.html is Missing?
// If index.html is not in the public folder:

// Visiting http://localhost:3000/ will give:

// yaml
// Copy
// Edit
// Error: ENOENT: no such file or directory
// Fix: Ensure index.html exists in public/ or handle the error:


// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'), (err) => {
//         if (err) res.status(404).send('File not found');
//     });
// });
// 4. What if I Change /static to Something Else?
// If you change:


// app.use('/static', express.static(path.join(__dirname, 'public')));
// To:


// app.use('/assets', express.static(path.join(__dirname, 'public')));
// Now files will be accessed via:


// http://localhost:3000/assets/style.css
// instead of:


// http://localhost:3000/static/style.css
// 5. What if express.static is Not Used?
// If you remove:


// app.use('/static', express.static(path.join(__dirname, 'public')));
// Static files (CSS, JS, images) won’t load.

// Example:


// GET http://localhost:3000/static/style.css 404 (Not Found)
// Fix: Re-add express.static().