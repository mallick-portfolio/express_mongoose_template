const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const dbConnection = require("./server.js");
const producterRouter = require("./routes/v1/product.route.js");
const errorHandler = require("./middleware/errorHandler.js");
const port = process.env.PORT || 5000;
const app = express();

dotenv.config();

// middleware
app.use(cors());
app.use(express.json());

// Database Connection
dbConnection();

// Route
app.use("/api/v1/product", producterRouter);

app.get("/", (req, res) => {
  res.send("welcome to our inventory");
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});

app.use(errorHandler);
module.exports = app;
