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