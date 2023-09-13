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
                name: "開発実績"
              },
              {
                path: "child3",
                name: "自社製品"
              },
              {
                path: "child4",
                name: "特長"
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
            jaName: "開発実績",
            enName: "ACHIEVEMENT",
            childs: [
              {
                path: "child1",
                name: "ソリューション"
              },
              {
                path: "child2",
                name: "開発実績"
              },
              {
                path: "child3",
                name: "自社製品"
              },
              {
                path: "child4",
                name: "特長"
              }
            ]
          }
        },
        {
          path: "child3",
          name: "自社製品",
          component: () => import("@/views/Services/components/Child3"),
          meta: {
            parent: {
              jaName: "事業内容",
              enName: "SERVERICES",
              path: "/services"
            },
            jaName: "自社製品",
            enName: "PRODUCT",
            childs: [
              {
                path: "child1",
                name: "ソリューション"
              },
              {
                path: "child2",
                name: "開発実績"
              },
              {
                path: "child3",
                name: "自社製品"
              },
              {
                path: "child4",
                name: "特長"
              }
            ]
          }
        },
        {
          path: "child4",
          name: "特長",
          component: () => import("@/views/Services/components/Child4"),
          meta: {
            parent: {
              jaName: "事業内容",
              enName: "SERVERICES",
              path: "/services"
            },
            jaName: "特長",
            enName: "FEATURE",
            childs: [
              {
                path: "child1",
                name: "ソリューション"
              },
              {
                path: "child2",
                name: "開発実績"
              },
              {
                path: "child3",
                name: "自社製品"
              },
              {
                path: "child4",
                name: "特長"
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
                name: "経営理念"
              },
              {
                path: "child3",
                name: "組織図"
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
          name: "経営理念",
          component: () => import("@/views/Company/components/Child2"),
          meta: {
            parent: {
              jaName: "企業情報",
              enName: "COMPANY",
              path: "/company"
            },
            jaName: "経営理念",
            enName: "POLICY",
            childs: [
              {
                path: "child1",
                name: "会社概要"
              },
              {
                path: "child2",
                name: "経営理念"
              },
              {
                path: "child3",
                name: "組織図"
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
          name: "組織図",
          component: () => import("@/views/Company/components/Child3"),
          meta: {
            parent: {
              jaName: "企業情報",
              enName: "COMPANY",
              path: "/company"
            },
            jaName: "組織図",
            enName: "ORGANIZATION",
            childs: [
              {
                path: "child1",
                name: "会社概要"
              },
              {
                path: "child2",
                name: "経営理念"
              },
              {
                path: "child3",
                name: "組織図"
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
                name: "経営理念"
              },
              {
                path: "child3",
                name: "組織図"
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
