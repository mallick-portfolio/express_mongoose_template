const mongoose = require("mongoose");
const dbConnection = async () => {
  try {
    const res = await mongoose.connect(process.env.DATABASE);
    if (res) {
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};


module.exports = dbConnection;
