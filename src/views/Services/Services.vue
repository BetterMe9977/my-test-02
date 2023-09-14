<template>
  <div class="services">
    <div class="services-content">
      <Particles />
      <div class="main-content bg-img">
        <div class="content-wrapper bx">
          <div class="content-box">
            <RouteNav :childs="this.$route.meta.childs" />
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Particles from "@/components/Particles/Particles";
import RouteNav from "@/components/RouteNav/RouteNav";
export default {
  name: "MyTest02Services",
  components: {
    Particles,
    RouteNav
  },
  data() {
    return {
      routeNavList: [
        {
          path: ""
        }
      ]
    };
  },
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "株式会社dreaMTank ITソリューション、ソフトウェア開発、アプリケーション開発"
      }
    ],
    title: `ソリューション | dreaMTank株式会社`
  },

  mounted() {
    this.$toTopHandler();
    // console.log(this.$route);

    // console.log(this.$route.meta.childs);
  },

  methods: {}
};
</script>

<style lang="stylus" scoped>
.services
  .services-content
    .main-content
      width: 100%;
      padding: 0 25px;
      overflow: hidden
      box-sizing: border-box;
      .content-wrapper
        background-color: #fff
        .content-box
          padding: 20px 60px 100px 60px
@media screen and (max-width: 1039px)
  .services
    .services-content
      .main-content
        .content-wrapper
          .content-box
            width: auto;
            padding: 20px 40px 80px 40px;

@media screen and (max-width: 767px)
  .services
    .services-content
      .main-content
        padding: 0 15px
        .content-wrapper
          .content-box
            width: auto;
            padding: 20px 20px 60px 20px
</style>
