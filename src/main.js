// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueParticles from "vue-particles";
import "./assets/utils/VueHooks/index.js";
import "./assets/utils/JQuery/jquery-3.4.1.min";
import "./assets/utils/ValidationEngine/jquery.validationEngine.min";
import "./assets/utils/ValidationEngine/languages/jquery.validationEngine-ja";
import "./assets/utils/Covervid/covervid.min";
import "./assets/css/normalize.styl";
import "./assets/css/common.styl";
import "./assets/css/validationEngine.jquery.styl";
import "./assets/css/iconfont.styl";
Vue.config.productionTip = false;
Vue.use(VueParticles);
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
