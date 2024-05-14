<template>
  <div class="child1">
    <section class="section1">
      <div class="section-left">
        <div class="title">
          <span class="en">{{ $route.meta.enName }}</span>
          <span class="ja">{{ $route.meta.jaName }}</span>
        </div>
        <p>
          dreaMTankは、革新的な精神を持つIT会社で、私たちの経営理念は顧客を中心に据え、高品質の技術ソリューションとサービスを提供することに焦点を当てています。
        </p>
      </div>
      <div class="section-right">
        <img :data-src="company01" loading="lazy" :src="company01" alt="" />
      </div>
    </section>
    <section class="section2">
      <div class="section-left">
        <div class="title">
          <span class="en">MESSAGE</span>
          <span class="ja">ご挨拶</span>
        </div>
      </div>
      <div class="section-right">
        <p class="p1">
          わたしたちは、技術・情報・人がさまざまな形で結びつき、融合するすることで、今までにない新たな価値を生み出すと考えています。その価値創造の土台となるべく、日々先進の技術にチャレンジし、社会の発展に貢献します。
        </p>
        <p class="p2">
          独自の開発体制によるコンサルティングと情報システム開発をさらにスピードアップさせ、新たな分野へ挑戦によって、イノベーションを実現します。
        </p>
        <p class="p3">
          <img
            :data-src="companySign"
            loading="lazy"
            :src="companySign"
            alt=""
          />
        </p>
      </div>
    </section>
    <!-- <section class="section3">
      <h2 class="origin-wrapper">
        <p>dreaMTank</p>
        <span class="bold">ドリームタンク由来</span>
      </h2>
      <p>
        <br />
      </p>
    </section> -->
  </div>
</template>

<script>
import Client from "@/components/Client/Client";
import company01 from "../img/company-01.jpg";
import companySign from "../img/company-sign.jpg";

export default {
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "株式会社dreaMTank ITソリューション、ソフトウェア開発、アプリケーション開発"
      }
    ],
    title: `経営理念 | dreaMTank株式会社`
  },
  name: "MyTest02CompanyChild12",
  components: {
    Client
  },

  data() {
    return {
      client: {
        items1: {
          sourceData: [
            {
              th: "商号",
              p: ["dreaMTank株式会社（略称：MT）"]
            },
            {
              th: "役員",
              p: ["代表取締役社長　李拯東"]
            },
            {
              th: "所在地",
              p: [
                "〒389-0111 長野県北佐久郡軽井沢町大字長倉５９３３ー５",
                "TEL. 0267-46-9877",
                "\u3000",
                "〒389-0207 長野県北佐久郡御代田町大字馬瀬口１４９７ー１７",
                "カリビアンプラザ２０１室と１０５室",
                "TEL. 0267-31-0097",
                "\u3000",
                "〒224-0003 神奈川県横浜市都筑区中川中央１ー３５ー１６",
                "マイキャッスルセンター北２０２室",
                "TEL. 045-507-5873"
              ]
            },
            {
              th: "設立",
              p: ["2014年5月"]
            },
            {
              th: "事業年度",
              p: ["5月～4月末"]
            }
          ],
          type: "Type3",
          iconClass: "icon-ziyuan"
        },
        items2: {
          sourceData: [
            "SES事業",
            "請負開発事業",
            "オフショア開発事業",
            "グローバル人材事業"
          ],
          type: "Type1"
          // iconClass: "icon-ziyuan"
        },
        items3: {
          sourceData: [
            "富士ソフト株式会社",
            "日鉄ソリューションズ株式会社",
            "株式会社システナ"
          ],
          type: "Type1",
          iconClass: "icon-ziyuan"
        }
      },
      styleCustom: {
        // width: "15%"
        // 这里可以动态设置样式属性和值
        // textAlign: "center" // 例如，这里设置了文本居中
        // 可以根据需要添加其他样式属性和值
      },
      company01,
      companySign
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus" scoped>
.child1
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
  .section3
    width: auto;
    padding: 50px 60px 40px 60px;
    background: #F3F3F3;
    .origin-wrapper
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center
      margin-bottom: 40px
      p
        font-weight: bold;
        text-align: center;
        line-height: 1.6;
        margin-bottom: 10px;
        font-size: 24px
      span
        display: inline-block;
        line-height: 1;
        color: #111;
        letter-spacing: 0.06em;
        padding: 0 20px;
        border-left: 1px solid #111;
        border-right: 1px solid #111;
  .section2
    .section-right
      // flex:1
      width: 75%
      .p1
        margin-bottom: 20px
      .p2
        margin-bottom: 30px
      .p3
        position: relative
        height 70px
        img
          position: absolute
          max-width: 100%;
          height: auto;
          vertical-align: top;
          display: block;
          width: 244px;
          right: -20px
  .section2,
  .section1
    display: flex
    // justify-content: space-around
    justify-content: space-between
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
      // flex:1
      width: 65%
      img
        display: block;
        width: 100%;
        max-width: 440px;
        margin: 0 auto;
        height: auto;
@media screen and (max-width: 1039px)
  .child1
    .title
      margin-bottom: 30px
      .en
        font-size: 32px
    // .section2
    //   .section-right
    //     .client
    //       li
    //         width 100%
    .section3
      padding: 40px;
      .origin-wrapper
        margin-bottom: 35px
    .section2,
    .section1
      margin-bottom: 50px;
      .section-left
        width: 20%;
        .txt-wrapper
          font-size: 100%
      .section-right
        width: 72%;






@media (max-width: 767px)
  .child1
    .title
      .en
        font-size: 26px
      .ja
        padding: 0 15px;
    .info-img
      height: 320px;
      width: 100%;
    .section3
      padding: 30px 20px 20px 20px;
      .origin-wrapper
        margin-bottom: 30px
        p
          font-size: 20px
        span
          font-size: 14px
          padding: 0 14px;
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
        .t3
          font-size: 113%;
        .p3
          height 50px
          img
            width 220px


// @media (min-width: 640px)
//   .child1
//     max-width: 640px;
// @media (min-width: 768px)
//   .child1
//     max-width: 768px;
// @media (min-width: 1024px)
//   .child1
//     max-width: 1024px;

// @media (min-width: 1280px)
//   .child1
//     max-width: 1280px
</style>
