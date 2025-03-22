const { BSON } = require("bson");

const json = { name: "Keerthana", age: "22" };

//json to bson

const Bsondata = BSON.serialize(json);

console.log("Bsondata", Bsondata);

//bson to json

const jsondata = BSON.deserialize(Bsondata);

console.log("jsondata", jsondata);
