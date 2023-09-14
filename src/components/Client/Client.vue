<template>
  <component :sourceData="sourceData" :styleCustom="styleCustom" :is="type">
    <template v-if="iconClass" #icon>
      <span class="iconfont" :class="iconClass"></span>
    </template>
  </component>
</template>

<script>
import Type1 from "@/components/Client/components/Type1";
import Type2 from "@/components/Client/components/Type2";
import Type3 from "@/components/Client/components/Type3";

export default {
  name: "MyTest02Client",
  components: {
    Type1,
    Type2,
    Type3
  },
  props: {
    sourceData: {
      type: Array,
      default: () => [],
      require: true
    },
    type: {
      type: String,
      default: "Type1",
      require: true
    },
    iconClass: {
      type: String,
      default: ""
    },
    styleCustom: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus" scoped></style>
