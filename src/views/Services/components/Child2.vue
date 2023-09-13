<template>
  <div class="child2">
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
        <Client
          :sourceData="s.right.client.items1.sourceData"
          :type="s.right.client.items1.type"
          :iconClass="s.right.client.items1.iconClass"
        />
        <p class="p1">
          {{ s.right.p1.t1 }}
          <br />
          {{ s.right.p1.t2 }}
        </p>
        <p class="logo1">
          <img :src="s.right.logo1.src" :alt="s.right.logo1.alt" srcset="" />
        </p>
        <Client
          :sourceData="s.right.client.items3.sourceData"
          :type="s.right.client.items3.type"
        />

        <h3 class="t3">
          {{ s.right.t3 }}
        </h3>
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
import services06 from "@/views/Services/img/services-06.jpg";
import services03 from "@/views/Services/img/services-03.jpg";
import services04 from "@/views/Services/img/services-04.jpg";
import services05 from "@/views/Services/img/services-05.jpg";

import Client from "@/components/Client/Client";

export default {
  name: "MyTest02ServicesChild2",
  components: {
    Client
  },

  data() {
    return {
      services01,
      services06,
      services03,
      services04,
      services05,
      sectionList: [
        {
          id: 1,
          left: { index: "01", txt: "CASE" },
          right: {
            title: "次世代ECサイト開発・運用",
            client: {
              items1: {
                sourceData: [
                  "クラウド（AWS）",
                  "AP基盤設計",
                  "データ移行",
                  "EC業務"
                ],
                type: "Type1",
                iconClass: "icon-ziyuan"
              },
              items2: {
                sourceData: [
                  "技術方式検討",
                  "AWSインフラ・AP基盤の設計と構築",
                  "要件定義、移行設計、製造、検証"
                ],
                type: "Type2",
                iconClass: "icon-ziyuan"
              },
              items3: {
                sourceData: [
                  {
                    th: "プラットフォーム",
                    p: "AWS（EC2、ECS、Postgres RDS、Redis、S3、Route53）"
                  },
                  {
                    th: "開発言語",
                    p: "Go、Java8、Python"
                  },
                  {
                    th: "その他",
                    p: "Spring boot、Apache Kafka、Docker、Jenkins、Terraform"
                  }
                ],
                type: "Type3",
                iconClass: "icon-ziyuan"
              }
            },
            p1: {
              t1:
                "大手メーカーの次世代ECサイト開発にて、新技術の利用方式検討および検証、インフラ・AP基盤の構築を担当しました。",
              t2:
                "また、ECサイトの価格管理、販売管理、在庫管理、注文管理など幅広く業務部分も担当しています。"
            },
            logo1: {
              src: services06,
              alt: "次世代ECサイト開発・運用"
            },
            t3: "担当領域"
          }
        },
        {
          id: 2,
          left: { index: "02", txt: "CASE" },
          right: {
            title: "エレベーター監視システム（IOT）",
            client: {
              items1: {
                sourceData: ["IOT", "技術方式検討", "アジャイル開発"],
                type: "Type1",
                iconClass: "icon-ziyuan"
              },
              items2: {
                sourceData: ["技術方式検討", "要件定義～保守運用まで全工程"],
                type: "Type2",
                iconClass: "icon-ziyuan"
              },
              items3: {
                sourceData: [
                  {
                    th: "プラットフォーム",
                    p: "IOT（ThingWorx）"
                  },
                  {
                    th: "開発言語",
                    p: "Python、Java"
                  },
                  {
                    th: "その他",
                    p:
                      "Hadoop、Apache Sspark、Apache Storm、Apache Kafka、MongoDB、Apache Cassandra、NoSQL/KVS"
                  }
                ],
                type: "Type3",
                iconClass: "icon-ziyuan"
              }
            },
            p1: {
              t1: "エレベーターの異常監視システムをアジャイルで開発。",
              t2:
                "情報収集の技術方式検討および検証、サーバ構築と情報分析アプリの開発を担当しました。"
            },
            logo1: {
              src: services03,
              alt: "エレベーター監視システム（IOT）"
            },
            t3: "担当領域"
          }
        },
        {
          id: 3,
          left: { index: "03", txt: "CASE" },
          right: {
            title: "RPAロボット自動化開発",
            client: {
              items1: {
                sourceData: ["RPA", "BizRobo!", "プロトタイプ作成"],
                type: "Type1",
                iconClass: "icon-ziyuan"
              },
              items2: {
                sourceData: [
                  "RPAの方式検討（インプット、アウトプットおよび開発工程の策定）",
                  "プロトタイプ作成",
                  "開発"
                ],
                type: "Type2",
                iconClass: "icon-ziyuan"
              },
              items3: {
                sourceData: [
                  {
                    th: "プラットフォーム",
                    p: "BizRobo!/BasicRobo（Kofax Kapow）"
                  },
                  {
                    th: "開発言語",
                    p: "Java、VB、HTML"
                  },
                  {
                    th: "その他",
                    p: "OCR、Json、正規表現、MySQL、Management Consoleサーバ"
                  }
                ],
                type: "Type3",
                iconClass: "icon-ziyuan"
              }
            },
            p1: {
              t1:
                "大手銀行のバックオフィス作業をRPAで代替し業務自動化を図る開発です。数多くの定型業務の自動化を実施しました。",
              t2:
                "例：住宅ローン申請者が提出した身分証明書（住民票や免許証等7種類、PDFやJPEG等のデータ）から情報を取り込み、既存のSalesforceシステムに自動登録"
            },
            logo1: {
              src: services05,
              alt: "RPAロボット自動化開発"
            },
            t3: "担当領域"
          }
        },
        {
          id: 4,
          left: { index: "04", txt: "CASE" },
          right: {
            title: "公共事業の販売・決済システム",
            client: {
              items1: {
                sourceData: ["請負開発", "提案書作成!", "自社独自試験ツール"],
                type: "Type1",
                iconClass: "icon-ziyuan"
              },
              items2: {
                sourceData: [
                  "クレジットカード決済業務を基本設計から運用保守まで担当",
                  "製造・試験を請負開発で実施。自社独自の試験用ツールを導入する"
                ],
                type: "Type2",
                iconClass: "icon-ziyuan"
              },
              items3: {
                sourceData: [
                  {
                    th: "プラットフォーム",
                    p: "Terasoluna、iOS、Android"
                  },
                  {
                    th: "開発言語",
                    p: "Java、HTML、CSS3、jQuery"
                  },
                  {
                    th: "その他",
                    p: "GitHub"
                  }
                ],
                type: "Type3",
                iconClass: "icon-ziyuan"
              }
            },
            p1: {
              t1:
                "大手銀行のバックオフィス作業をRPAで代替し業務自動化を図る開発です。数多くの定型業務の自動化を実施しました。",
              t2:
                "例：住宅ローン申請者が提出した身分証明書（住民票や免許証等7種類、PDFやJPEG等のデータ）から情報を取り込み、既存のSalesforceシステムに自動登録"
            },
            logo1: {
              src: services04,
              alt: "エレベーター監視システム（IOT）"
            },
            t3:
              "公共事業における新規WEBシステム内のクレジットカード決済サービスを担当しました。"
          }
        }
      ]
    };
  },

  mounted() {
    console.log(this.$route);
  },

  methods: {}
};
</script>

<style lang="stylus" scoped>
.child2
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
      .logo1
        margin-bottom: 50px
        img
          display: block;
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
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
      // .it-list
      //   width: 100%;
      //   border-collapse: separate;
      //   margin-bottom: 40px
      //   tr
      //     display: flex
      //     th
      //       width: 25%;
      //       vertical-align: top;
      //       padding: 5px 0;
      //       text-align: left
      //     td
      //       flex: 1
      //       padding: 5px 0;
      //       vertical-align: top;
      //       p
      //         border-left: 1px solid #E3B2B6;
      //         padding-left: 50px;
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
  .section1
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
  .child2
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
  .child2
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
        // .it-list
        //   margin-bottom: 30px
        //   tbody
        //     width 100%
        //     tr
        //       width 100%
        //       flex-wrap: wrap
        //       th
        //         width 100%
        //         background: #ECE8E6;
        //         font-weight: bold;
        //         padding: 10px 10px;
        //         border: 1px solid #ECE8E6;
        //         width: 100%;
        //       td
        //         padding: 10px 10px;
        //         border: 1px solid #ECE8E6;
        //         width: 100%;
        //         p
        //           border-left: none;
        //           padding-left: 0;
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
//   .child2
//     max-width: 640px;
</style>
