export enum ROUTE_PATHS {

  IPHONE = "/apple/iphone", 
  NEW_IPHONE="/apple/iphone/:id",

  AIRPODS = "/apple/airpods",
  NEW_AIRPODS="/apple/airpods/:id",

  MAC = "/apple/mac",
  NEW_MAC="/apple/mac/:id",

  APPLEWATCH = "/apple/applewatch",
  NEW_APPLEWATCH = "/apple/applewatch/:id",

  VISIONPRO = "/apple/visionpro",
  NEW_VISIONPRO = "/apple/visionpro/:id",

  PARTS = "/ComputerParts",
  NEW_PART = "/ComputerParts/:id",

  ANDROID = "/Android",
  NEW_ANDROID = "/Android/:id",

  BUSINESSCLASS = "/BusinessClass",
  NEW_BUSINESSCLASS = "/BusinessClass/:id",

  GAMINGCOMPUTERS = "/GamingComputer",
  NEW_GAMINGCOMPUTER = "/GamingComputer/:id",

  GEAR = "/Gear",
  NEW_GEAR = "Gear/:id",

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