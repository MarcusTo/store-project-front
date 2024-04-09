const Invoice = require("../models/invoice.model.js");
const Product = require('../models/product.model');

const getInvoices = async (req, res) => {
    try {
      const invoices = await Invoice.find({}).populate('products');
      res.status(200).json(invoices);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const getInvoice = async (req, res) => {
    try {
      const { id } = req.params;
      const invoice = await Invoice.findById(id).populate('products');
      res.status(200).json(invoice);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const createInvoice = async (req, res) => {
    try {
      const { name, mail, phoneNumber, address, info, totalPrice, productIds } = req.body;
  
      // Fetch product details from the database
      const products = await Product.find({ _id: { $in: productIds } });
  
      const invoice = new Invoice({
        name,
        mail,
        phoneNumber,
        address,
        info,
        totalPrice,
        products: products.map(product => product._id)
      });
  
      await invoice.save();
      res.status(200).json(invoice);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const updateInvoice = async (req, res) => {
  try {
    const { id } = req.params;

    const invoice = await Invoice.findByIdAndUpdate(id, req.body);

    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    const updatedInvoice = await Invoice.findById(id);
    res.status(200).json(updatedInvoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteInvoice = async (req, res) => {
  try {
    const { id } = req.params;

    const invoice = await Invoice.findByIdAndDelete(id);

    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    res.status(200).json({ message: "Invoice deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getInvoices,
  getInvoice,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};