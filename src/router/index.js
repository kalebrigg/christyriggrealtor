import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AboutChristy from "../views/AboutChristy";
import Listings from "../views/Listings";
import Testimonials from "../views/Testimonials";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/AboutChristy",
    name: "AboutChristy",
    component: AboutChristy,
  },
  {
    path: "/Listings",
    name: "Listings",
    component: Listings,
  },
  {
    path: "/Testimonials",
    name: "Testimonials",
    component: Testimonials,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
