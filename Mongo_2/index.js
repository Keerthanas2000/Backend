let express = require("express");
let mongoose = require("mongoose");

const app = express();

const connection_url = "mongodb://127.0.0.1:27017/world";

// Connect to MongoDB
mongoose
  .connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("MongoDB connection error:", err));

const cities = mongoose.model("cities", {}, "cities");

// app.get("/", async (req, res) => {
//   try {
//     const data = await cities.find({}).limit(10);
//     console.log(data);
//     res.json(data);
//   } catch (err) {
//     console.error("Error fetching cities:", err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });



app.get("/", async (req, res) => {
      try {

            //  cities.find({latitude:{$lte:"41", $gte:"40"}}).limit(10);


            //await cities.find({ name: /lore$/i }).limit(10); 
      //   const data = await cities.find({ name: /lore$/i }).limit(10); 
        const data = await cities.find({ name: /lore$/i }).limit(10); 
    
        console.log("Fetched Data:", data);
        res.json(data);
      } catch (err) {
        console.error("Error fetching cities:", err);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });
    
    
// app.get("/:state_id", async (req, res) => {
//       try {

//             let state=req.params.state_id;
//         const data = await cities.find({state_id:parseInt(state), name:"Pul-e Khumrī"}).limit(10);
//         console.log(data); 
//         res.json(data); 
//       } catch (err) {
//         console.error("Error fetching cities:", err);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

// app.get("/:state_id", async (req, res) => {
//       try {

//             let state=req.params.state_id;
//         const data = await cities.find({$and :[{state_id:parseInt(state)}, {name:"Pul-e Khumrī"}]}).limit(10);
//         console.log(data); 
//         res.json(data); 
//       } catch (err) {
//         console.error("Error fetching cities:", err);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

// Start the server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
