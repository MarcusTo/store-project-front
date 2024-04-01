const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        name: {
            type: String,
            required: true,
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
              required: true,
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
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);