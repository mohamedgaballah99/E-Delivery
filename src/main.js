import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.css";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
import "../src/js/plugins.js";
