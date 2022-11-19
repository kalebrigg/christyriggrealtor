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
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
        return {x: 0, y: 0}
    },
});

export default router;
