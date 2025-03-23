let express=require('express')
let router=express.Router();

router.get('/home', (req, res)=> {
      res.send("Welcome to Customer home page")
})

router.get('/contact', (req,res)=>
{
      res.send("Welcome to Customer contact page")
})

router.get('/profile', (req, res)=>
{
      res.send("welcome to customer profile page")
})


module.exports=router;