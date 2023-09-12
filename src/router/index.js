import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home/Home";
import Services from "@/views/Services/Services";
import Company from "@/views/Company/Company";
import Recruit from "@/views/Recruit/Recruit";
import Contact from "@/views/Contact/Contact";
Vue.use(Router);

export default new Router({
  linkActiveClass: "link-active",
  routes: [
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    // Services
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
            jaName: "ソリューション",
            enName: "SOLUTION",
            childs: [
              {
                path: "child1",
                name: "ソリューション"
              },
              {
                path: "child2",
                name: "Services-Child3"
              },
              {
                path: "child3",
                name: "Services-Child3"
              },
              {
                path: "child4",
                name: "Services-Child4"
              }
            ]
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
            jaName: "Services-child2",
            enName: "Services-CHILD2",
            childs: [
              {
                path: "child1",
                name: "ソリューション"
              },
              {
                path: "child2",
                name: "Services-Child3"
              },
              {
                path: "child3",
                name: "Services-Child3"
              },
              {
                path: "child4",
                name: "Services-Child4"
              }
            ]
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
            jaName: "Services-child3",
            enName: "Services-CHILD3",
            childs: [
              {
                path: "child1",
                name: "ソリューション"
              },
              {
                path: "child2",
                name: "Services-Child3"
              },
              {
                path: "child3",
                name: "Services-Child3"
              },
              {
                path: "child4",
                name: "Services-Child4"
              }
            ]
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
            jaName: "Services-child4",
            enName: "Services-CHILD4",
            childs: [
              {
                path: "child1",
                name: "ソリューション"
              },
              {
                path: "child2",
                name: "Services-Child3"
              },
              {
                path: "child3",
                name: "Services-Child3"
              },
              {
                path: "child4",
                name: "Services-Child4"
              }
            ]
          }
        },
        {
          path: "",
          redirect: "child1"
        }
      ]
    },
    // Company
    {
      path: "/company",
      name: "Company",
      meta: {
        jaName: "企業情報",
        enName: "COMPANY"
      },
      component: Company,
      children: [
        {
          path: "child1",
          name: "Company-Child1",
          component: () => import("@/views/Company/components/Child1"),
          meta: {
            parent: {
              jaName: "企業情報",
              enName: "COMPANY",
              path: "/company"
            },
            jaName: "会社概要",
            enName: "PROFILE",
            childs: [
              {
                path: "child1",
                name: "会社概要"
              },
              {
                path: "child2",
                name: "Company-Child2"
              },
              {
                path: "child3",
                name: "Company-Child3"
              },
              {
                path: "child4",
                name: "アクセス"
              }
            ]
          }
        },
        {
          path: "child2",
          name: "Company-Child2",
          component: () => import("@/views/Company/components/Child2"),
          meta: {
            parent: {
              jaName: "企業情報",
              enName: "COMPANY",
              path: "/company"
            },
            jaName: "Company-child2",
            enName: "Company-CHILD2",
            childs: [
              {
                path: "child1",
                name: "会社概要"
              },
              {
                path: "child2",
                name: "Company-Child2"
              },
              {
                path: "child3",
                name: "Company-Child3"
              },
              {
                path: "child4",
                name: "アクセス"
              }
            ]
          }
        },
        {
          path: "child3",
          name: "Company-Child3",
          component: () => import("@/views/Company/components/Child3"),
          meta: {
            parent: {
              jaName: "企業情報",
              enName: "COMPANY",
              path: "/company"
            },
            jaName: "Company-child3",
            enName: "Company-CHILD3",
            childs: [
              {
                path: "child1",
                name: "会社概要"
              },
              {
                path: "child2",
                name: "Company-Child2"
              },
              {
                path: "child3",
                name: "Company-Child3"
              },
              {
                path: "child4",
                name: "アクセス"
              }
            ]
          }
        },
        {
          path: "child4",
          name: "Company-Child4",
          component: () => import("@/views/Company/components/Child4"),
          meta: {
            parent: {
              jaName: "企業情報",
              enName: "COMPANY",
              path: "/company"
            },
            jaName: "アクセス",
            enName: "ACCESS",
            childs: [
              {
                path: "child1",
                name: "会社概要"
              },
              {
                path: "child2",
                name: "Company-Child2"
              },
              {
                path: "child3",
                name: "Company-Child3"
              },
              {
                path: "child4",
                name: "アクセス"
              }
            ]
          }
        },
        {
          path: "",
          redirect: "child1"
        }
      ]
    },
    // Recruit
    {
      path: "/recruit",
      name: "Recruit",
      meta: {
        jaName: "採用情報",
        enName: "RECRUIT"
      },
      component: Recruit,
      children: [
        {
          path: "child1",
          name: "Recruit-Child1",
          component: () => import("@/views/Recruit/components/Child1"),
          meta: {
            parent: {
              jaName: "採用情報",
              enName: "RECRUIT",
              path: "/recruit"
            },
            jaName: "中途採用情報",
            enName: "CAREER",
            childs: [
              {
                path: "child1",
                name: "中途採用情報"
              },
              {
                path: "child2",
                name: "新卒採用情報"
              }
            ]
          }
        },
        {
          path: "child2",
          name: "Recruit-Child2",
          component: () => import("@/views/Recruit/components/Child2"),
          meta: {
            parent: {
              jaName: "採用情報",
              enName: "RECRUIT",
              path: "/recruit"
            },
            jaName: "新卒採用情報",
            enName: "NEW GRADUATES",
            childs: [
              {
                path: "child1",
                name: "中途採用情報"
              },
              {
                path: "child2",
                name: "新卒採用情報"
              }
            ]
          }
        },
        {
          path: "",
          redirect: "child1"
        }
      ]
    },
    // contact
    {
      path: "/contact",
      name: "Contact",
      meta: {
        jaName: "お問い合わせ",
        enName: "CONTACT"
      },
      component: Contact
    },
    {
      path: "/",
      redirect: "/home"
    }
  ]
});
