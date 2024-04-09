const mongoose = require("mongoose");

const InvoiceSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    mail: {
       type: String,
       required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
      type: String,
      required: true,
    },
    info: {
        type: String,
        required: false,
    },
    totalPrice: {
        type: Number,
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }]
  },
  {
    timestamps: true,
  }
);

const Invoice = mongoose.model("Invoice", InvoiceSchema);

module.exports = Invoice;