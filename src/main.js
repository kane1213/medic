import Vue from "vue";
import App from "./App.vue";
import router from "./routers/main";
import store from "./store";

import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css';
import "./compons";

Vue.config.productionTip = false;




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

