import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


AOS.init({
  duration: 700
});

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      page: 'home'
    }
  },
  router,
  render: h => h(App)
}).$mount("#app");
