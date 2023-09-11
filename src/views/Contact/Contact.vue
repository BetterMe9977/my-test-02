<template>
  <div class="contact">
    <div class="contact-content">
      <Particles :routeName="$route.name" />
      <div class="main-content bg-img">
        <div class="content-wrapper bx">
          <div class="content-box">
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
  name: "MyTest02Contact",
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
.contact
  .contact-content
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
  .contact
    .contact-content
      .main-content
        .content-wrapper
          .content-box
            width: auto;
            padding: 20px 40px 80px 40px;

@media screen and (max-width: 767px)
  .contact
    .contact-content
      .main-content
        padding: 0 15px
        .content-wrapper
          .content-box
            width: auto;
            padding: 20px 20px 60px 20px
</style>
