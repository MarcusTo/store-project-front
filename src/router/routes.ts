import { ROUTE_PATHS } from "@/router/paths";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTE_PATHS.IPHONE,
    name: ROUTE_PATHS.IPHONE,
    component: () => import("@/views/Apple/IPhone/Iphone.vue"),
  },
  {
    path: ROUTE_PATHS.NEW_IPHONE,
    name: ROUTE_PATHS.NEW_IPHONE,
    component: () => import("@/views/Apple/IPhone/NewIphoneView.vue"),
    props: true, 
  },
  {
    path: ROUTE_PATHS.AIRPODS,
    name: ROUTE_PATHS.AIRPODS,
    component: () => import("@/views/Apple/AirPods/Airpods.vue"),
  },
  {
    path: ROUTE_PATHS.NEW_AIRPODS,
    name: ROUTE_PATHS.NEW_AIRPODS,
    component: () => import('@/views/Apple/AirPods/NewAirpods.vue')
  },
  {
    path: ROUTE_PATHS.MAC,
    name: ROUTE_PATHS.MAC,
    component: () => import("@/views/Apple/MacBook/Mac.vue"),
  },
  {
    path: ROUTE_PATHS.NEW_MAC,
    name: ROUTE_PATHS.NEW_MAC,
    component: () => import("@/views/Apple/MacBook/NewMacView.vue"),
  },
  {
    path: ROUTE_PATHS.APPLEWATCH,
    name: ROUTE_PATHS.APPLEWATCH,
    component: () => import("@/views/Apple/AppleWatch/AppleWatch.vue"),
  },
  {
    path: ROUTE_PATHS.NEW_APPLEWATCH,
    name: ROUTE_PATHS.NEW_APPLEWATCH,
    component: () => import("@/views/Apple/AppleWatch/NewWatch.vue"),
  },
  {
    path: ROUTE_PATHS.VISIONPRO,
    name: ROUTE_PATHS.VISIONPRO,
    component: () => import("@/views/Apple/VisionPro/VisionPro.vue"),
  },
  {
    path: ROUTE_PATHS.NEW_VISIONPRO,
    name: ROUTE_PATHS.NEW_VISIONPRO,
    component: () => import("@/views/Apple/VisionPro/NewVisionPro.vue"),
  },
  

// Computer parts

  {
    path: ROUTE_PATHS.PARTS,
    name: ROUTE_PATHS.PARTS,
    component: () => import("@/views/ComputerParts/Parts.vue"),
  },
  {
    path: ROUTE_PATHS.NEW_PART,
    name: ROUTE_PATHS.NEW_PART,
    component: () => import("@/views/ComputerParts/NewPart.vue"),
  },


  

  //End of Product Routes - Beginning of Other Routes

  
  {
    path: ROUTE_PATHS.HOME,
    name: ROUTE_PATHS.HOME,
    component: () => import("@/views/Other/Home.vue"),
  },
  {
    path: ROUTE_PATHS.ABOUT,
    name: ROUTE_PATHS.ABOUT,
    component: () => import("@/views/Other/About.vue"),
  },
  {
    path: ROUTE_PATHS.SERVICES,
    name: ROUTE_PATHS.SERVICES,
    component: () => import("@/views/Services/Services.vue"),
  },
  {
    path: ROUTE_PATHS.CART,
    name: ROUTE_PATHS.CART,
    component: () => import("@/views/Checkout/CartView.vue"),
  },
  {
    path: ROUTE_PATHS.CHECKOUT,
    name: ROUTE_PATHS.CHECKOUT,
    component: () => import("@/views/Checkout/CheckoutView.vue"),
  },
  {
    path: ROUTE_PATHS.ProductsDatabase,
    name: ROUTE_PATHS.ProductsDatabase,
    component: () => import("@/views/ProductsDatabase/Server.vue"),
    props: true, 
  },
];

export default routes;