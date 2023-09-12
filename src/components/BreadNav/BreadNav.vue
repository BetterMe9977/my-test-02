<template>
  <div class="bread">
    <div class="bread-nav-wrapper bx">
      <ul class="nav-container">
        <router-link to="/" class="icon-home">
          <img :src="iconHome" class="home" alt="" />
        </router-link>

        <router-link
          :to="
            $route.name === 'Contact' ? $route.path : $route.meta.parent.path
          "
          class="item"
        >
          <span class="right-arrow iconfont" style="font-weight: 100;">
            &#xe62b;</span
          >
          {{
            $route.name === "Contact"
              ? $route.meta.jaName
              : $route.meta.parent.jaName
          }}
        </router-link>
        <router-link
          v-if="!($route.name === 'Contact')"
          :to="$route.path"
          class="item"
        >
          <span class="right-arrow iconfont" style="font-weight: 100;"
            >&#xe62b;</span
          >
          <span class="bold">{{ $route.meta.jaName }}</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import iconHome from "@/assets/img/icon-home.png";
export default {
  name: "MyTest02BreadNav",
  props: {},

  data() {
    return {
      iconHome
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus" scoped>
.bread
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 25px
  .bread-nav-wrapper
    height: 70px;
    background: #FFF;
    .nav-container
      display: flex
      height 100%
      align-items: center
      padding: 0 60px;
      .icon-home
        .home
          width: 16px
          height: 16px
      .item:last-child
        font-weight: 700
      .item
        font-size: 14px
        color: #111
        display: flex
        justify-content: center
        align-items: center
        .right-arrow
          padding: 0 15px

@media screen and (max-width: 1039px)
  .bread
    .bread-nav-wrapper
      .nav-container
        padding: 0 40px


@media screen and (max-width: 767px)
  .bread
    height: 60px;
    padding: 0 15px;
    .bread-nav-wrapper
      height 60px
      .nav-container
        padding: 0 20px;
        .item
          font-size: 12px
          margin-top: 4px;
          .right-arrow
            padding: 0 4px
</style>
