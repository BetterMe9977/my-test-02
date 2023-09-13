<template>
  <ul class="type2">
    <li v-for="(data, index) in sourceData" :key="index">
      <slot name="icon"></slot>
      {{ data }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "MyTest02ClientType2",
  props: {
    sourceData: {
      type: Array,
      default: () => [],
      require: true
    }
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus" scoped>
.type2
  width: 100%;
  li
    line-height: 1.6;
    padding: 0.6em 0.8em;
    background: #F0F0F0;
    border-radius: 4px;
    margin-bottom: 15px;
    padding-left: 2em
    text-indent: -1em
</style>
