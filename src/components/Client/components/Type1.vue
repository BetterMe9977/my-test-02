<template>
  <ul class="client">
    <li v-for="(data, index) in sourceData" :key="index">
      <slot name="icon"></slot>
      {{ data }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "MyTestClientType1",
  props: {
    sourceData: {
      type: Array,
      default: () => []
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
.client
  margin-bottom: 20px;
  width: 100%;
  display: flex
  flex-wrap: wrap
  li:nth-child(1),
  li:nth-child(2)
    border-top: 1px solid #E7E7E2;
  li
    width 50%
    border-bottom: 1px solid #E7E7E2;
    padding: 0.6em 0

@media screen and (max-width: 1039px)
  .client
    li
      width 100%
    li:nth-child(2)
      border-top: none
</style>
