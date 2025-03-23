const express= require('express'); 



const app= express(); 
let port= 3000;
// Import Route Modules

let Customer= require('./Customer');
let Seller= require('./Seller');
let Admin=require('./Admin');

//define Middleware for routes


app.use('/Customer', Customer);
app.use('/Seller',Seller );
app.use('/Admin',Admin )

app.get('/', (req, res)=>
{
res.send(`HI`)
})


app.listen(port, ()=>
{
      console.log(`The route is working `)
})


// Copy-Item originalFile.js duplicateFile.js

