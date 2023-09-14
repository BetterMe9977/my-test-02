<template>
  <div class="route-nav">
    <router-link
      v-for="child in childs"
      :to="child.path"
      :key="child.path"
      class="item"
      >{{ child.name }}</router-link
    >
  </div>
</template>

<script>
export default {
  name: "MyTest02RouteNav",
  props: {
    childs: {
      type: Array,
      require: true,
      default: () => []
    }
  },

  data() {
    return {};
  },

  mounted() {
    // console.log(this.childs);
  },

  methods: {}
};
</script>

<style lang="stylus" scoped>
.route-nav
  text-align: center;
  height: 55px;
  margin: 0 auto 40px auto
  display: flex
  align-items: center
  justify-content: center
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

@media screen and (max-width: 767px)
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
