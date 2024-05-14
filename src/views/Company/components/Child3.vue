<template>
  <div class="child3">
    <div class="title">
      <span class="en">{{ $route.meta.enName }}</span>
      <span class="ja">{{ $route.meta.jaName }}</span>
    </div>
    <section class="section1">
      <div class="section-left">
        <h2 class="txt-wrapper">
          <span class="txt">組織図</span>
        </h2>
      </div>
      <div class="section-right">
        <img :src="companyOrg" :data-src="companyOrg" loading="lazy" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
import companyOrg from "../img/company-org.gif";

export default {
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "株式会社軽井沢オッペンハイムグループ ITソリューション、ソフトウェア開発、アプリケーション開発"
      }
    ],
    title: `組織図 | 株式会社軽井沢オッペンハイムグループ`
  },
  name: "MyTest02CompanyChild3",

  data() {
    return {
      companyOrg
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus" scoped>
.child3
  // margin-bottom: 60px
  .title
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
    margin-bottom: 40px;
    .en
      display: block;
      font-family: 'Roboto Condensed', sans-serif;
      font-weight: 700;
      font-size: 38px;
      color: #111;
      letter-spacing: 0.06em;
    .ja
      display: inline-block;
      line-height: 1;
      letter-spacing: 0.06em;
      padding: 0 20px;
      border-left: 1px solid #333;
      border-right: 1px solid #333;
  .section2
    .section-right
      // width 75%
  .section2,
  .section1
    display: flex
    justify-content: space-around
    margin-bottom: 60px
    .section-left
      width 17%
      .txt-wrapper
        font-weight: bold;
        text-align: center;
        line-height: 1.6;
        letter-spacing: 0.06em;
        border-top: 3px solid #111;
        padding-top: 0.8em;
        margin-bottom: 30px;
        font-size: 100%
    .section-right
      width 75%
      img
        max-width: 100%;
        height: auto;
        vertical-align: top;
@media screen and (max-width: 1039px)
  .child3
    .title
      margin-bottom: 30px
      .en
        font-size: 32px
    // .section2
    //   .section-right

    .section2,
    .section1
      margin-bottom: 50px;
      .section-left
        width: 20%;
        .txt-wrapper
          font-size: 100%
      // .section-right
      //   width: 72%;



@media (max-width: 767px)
  .child3
    .title
      .en
        font-size: 26px
      .ja
        padding: 0 15px;
    .section2,
    .section1
      flex-wrap: wrap
      margin-bottom: 40px;
      .section-left
        width 100%
        .txt-wrapper
          border-top: none;
          padding-top: 0;
          margin-bottom: 30px;
          .txt
            display: inline-block;
            background: #111;
            color: #FFF;
            padding: 0.4em 2em;
            border-radius: 20px;
      .section-right
        width: 100%;
        .title
          font-size: 120%;
          font-weight: bold;
          line-height: 1.6;
          text-align: center;
          margin-bottom: 25px;
</style>
