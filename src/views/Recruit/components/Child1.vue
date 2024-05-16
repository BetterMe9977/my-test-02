<template>
  <div class="child1">
    <div class="title">
      <span class="en">{{ $route.meta.enName }}</span>
      <span class="ja">{{ $route.meta.jaName }}</span>
    </div>
    <section class="section1">
      <div class="section-left">
        <h2 class="txt-wrapper">
          <span class="txt">募集要項</span>
        </h2>
      </div>
      <div class="section-right">
        <Client
          :sourceData="client.items1.sourceData"
          :type="client.items1.type"
          :styleCustom="client.items1.styleCustom"
        />
        <p>その他募集職種：営業職、PMO補佐／ヘルプデスクなど</p>
      </div>
    </section>
    <section class="section1">
      <div class="section-left">
        <h2 class="txt-wrapper">
          <span class="txt">募集要項</span>
        </h2>
      </div>
      <div class="section-right">
        <Client
          :sourceData="client.items2.sourceData"
          :type="client.items2.type"
          :styleCustom="client.items2.styleCustom"
        />
        <p>その他募集職種：営業職、PMO補佐／ヘルプデスクなど</p>
      </div>
    </section>

    <section class="section2">
      <div class="section-left">
        <h2 class="txt-wrapper">
          <span class="txt">採用試験の流れ</span>
        </h2>
      </div>
      <div class="section-right" style="text-align: center;">
        <p class="p1">
          <span>採用試験の流れ</span>
        </p>
        <p class="p2">
          ①電話、②Email、にて応募受付を行っております。
          <br />
          応募を希望される方は以下の採用担当にご連絡ください。
          <br />
          詳しい説明をさせて頂きます。
        </p>
        <p class="p3">
          <span class="bold">[ 採用担当 ]</span>
          <br />
          人事部　採用担当者
          <br />
          ① 電話：
          <a href="tel:0267-41-6898">0267-41-6898</a>
          <br />
          ② Email：
          <a href="mailto:yamato.chihara@oppenheim.co.jp"
            >yamato.chihara@oppenheim.co.jp</a
          >
        </p>
        <p class="p4">
          <img :src="iconDownArrow" alt="" />
        </p>
        <p class="p1">
          2. 書類選考合格者に面談
        </p>
        <p class="p5">
          ご応募から内定までは1~2週間を予定しております。
          <br />
          面接日、入社日はご相談に応じます。お気軽にお問合せください。
        </p>
        <p class="p4">
          <img :src="iconDownArrow" alt="" />
        </p>
        <p class="p1">
          3. 結果のお知らせ
        </p>
        <p class="p6">
          結果については合否に関わらずご連絡致します。
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import iconDownArrow from "@/assets/img/icon-down-arrow.png";
import Client from "@/components/Client/Client";

export default {
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "千誠国際⽇本語学校"
      }
    ],
    title: `中途採用情報 | 千誠国際⽇本語学校`
  },
  name: "MyTest02RecruitChild1",
  components: {
    Client
  },

  data() {
    return {
      iconDownArrow,
      client: {
        items1: {
          sourceData: [
            {
              th: "募集職種",
              p: ["スマホネイティブアプリエンジニア"]
            },
            {
              th: "資格",
              p: ["スマホアプリエンジニアとしての経験が2年程度ある方"]
            },
            {
              th: "スキル",
              p: ["iOS-Swift、Android-Java、Android-Kotlin"]
            }
          ],
          type: "Type3",
          // iconClass: "icon-ziyuan",
          styleCustom: {
            width: "15%"
            // 这里可以动态设置样式属性和值
            // textAlign: "center" // 例如，这里设置了文本居中
            // 可以根据需要添加其他样式属性和值
          }
        },
        items2: {
          sourceData: [
            {
              th: "募集職種",
              p: ["システムエンジニア"]
            },
            {
              th: "資格",
              p: ["設計や開発経験が3年以上ある方"]
            },
            {
              th: "スキル",
              p: [
                "Java、C#、PHP、VueJS、ReactJS、NodeJS、HTML5、Javascript、Typescript、",
                "CSS、Ruby、Python、Go、C++、Unity",
                "OS：Windows、Mac OS、Linux、Ubuntu",
                "DB：MySQL、Oracle、NoSQL、postgresql、SQLServer、DB2",
                "クラウド：AWS、GCP、Azure"
              ]
            }
          ],
          type: "Type3",
          // iconClass: "icon-ziyuan",
          styleCustom: {
            width: "15%"
            // 这里可以动态设置样式属性和值
            // textAlign: "center" // 例如，这里设置了文本居中
            // 可以根据需要添加其他样式属性和值
          }
        }
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
      width 75%
      .p1
        display: block;
        width: 100%;
        max-width: 360px;
        line-height: 1.6;
        text-align: center;
        font-size: 113%;
        padding: 0.4em;
        background: #F0DFE0;
        border-radius: 4px;
        margin: 0 auto 20px auto;
      .p3
        margin-bottom: 20px
        a
          color: #DF0011;
          text-decoration: none;
          transition: all 0.4s ease;
      .p4
        margin-bottom: 20px
        display: flex;
        justify-content: center;
        img
          width 34px
      .p5
        margin-bottom: 20px

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
      width 75%
      // flex: 1
      .it-list
        width: 100%;
        border-collapse: separate;
        tr
          display: flex
          th
            width: 15%;
            vertical-align: top;
            padding: 5px 0;
            text-align: left
          td
            flex: 1
            padding: 5px 0;
            vertical-align: top;
            p
              border-left: 1px solid #E3B2B6;
              padding-left: 50px;
@media screen and (max-width: 1039px)
  .child1
    .title
      margin-bottom: 30px
      .en
        font-size: 32px
    .section2
      .section-right
        .client
          li
            width 100%

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
            background: #DF0011;
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
        .flow-wrapper
          margin: 0 auto 40px auto;
          .item-wrapper
            height 72px
        .t3
          font-size: 113%;
        .btn1
          .btn1-txt
            font-size: 100%
        .it-list
          margin-bottom: 30px
          tbody
            width 100%
            tr
              width 100%
              flex-wrap: wrap
              th
                width 100%
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
