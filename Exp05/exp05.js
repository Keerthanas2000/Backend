let express = require("express");
let mysql = require("mysql2");
let app = express();

app.use(express.json());

// define connection
const Connection_info = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Samsung@2000",
  port: 3306,
  database: "test",
});

// connection phase

Connection_info.connect((err) =>
  err ? console.log("Connection error") : console.log(" Connection Success ")
);

const Customer_regFunc = (email, customer_name, address, callback) => {
  let query =
    "Insert into customers(email, customer_name, address) values(?,?,?)";

  Connection_info.query(
    query,
    [email, customer_name, address],
    (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, "Success");
      }
    }
  );
};

app.post("/login", (req, res) => {
  let { email, customer_name, address } = req.body;

  Customer_regFunc(email, customer_name, address, (err) => {
    if (err) {
      res.status(500).json({
        error: "DB ERROR",
      });
    } else {
      res.status(200).json({ message: "User registerd successfully" });
    }
  });
});

app.listen(3000, () => {
  console.log("Runnning in port 3000");
});
