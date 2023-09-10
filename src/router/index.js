import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/Home";

Vue.use(Router);

export default new Router({
  linkActiveClass: "header-link-active",
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/",
      redirect: "/home"
    }
  ]
});
