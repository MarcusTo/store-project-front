const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.routes.js");
const userRoute = require("./routes/user.routes.js");
const authRoute = require("./routes/auth.js");
const cartRoute = require("./routes/cart.routes.js");
const orderRoute = require("./routes/order.routes.js");
const stripeRoute = require("./routes/stripe.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
// routes
app.use("/api/products", productRoute);


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
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });