let express=require('express')
let router=express.Router();

router.get('/home', (req, res)=> {
      res.send("Welcome to Admin home page")
})

router.get('/contact', (req,res)=>
{
      res.send("Welcome to Admin contact page")
})

router.get('/profile', (req, res)=>
{
      res.send("welcome to Admin profile page")
})


module.exports=router;