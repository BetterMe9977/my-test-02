<template>
  <div class="child4">
    <div class="title">
      <span class="en">{{ $route.meta.enName }}</span>
      <span class="ja">{{ $route.meta.jaName }}</span>
    </div>
    <section v-for="s in sectionList" :key="s.id" class="section1">
      <div class="section-left">
        <p class="txt-wrapper">
          <span class="txt">{{ s.left.txt }}</span>
          {{ s.left.index }}
        </p>
      </div>
      <div class="section-right">
        <h2 class="title">{{ s.right.title }}</h2>
        <p class="p1">
          {{ s.right.p1 }}
        </p>
        <h4 class="btn1">
          <span class="btn1-txt">{{ s.right.btn1Txt }}</span>
        </h4>
        <Client
          :sourceData="s.right.client.items2.sourceData"
          :type="s.right.client.items2.type"
          :iconClass="s.right.client.items2.iconClass"
        />
      </div>
    </section>
  </div>
</template>

<script>
import services01 from "@/views/Services/img/services-01.jpg";

import Client from "@/components/Client/Client";

export default {
  name: "MyTest02ServicesChild4",
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "株式会社dreaMTank ITソリューション、ソフトウェア開発、アプリケーション開発"
      }
    ],
    title: `特長 | dreaMTank株式会社`
  },
  components: {
    Client
  },

  data() {
    return {
      services01,
      sectionList: [
        {
          id: 1,
          left: { index: "01", txt: "FEATURE" },
          right: {
            title: "Flutter開発に経験と実績多数",
            p1:
              "Flutter（フラッター）は、Googleによって開発されたフリーかつオープンソースのUIのSDKである。",
            btn1Txt: "POINT",
            client: {
              items2: {
                sourceData: [
                  "認定アーキクトと認定プログラマが多数所属",
                  "豊富な参画経験と実績",
                  "システムとアプリ構築・開発・運用保守のワンストップ対応"
                ],
                type: "Type2",
                iconClass: "icon-gou"
              }
            }
          }
        },
        {
          id: 2,
          left: { index: "02", txt: "FEATURE" },
          right: {
            title: "大規模システム開発",
            p1:
              "長年の業務経験によるノウハウ・技術力により大規模・複雑なシステム開発案件にも対応可能です。",
            btn1Txt: "POINT",
            client: {
              items2: {
                sourceData: [
                  "豊富な開発実績",
                  "開発体制、マネージメント力、豊富な上流SE、高度な技術力",
                  "100人月規模の開発対応"
                ],
                type: "Type2",
                iconClass: "icon-gou"
              }
            }
          }
        },
        {
          id: 3,
          left: { index: "03", txt: "FEATURE" },
          right: {
            title: "請負開発",
            p1:
              "お客様のニーズに合わせたシステムを高品質・短納期・低コストで開発いたします。",
            btn1Txt: "POINT",
            client: {
              items2: {
                sourceData: [
                  "豊富な開発実績",
                  "独自の開発資産：見積り資産、試験ツール",
                  "体制管理：高いマネージメント力、経験豊富な設計者、高い製造品質",
                  "高品質・短納期・低コスト"
                ],
                type: "Type2",
                iconClass: "icon-gou"
              }
            }
          }
        },
        {
          id: 4,
          left: { index: "04", txt: "FEATURE" },
          right: {
            title: "オフショア開発体制",
            p1:
              "日中のグループ総合力を活用した高品質なオフショア開発が可能です。",
            btn1Txt: "POINT",
            client: {
              items2: {
                sourceData: [
                  "日本法人を中心として日中グループ全体が一体化",
                  "日本側と中国側の人材シフトモデル、リソース共有",
                  "中国子会社側では日本の企業文化や管理ノウハウを身につけた管理者と技術者が多数在籍"
                ],
                type: "Type2",
                iconClass: "icon-gou"
              }
            }
          }
        },
        {
          id: 5,
          left: { index: "05", txt: "FEATURE" },
          right: {
            title: "先端技術への取り組み",
            p1:
              "ブロックチェーン先端技術推進部は社内プロジェクトの技術支援及び対外共同研究や新技術に関する調査・研究をメインタスクとする組織です。いち早くクラウド新技術を取り組むと同時に、新たな環境・手法・プラットフォーム等においても継続的に調査・推進を行っております。ビッグデータPRAにおいては、UipathとBizRobo!の実務経験をもち、Uipath認定試験合格者が多数所属しております。",
            btn1Txt: "POINT",
            client: {
              items2: {
                sourceData: [
                  "ブロックチェン",
                  "クラウド",
                  "ビッグデータ",
                  "RPA",
                  "IOT"
                ],
                type: "Type2",
                iconClass: "icon-gou"
              }
            }
          }
        }
      ]
    };
  },

  mounted() {
    // console.log(this.$route);
  },

  methods: {}
};
</script>

<style lang="stylus" scoped>
.child4
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
  .info-img
    max-width: 400px;
    // height 400px
    display: block;
    margin: 0 auto 50px auto;
    border-radius: 100%
  .section1,
  .section2,
  .section3

    margin-bottom: 60px
    display: flex
    .section-left
      width 25%
      .txt-wrapper
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 50px;
        font-weight: bold;
        text-align: center;
        color: #111;
        line-height: 1.2;
        letter-spacing: 0.06em;
        margin: 0 auto 30px auto;
        .txt
          display: block;
          font-size: 14px;
          color: #111;
    .section-right
      flex: 1
      .title
        font-size: 163%;
        font-weight: bold;
        line-height: 1.6;
        margin-bottom: 25px;
        text-align: left
      .p1
        margin-bottom: 30px
      .flow-wrapper
        width: 240px;
        margin: 0 auto 50px auto;
        .item-wrapper:after
          position: absolute;
          content: '';
          width: 34px;
          height: 23px;
          background: url(../../../assets/img/icon-down-arrow.png) 0 0 no-repeat;
          background-size: 34px 23px;
          bottom: 2px;
          left: 50%;
          margin-left: -17px;
        .item-wrapper:last-child:after
          height: 45px;
          background: none;
        .item-wrapper
          width: 100%;
          height: 75px;
          position: relative;
          .item
            display: inline-block;
            width: 100%;
            height: 42px;
            line-height: 42px;
            text-align: center;
            font-size: 100%;
            background: #F0DFE0;
            border-radius: 4px;
      .t3
        font-size: 125%;
        font-weight: bold;
        line-height: 1.6;
        border-left: 5px solid #111;
        padding-left: 0.6em;
        margin-bottom: 25px;
      .btn1
        margin-bottom: 20px;
        font-size: 100%
        .btn1-txt
          display: inline-block;
          font-size: 113%;
          font-weight: normal;
          color: #FFF;
          line-height: 1.5;
          background: #888;
          padding: 0.4em 0.8em;
          border-radius: 4px;
      .it-list
        width: 100%;
        border-collapse: separate;
        margin-bottom: 40px
        tr
          display: flex
          th
            width: 25%;
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
      .img-wrapper
        width: 100%;
        margin-bottom: 50px;
        display: flex
        li:last-child
          margin-right: 0;
        li
          margin-right: 3%;
          img
            width: 120px;
        li:nth-child(2)
          img
            width 105px
        li:nth-child(3)
          img
            width 55px
        li:nth-child(4)
          img
            width 100px
        li:nth-child(5)
          img
            width 75px
        li:nth-child(6)
          img
            width 85px
      .ul1
        width: 100%;
        display: flex
        margin-bottom: 50px
        li
          border-bottom: 1px solid #E7E7E2;
          border-top: 1px solid #E7E7E2;
          padding: 0.6em 0;
          width: 33.3%;
          .iconfont
            margin-right: 0.4em;
  .section2
    .ul2
      width: 100%;
      li
        line-height: 1.6;
        padding: 0.6em 0.8em;
        background: #F0F0F0;
        border-radius: 4px;
        margin-bottom: 15px;
        padding-left: 2em;
        text-indent: -1em;

@media screen and (max-width: 1039px)
  .child4
    margin-bottom: 50px;
    .title
      margin-bottom: 30px
      .en
        font-size: 32px
    .section1,
    .section2,
    .section3

      margin-bottom: 50px
      .section-left
        width: 20%;
        .txt-wrapper
          font-size: 46px;
      .section-right
        width: 72%;
        .img-wrapper
          flex-wrap: wrap
          li
            width: 33.3% !important;
            margin-right: 0;
            margin-bottom: 15px;
            img
              margin: 0 auto;


@media (max-width: 767px)
  .child4
    margin-bottom: 40px;
    .title
      .en
        font-size: 26px
      .ja
        padding: 0 15px;
    .info-img
      // height: 320px;
      width: 100%;
    .section1,
    .section2,
    .section3

      margin-bottom: 40px
      flex-wrap: wrap
      .section-left
        width 100%
        .txt-wrapper
          font-size: 38px;
          margin: 0 auto 20px auto;
          .txt
            font-size: 12px
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
        .img-wrapper
          flex-wrap: wrap
          li
            width: 50% !important;
            height: 50px !important;
            margin-bottom: 0 !important;
        .ul1
          flex-wrap: wrap
          margin-bottom: 40px

          li
            width: 100%;
          li:nth-child(2),
          li:nth-child(3)
            border-top: none;


// @media (min-width: 640px)
//   .child4
//     max-width: 640px;
</style>
