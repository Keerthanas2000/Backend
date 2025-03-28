// const { MongoClient } = require("mongodb");

// const uri = "mongodb://localhost:27017"; // Update with your MongoDB URI
// const client = new MongoClient(uri);

// async function run() {
//     try {
//         await client.connect();
//         const database = client.db("yourDatabase"); // Replace with your database name
//         const cities = database.collection("cities");

//         // 1. Find all documents
//         const citiesData = await cities.find({}).toArray();
//         console.log("All cities:", citiesData);

//         // 2. Find documents with sorting
//         const sortedCities = await cities.find({}).sort({ name: 1 }).toArray();
//         console.log("Sorted cities:", sortedCities);

//         // 3. Limit results
//         const limitedCities = await cities.find({}).limit(5).toArray();
//         console.log("Limited cities:", limitedCities);

//         // 4. Skip documents
//         const skippedCities = await cities.find({}).skip(5).limit(5).toArray();
//         console.log("Skipped cities:", skippedCities);

//         // 5. Find using comparison operators
//         const cityByState = await cities.find({ state_id: { $eq: 4017 } }).toArray();
//         const citiesByLat = await cities.find({ latitude: { $gt: "16.5" } }).toArray();
//         const rangeCities = await cities.find({ latitude: { $gt: "16", $lt: "17" } }).toArray();
//         const multipleStates = await cities.find({ state_id: { $in: [4017, 4018, 4019] } }).toArray();
//         const notInAP = await cities.find({ state_name: { $ne: "Andhra Pradesh" } }).toArray();
//         const citiesWithWiki = await cities.find({ wikiDataId: { $exists: true } }).toArray();
//         console.log(cityByState, citiesByLat, rangeCities, multipleStates, notInAP, citiesWithWiki);

//         // 6. Logical operators
//         const citiesOr = await cities.find({ $or: [{ state_name: "Andhra Pradesh" }, { state_name: "Telangana" }] }).toArray();
//         const citiesAnd = await cities.find({ $and: [{ state_name: "Andhra Pradesh" }, { country_code: "IN" }] }).toArray();
//         const citiesNot = await cities.find({ state_name: { $not: { $eq: "Andhra Pradesh" } } }).toArray();
//         const citiesNor = await cities.find({ $nor: [{ state_name: "Andhra Pradesh" }, { state_name: "Telangana" }] }).toArray();
//         console.log(citiesOr, citiesAnd, citiesNot, citiesNor);

//         // 7. Regex matching
//         const regexCities = await cities.find({ name: { $regex: /lore$/i } }).toArray();
//         console.log("Cities matching regex:", regexCities);

//         // 8. Get distinct values
//         const distinctStates = await cities.distinct("state_name");
//         console.log("Distinct states:", distinctStates);

//         // 9. Count documents
//         const count = await cities.countDocuments({ state_name: "Andhra Pradesh" });
//         console.log(`Number of cities in Andhra Pradesh: ${count}`);

//         // 10. Find a single document
//         const singleCity = await cities.findOne({ name: "Ellore" });
//         console.log("Single city:", singleCity);
//     } catch (error) {
//         console.error("Error:", error);
//     } finally {
//         await client.close();
//     }
// }

// run();
