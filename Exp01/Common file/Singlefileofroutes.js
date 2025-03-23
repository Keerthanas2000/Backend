const express = require("express");
const app = express();
const port = 3000;

// single route handler

app.get("/:role/:page", (req, res) => {
  const { role, page } = req.params;

  const rolepages = {
    customer: {
      home: "customer Home page",
      about: "customer About page",
      profile: "customer Profile page",
    },

    seller: {
      home: "seller Home page",
      about: "seller About page",
      profile: "seller Profile page",
    },


    admin: {
      home: "admin Home page",
      about: "admin About page",
      profile: "admin Profile page",
    },
  };


  if (rolepages[role] && rolepages[role][page])
  {
      console.log(`${rolepages[role][page]}`)

      res.send(`${rolepages[role][page]}`)
  }

  else{
      res.status(404).send("Page not found")
  }
});

app.listen(port, ()=>
{
      console.log(`server running at http://localhost:${port}`)
})
