<template>
  <header class="header">
    <router-link class="header-logo" to="/">
      <img class="logo-icon" :src="logoIcon" alt="" srcset="" />
      <span class="logo-txt">株式会社軽井沢オッペンハイムグループ</span>
    </router-link>
    <nav class="nav">
      <router-link
        class="nav-item"
        :to="nav.path"
        v-for="nav in dataSource"
        :key="nav.path"
      >
        <span class="nav-item-title">{{ nav.title }}</span>
        <span>{{ nav.enTite }}</span>
      </router-link>
    </nav>
  </header>
</template>

<script>
import logoIcon from "../../assets/img/icon-log.jpeg";
export default {
  name: "MyTest02Header",
  props: {
    dataSource: {
      type: Array,
      require: true,
      default: () => []
    }
  },

  data() {
    return {
      logoIcon
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus" scoped>
.header
  display: flex
  overflow: hidden
  background: linear-gradient(to bottom, #ffffff 0%,#f3f3f3 100%);
  // padding-left: 15%
  height 70px
  align-items: center
  justify-content: space-around
  position: sticky;
  top: 0;
  z-index: 300;
  .header-logo
    display: flex
    align-items: center
    font-size: 24px
    .logo-icon
      border-radius: 100%
      margin-right: 6px
    .logo-txt
      font-size: 24px
      font-weight: 700
      color: #111
  .nav
    display: flex
    align-items: center
    height 100%
    .nav-item
      width: 130px
      color: #111;
      font-weight: 700;
      padding: 20px 0;
      transition: all 0.5s ease;
      display: flex
      align-items: center
      justify-content: center
      height 100%
      flex-direction: column
      .nav-item-title
        // margin-bottom: 5px
        line-height: 1
    .nav-item:hover,
    .link-active
      background-color: #111
      // background-image: linear-gradient(to right, #DD7B0F 0%, #DE1B10 51%, #DD7B0F 100%)
      color: #fff !important
      box-sizing: border-box
      background-size: 200% auto
@media screen and (max-width:1039px)
  .header
    height 60px
    .nav
      .nav-item
        width 90px
@media screen and (max-width: 767px)
  .header
    .nav
      display: none
    .header-logo
      .logo-txt
        font-size: 16px
</style>
