<template>
  <div class="services">
    <div class="services-content">
      <Particles />
      <div class="main-content bg-img">
        <div class="content-wrapper bx">
          <div class="content-box">
            <div class="route-nav">
              <router-link to="child1" class="item">child1</router-link>
              <router-link to="child2" class="item">child2</router-link>
              <router-link to="child3" class="item">child3</router-link>
              <router-link to="child4" class="item">child4</router-link>
            </div>
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
export default {
  name: "MyTest02Services",
  components: {
    Particles
  },

  data() {
    return {};
  },

  mounted() {
    console.log(this.$route);
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
          .route-nav
            text-align: center;
            height: 55px;
            margin: 0 auto 40px auto
            display: flex
            align-items: center
            .link-active
              color: #FFF !important;
              background: #888 !important;
            .item
              height 100%
              width: 25%
              border-right: 1px solid #FFF;
              transition: all 0.5s ease
              display: flex
              align-items: center
              justify-content: center
              color: #111
              background: #E8E8E8;
            .item:first-child
              border-radius: 30px 0 0 30px
            .item:last-child
              border-radius: 0 30px 30px 0;
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
            padding: 20px 20px 60px 20px;
            .route-nav
              text-align: center;
              height: auto;
              margin: 0 auto 40px auto;
              flex-wrap: wrap
              .item
                width 100%
                line-height: 44px;
                border-bottom: 1px solid #FFF;
                border-right: 0;
              .item:first-child
                border-radius: 4px 4px 0 0;
              .item:last-child
                border-radius: 0 0 4px 4px;
</style>
