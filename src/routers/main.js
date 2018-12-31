import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
//import { commonRouter } from "./common";
import commonRouter from "./common";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    }
  ].concat(commonRouter)
});
