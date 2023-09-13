import Vue from "vue";
Vue.prototype.$toTopHandler = function() {
  console.log(11);
  const targetElement = document.getElementById("top");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
