const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
const bodyParser = require('body-parser');
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.routes.js");
const userRoute = require("./routes/user.routes.js");
const authRoute = require("./routes/auth.js");
const cartRoute = require("./routes/cart.routes.js");
const invoiceRoute = require("./routes/invoice.routes.js");
const stripeRoute = require("./routes/stripe.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/invoices", invoiceRoute);
app.use("/api/checkout", stripeRoute);

app.post('/', (req, res) => {
  const requestData = req.body; 
  console.log('Received data:', requestData);
  res.status(200).send('Data received successfully');
});

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});

mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster007.hcbcpka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster007"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on http://localhost:3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });