import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import listings from "./listingData.js";

Vue.config.productionTip = false;

let data = {
  listings: listings,
};

new Vue({
  router,
  data,
  render: (h) => h(App),
}).$mount("#app");
