<template>
  <div class="recruit">
    <div class="recruit-content">
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
  name: "MyTest02Recruit",
  components: {
    Particles,
    RouteNav
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus" scoped>
.recruit
  .recruit-content
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
  .recruit
    .recruit-content
      .main-content
        .content-wrapper
          .content-box
            width: auto;
            padding: 20px 40px 80px 40px;

@media screen and (max-width: 767px)
  .recruit
    .recruit-content
      .main-content
        padding: 0 15px
        .content-wrapper
          .content-box
            width: auto;
            padding: 20px 20px 60px 20px
</style>
