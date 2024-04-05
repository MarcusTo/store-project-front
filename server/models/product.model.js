const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    //userId: { 
    //  type: String, 
    //  required: true 
    //},
    name: {
      type: String,
    },
    price: {
       type: Number,
       required: true,
       default: 0,
    },
    memory: {
        type: Number,
        required: true,
        default: 0,
    },
    color: {
      type: [String],
      required: true,
    },
    description: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;