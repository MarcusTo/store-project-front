import { ROUTE_PATHS } from "@/router/paths";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: ROUTE_PATHS.IPHONE,
    name: ROUTE_PATHS.IPHONE,
    component: () => import("@/views/IPhone/Iphone.vue"),
  },
  {
    path: ROUTE_PATHS.NEW_IPHONE,
    name: ROUTE_PATHS.NEW_IPHONE,
    component: () => import("@/views/IPhone/NewIphoneView.vue"),
    props: true, 
  },
  {
    path: ROUTE_PATHS.AIRPODS,
    name: ROUTE_PATHS.AIRPODS,
    component: () => import("@/views/AirPods/Airpods.vue"),
  },
  {
    path: ROUTE_PATHS.NEW_AIRPODS,
    name: ROUTE_PATHS.NEW_AIRPODS,
    component: () => import('@/views/AirPods/NewAirpods.vue')
  },
  {
    path: ROUTE_PATHS.MAC,
    name: ROUTE_PATHS.MAC,
    component: () => import("@/views/MacBook/Mac.vue"),
  },
  {
    path: ROUTE_PATHS.NEW_MAC,
    name: ROUTE_PATHS.NEW_MAC,
    component: () => import("@/views/MacBook/NewMacView.vue"),
  },
  {
    path: ROUTE_PATHS.COMPONENTS,
    name: ROUTE_PATHS.COMPONENTS,
    component: () => import("@/views/ComputerComponents/Component.vue"),
  },
  {
    path: ROUTE_PATHS.ALLCOMPONENTS,
    name: ROUTE_PATHS.ALLCOMPONENTS,
    component: () => import("@/views/ComputerComponents/AllComponents.vue"),
  },
  {
    path: ROUTE_PATHS.NEW_MAC,
    name: ROUTE_PATHS.NEW_MAC,
    component: () => import("@/views/MacBook/NewMacView.vue"),
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