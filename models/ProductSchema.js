const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide the product name"],
      minLength: [3, "Name should be greater than 10 character"],
      maxLength: [100, "Can't support up 100 character"],
      unique: [true, "Name must be unique"],
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs"],
        message: "unit value can't {VALUE} must be kg/pcs/liter",
      },
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "Quantity can't be negative"],
      validate: {
        validator: (value) => {
          if (!Number.isInteger(value)) {
            return false;
          } else {
            return true;
          }
        },
      },
      message: "Quantity must be integer",
    },
    status: {
      type: String,
      required: true,
      enum: ["in-stock", "out-of-stock", "discontinue"],
    },
    // supplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Supplier",
    // },
    // categories: [
    //   {
    //     name: {
    //       type: String,
    //       required: true,
    //     },
    //     _id: mongoose.Schema.Types.ObjectId,
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

ProductSchema.pre("save", function (next) {
  if (this.quantity == 0) {
    this.status = "out-of-stock";
  }
  next();
});

ProductSchema.methods.logger = function () {
  console.log(`product name is ${this.name}`);
};

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
