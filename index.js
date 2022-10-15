const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./utils/dbConnection.js");
const port = process.env.PORT || 5000;
const app = express();

dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

dbConnection((err) => {
  if (!err) {
    app.listen(port, () => {
      console.log("db connection successfull");
    });
  } else {
    console.log(err);
  }
});
