const Product = require("../models/ProductSchema.js");
const productService = require("../services/productServices.js");

module.exports.getProduct = async (req, res, next) => {
  try {
    const result = await productService.getProduct();
    res.status(200).json({
      status: true,
      message: "Product get successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.creatNewProduct = async (req, res, next) => {
  try {
    const result = await productService.createNewProduct(req.body);

    res.status(200).json({
      status: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
