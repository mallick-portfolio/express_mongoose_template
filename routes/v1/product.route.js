const express = require("express");
const productController = require("../../controller/product.controller.js");
const router = express.Router();

router
  .route("/")
  .get(productController.getProduct)
  .post(productController.creatNewProduct)
  .patch()
  .delete();
module.exports = router;
