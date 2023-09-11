import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/Home";
import Services from "@/views/Services/Services";

Vue.use(Router);

export default new Router({
  linkActiveClass: "link-active",
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/services",
      name: "Services",
      meta: {
        jaName: "事業内容",
        enName: "SERVERICES"
      },
      component: Services,
      children: [
        {
          path: "child1",
          name: "Services-Child1",
          component: () => import("@/views/Services/components/Child1"),
          meta: {
            parent: {
              jaName: "事業内容",
              enName: "SERVERICES",
              path: "/services"
            },
            jaName: "child1",
            enName: "CHILD2"
          }
        },
        {
          path: "child2",
          name: "Services-Child2",
          component: () => import("@/views/Services/components/Child2"),
          meta: {
            parent: {
              jaName: "事業内容",
              enName: "SERVERICES",
              path: "/services"
            },
            jaName: "child2",
            enName: "CHILD2"
          }
        },
        {
          path: "child3",
          name: "Services-Child3",
          component: () => import("@/views/Services/components/Child3"),
          meta: {
            parent: {
              jaName: "事業内容",
              enName: "SERVERICES",
              path: "/services"
            },
            jaName: "child3",
            enName: "CHILD3"
          }
        },
        {
          path: "child4",
          name: "Services-Child4",
          component: () => import("@/views/Services/components/Child4"),
          meta: {
            parent: {
              jaName: "事業内容",
              enName: "SERVERICES",
              path: "/services"
            },
            jaName: "child4",
            enName: "CHILD4"
          }
        },
        {
          path: "",
          redirect: "child1"
        }
      ]
    },
    {
      path: "/",
      redirect: "/home"
    }
  ]
});
