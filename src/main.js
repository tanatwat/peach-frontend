import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

window.axios = require('axios')
// Firebase
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbUk1EQWc_ng-sk1WT4L0UqjAWN2c6Mk0",
  authDomain: "peach-web.firebaseapp.com",
  databaseURL: "https://peach-web.firebaseio.com",
  projectId: "peach-web",
  storageBucket: "peach-web.appspot.com",
  messagingSenderId: "354335409771",
  appId: "1:354335409771:web:2dce97c011d83a6a"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

Vue.prototype.$db = db


import { firestorePlugin } from "vuefire";

Vue.use(firestorePlugin);

AOS.init({
  duration: 700,
  once: true
});

import axios from 'axios'
Vue.prototype.$http = axios
// Vue.prototype.$http = axios.create({
//   baseURL: 'http://localhost:9000',
//   headers: {
//     Authorization: null
//   }
// });

Vue.config.productionTip = false;

new Vue({
  data() {
    return {
      page: "home",
      loading: false
    };
  },
  router,
  render: h => h(App)
}).$mount("#app");
