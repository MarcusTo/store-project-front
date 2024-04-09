const express = require("express");
const Invoice = require("../models/invoice.model.js");
const router = express.Router();
const {getInvoices, getInvoice, createInvoice, updateInvoice, deleteInvoice} = require('../controllers/invoice.controller.js');
const stripe = require('stripe')(process.env.STRIPE_KEY);


router.get('/', getInvoices);
router.get("/:id", getInvoice);

router.post("/", createInvoice);

// update a product
router.put("/:id", updateInvoice);

// delete a product
router.delete("/:id", deleteInvoice);




module.exports = router;