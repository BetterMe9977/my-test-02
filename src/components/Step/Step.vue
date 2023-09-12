<template>
  <div class="step-warpper">
    <p class="step1" :class="currentEle === 'Child1' ? 'active' : ''">
      入力画面
    </p>
    <p class="step2" :class="currentEle === 'Child2' ? 'active' : ''">
      確認画面
    </p>
    <p class="step3" :class="currentEle === 'Child3' ? 'active' : ''">
      送信完了
    </p>
  </div>
</template>

<script>
export default {
  name: "MyTest02Step",
  props: {
    currentEle: {
      type: String,
      require: true,
      default: "child1"
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
.step-warpper
  margin-bottom: 50px;
  position: relative;
  display: flex
  .step1,
  .step2,
  .step3
    width: 30%;
    height: 50px;
    display: flex
    justify-content: center
    align-items: center
    font-size: 125%;
    color: #111
    background: #F0DFE0;
  .step1:after
    content: '';
    position: absolute;
    top: 0;
    left: 30%;
    height: 0;
    width: 0;
    border: solid 25px transparent;
    border-left-color: #F0DFE0;
  .step1
    margin-right: 5%;
  .step2:after
    content: '';
    position: absolute;
    top: 0;
    left: 65%;
    height: 0;
    width: 0;
    border: solid 25px transparent;
    border-left-color: #F0DFE0;
  .step2
    margin-right: 5%;
    color: #111;
  .active
    background: #df0011;
    color: #FFF;
  .active:after
    border-left-color: #DF0011
@media screen and (max-width: 767px)
  .step-warpper
    margin-bottom: 30px
    .step1,
    .step2,
    .step3
      width: 28%;
      height: 40px;
      font-size: 100%

    .step1:after
      left: 28%;
      border: solid 20px transparent;
      border-left-color: #F0DFE0;
    .step1
    .step2
      margin-right: 7%;
    .step2:after
      left: 63%;
      border: solid 20px transparent;
      border-left-color: #F0DFE0;
    .active:after
      border-left-color: #DF0011;
</style>
