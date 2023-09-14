<template>
  <table class="type3">
    <tbody>
      <tr v-for="(data, index) in sourceData" :key="index">
        <th :style="styleCustom">{{ data.th }}</th>
        <td>
          <p v-for="p in data.p" :key="p">{{ p }}</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "MyTest02ClientType3",
  props: {
    sourceData: {
      type: Array,
      default: () => []
    },
    styleCustom: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {};
  },

  mounted() {
    // console.log(this.styleCustom);
  },

  methods: {}
};
</script>

<style lang="stylus" scoped>
.type3
  width: 100%;
  border-collapse: separate;
  margin-bottom: 40px
  tr
    display: flex
    th
      width: 25%
      vertical-align: top;
      padding: 5px 0;
      text-align: left
    td
      flex: 1
      padding: 5px 0;
      vertical-align: top;
      p
        border-left: 1px solid #E3B2B6;
        padding-left: 50px
@media (max-width: 767px)
  .type3
    margin-bottom: 30px
    tbody
      width 100%
      tr
        width 100%
        flex-wrap: wrap
        th
          width 100% !important
          background: #ECE8E6;
          font-weight: bold;
          padding: 10px 10px;
          border: 1px solid #ECE8E6;
          width: 100%;
        td
          padding: 10px 10px;
          border: 1px solid #ECE8E6;
          width: 100%;
          p
            border-left: none;
            padding-left: 0;
</style>
