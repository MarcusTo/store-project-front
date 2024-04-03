export enum ROUTE_PATHS {

  ALLCOMPONENTS = "/Components",
  COMPONENTS = "/Components/:id",

  IPHONE = "/iphone", 
  NEW_IPHONE="/iphone/:id",

  AIRPODS = "/airpods",
  NEW_AIRPODS="/airpods/:id",

  MAC = "/mac",
  NEW_MAC="/mac/:id",

  HOME = "/",
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