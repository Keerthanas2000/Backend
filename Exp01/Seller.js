let express=require('express')
let router=express.Router();

router.get('/home', (req, res)=> {
      res.send("Welcome to Seller home page")
})

router.get('/contact', (req,res)=>
{
      res.send("Welcome to Seller contact page")
})

router.get('/profile', (req, res)=>
{
      res.send("welcome to Seller profile page")
})


module.exports=router;