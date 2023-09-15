<template>
  <div class="child1">
    <div class="title">
      <span class="en">{{ $route.meta.enName }}</span>
      <span class="ja">{{ $route.meta.jaName }}</span>
    </div>
    <section class="section1">
      <div class="section-left">
        <h2 class="txt-wrapper">
          <span class="txt">会社概要</span>
        </h2>
      </div>
      <div class="section-right">
        <Client
          :sourceData="client.items1.sourceData"
          :type="client.items1.type"
          :styleCustom="styleCustom"
        />
      </div>
    </section>
    <section class="section1">
      <div class="section-left">
        <h2 class="txt-wrapper">
          <span class="txt">主要取引先</span>
        </h2>
      </div>
      <div class="section-right">
        <Client
          :sourceData="client.items3.sourceData"
          :type="client.items3.type"
          :iconClass="client.items3.iconClass"
        />
      </div>
    </section>
    <section class="section1">
      <div class="section-left">
        <h2 class="txt-wrapper">
          <span class="txt">事業内容</span>
        </h2>
      </div>
      <div class="section-right">
        <Client
          :sourceData="client.items2.sourceData"
          :type="client.items2.type"
        />
        <p>他多数（敬称略・順不同）</p>
      </div>
    </section>
  </div>
</template>

<script>
import Client from "@/components/Client/Client";

export default {
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "株式会社dreaMTank ITソリューション、ソフトウェア開発、アプリケーション開発"
      }
    ],
    title: `会社概要 | dreaMTank株式会社`
  },
  name: "MyTest02CompanyChild1",
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
                "〒389-0111 長野県北佐久郡軽井沢町大字長倉5933番地5",
                "TEL. 0267-46-9877",
                "〒224-0003 神奈川県横浜市中川中央1-35-16 マイキャッスルセンター北202室",
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
      }
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
  .section2
    .section-right
      // flex:1
      width: 75%
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
      width: 75%
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
        .btn1
          .btn1-txt
            font-size: 100%

@media (min-width: 640px)
  .child1
    max-width: 640px;
@media (min-width: 768px)
  .child1
    max-width: 768px;
@media (min-width: 1024px)
  .child1
    max-width: 1024px;

@media (min-width: 1280px)
  .child1
    max-width: 1280px
</style>
