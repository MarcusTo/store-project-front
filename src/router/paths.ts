export enum ROUTE_PATHS {
  HOME = "/",
  
  PRODUCTS = "/products",
  PRODUCT_DETAILS = "/products/:id",
  
  IPHONE = "/iphone", 
  NEW_IPHONE="/iphone/:id",
  // NEW_USED_IPHONE= "/iphone/new-or-used/:productName/:_id",
  // USED_IPHONE="/iphone/used/:productName/:productId",

  AIRPODS = "/airpods",
  NEW_AIRPODS="/airpods/:id",
  // NEW_USED_AIRPODS= "/airpods/:productName/:id",

  MAC = "/mac",
  NEW_MAC="/mac/:id",
  // NEW_USED_MAC= "/mac/new-or-used/:productName/:productId",
  // USED_MAC="/mac/used/:productName/:productId",
  
  SERVICES = "/services",
  CART = "/cartView",
  TO_CART= "/added-to-cart",
  CHECKOUT = "/checkout",
  LOGIN = "/login",
  REGISTER = "/register",
  ORDERS = "/orders",
  ABOUT = "/about",
  CONTACT = "/contact",
  ProductsDatabase = "/ProductsDatabase"
}

export default { ROUTE_PATHS };