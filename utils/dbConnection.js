const mongoose = require("mongoose");
const dbConnection = async (handleError) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
  } catch (error) {
    handleError(error);
  }
};

module.exports = dbConnection;
