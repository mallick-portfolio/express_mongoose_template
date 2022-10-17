const Product = require("../models/ProductSchema.js");
exports.getProduct = async () => {
  const result = await Product.find({});
  return result;
};

exports.createNewProduct = async (data) => {
  const result = await Product.create(data);
  return result;
};
