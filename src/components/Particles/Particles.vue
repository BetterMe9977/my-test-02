<template>
  <div class="particles-container">
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="70"
      shapeType="circle"
      :particleSize="1"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="190"
      :moveSpeed="3"
      class="particles-content"
    >
    </vue-particles>
    <div class="title" v-if="$route.meta.enName || $route.meta.parent.enName">
      <span class="txt">{{
        $route.meta.enName || $route.meta.parent.enName
      }}</span>
      {{ $route.meta.jaName || $route.meta.parent.jaName }}
    </div>
    <BreadNav />
  </div>
</template>

<script>
import BreadNav from "@/components/BreadNav/BreadNav";
export default {
  name: "MyTest02Particles",
  components: {
    BreadNav
  },

  data() {
    return {};
  },

  mounted() {
    console.log(4444);
    console.log(this.$route);
  },

  methods: {}
};
</script>

<style lang="stylus" scoped>
.particles-container
  width: 100%;
  height: 320px;
  background: #504D4B;
  overflow: hidden
  position: relative;
  .title
    width: 500px;
    position: absolute;
    z-index: 2;
    top: 21%;
    left: 50%;
    margin-left: -250px;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.7;
    color: #FFF;
    text-align: center;
    letter-spacing: 0.06em;
    .txt
      display: block;
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 700;
      font-size: 48px;
      letter-spacing: 0.06em;
  .particles-content
    width: 100%;
    height: 320px;
    z-index: 1

@media screen and (max-width:1039px)
  .particles-container
    height 290px
    .particles-content
      height 290px
    .title
      top: 20%
      .txt
        font-size: 44px
@media screen and (max-width: 767px)
  .particles-container
    height 240px
    .particles-content
      height 240px
    .title
      width: 320px;
      top: 20%;
      margin-left: -160px;
      font-size: 16px
      .txt
        font-size: 32px
</style>
