export enum ROUTE_PATHS {

  ALLCOMPONENTS = "/Components",
  COMPONENTS = "/Components/:id",

  IPHONE = "/apple/iphone", 
  NEW_IPHONE="/apple/iphone/:id",

  AIRPODS = "/apple/airpods",
  NEW_AIRPODS="/apple/airpods/:id",

  MAC = "/apple/mac",
  NEW_MAC="/apple/mac/:id",

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