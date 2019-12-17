import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueNumber from "vue-number-animation";
Vue.use(VueNumber);
import SequentialEntrance from "vue-sequential-entrance";
import "vue-sequential-entrance/vue-sequential-entrance.css";
Vue.use(SequentialEntrance);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
