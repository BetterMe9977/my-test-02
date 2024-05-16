<template>
  <div class="child3">
    <div class="title">
      <span class="en">{{ $route.meta.enName }}</span>
      <span class="ja">{{ $route.meta.jaName }}</span>
    </div>
    <section class="section1">
      <div class="section-left">
        <p class="txt-wrapper">
          <span class="txt">PRODUCT</span>
          01
        </p>
      </div>
      <div class="section-right">
        <h2 class="title">ラーニングサポートサービス</h2>
        <p class="p1">
          ラーニングにおける様々な場面で、ナレッジ習得のための最適な提案をAIにより学習者へ提供するWebサービスです。
        </p>
        <ul class="img-wrapper">
          <li v-for="p in productList" :key="p.src">
            <img :data-src="p.src" loading="lazy" :src="p.src" :alt="p.alt" />
            <p>
              {{ p.p.t1 }}
              <br />
              {{ p.p.t2 }}
            </p>
          </li>
        </ul>

        <div v-for="s in sceneList" :key="s.t3.span">
          <h3 class="t3">
            <span class="bold">{{ s.t3.span }}</span>
            {{ s.t3.txt }}
          </h3>
          <p class="p1">
            {{ s.p1 }}
          </p>
        </div>
        <Client :sourceData="clientType3SourceData" type="Type3" />
      </div>
    </section>
  </div>
</template>

<script>
import product01 from "@/views/Services/img/product-01.jpg";
import product02 from "@/views/Services/img/product-02.jpg";
import product03 from "@/views/Services/img/product-03.jpg";
import product04 from "@/views/Services/img/product-04.jpg";
import product05 from "@/views/Services/img/product-05.jpg";
import product06 from "@/views/Services/img/product-06.jpg";

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
    title: `自社製品 | 千誠国際⽇本語学校`
  },
  name: "MyTest02ServicesChild3",
  components: {
    Client
  },

  data() {
    return {
      productList: [
        {
          src: product01,
          p: {
            t1: "ナレッジのポイントの",
            t2: "自動解析"
          },
          alt: "ナレッジのポイントの自動解析"
        },
        {
          src: product02,
          p: {
            t1: "学習者の習慣や",
            t2: "癖の分析"
          },
          alt: "学習者の習慣や癖の分析"
        },
        {
          src: product03,
          p: {
            t1: "ラーニング計画",
            t2: "作成"
          },
          alt: "ラーニング計画作成"
        },
        {
          src: product04,
          p: {
            t1: "ラーニングコンテンツ",
            t2: "提供"
          },
          alt: "ラーニングコンテンツ提供"
        },
        {
          src: product05,
          p: {
            t1: "学習履歴の",
            t2: "蓄積・分析"
          },
          alt: "学習履歴の蓄積・分析"
        },
        {
          src: product06,
          p: {
            t1: "パーソナルヘルパー",
            t2: "提供"
          },
          alt: "パーソナルヘルパー提供"
        }
      ],
      sceneList: [
        {
          t3: {
            span: "SCENE.1",
            txt: "学生の学習"
          },
          p1:
            "エビングハウスの忘却曲線を利用し、新知識の学習ポイントを個人の学習力に合わせて自動解析し、予習・復習などをサポートします。"
        },
        {
          t3: {
            span: "SCENE.2",
            txt: "新入社員教育"
          },
          p1:
            "研修内容と新人の適応能力を総合的に自動分析し、学習効果の高い研修計画を提案、より早く成長できるようにサポートします。"
        },
        {
          t3: {
            span: "SCENE.3",
            txt: "社会人教育"
          },
          p1:
            "新知識や新技術（特にIT業界）を自動解析し、学習者個人の好き嫌いや学習習慣に合わせて、知能的・効率的に学習できるようにサポートします。"
        }
      ],
      clientType3SourceData: [
        {
          th: "言語",
          p: ["Python、Go、Java"]
        },
        {
          th: "サーバ",
          p: ["CentOS、Ubantu、Windowss、AWS、SB Cloud"]
        },
        {
          th: "運用方式",
          p: ["1. OSS公開", "2. 一般企業へのカスタマイズ（有料）"]
        },
        {
          th: "サポート端末",
          p: ["iOS/Android、Apple Watch/Android Wear、Web、HoloLensなど"]
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
.child3
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
        span
          display: inline-block;
          font-family: 'Roboto Condensed', sans-serif;
          font-size: 70%;
          line-height: 1;
          letter-spacing: 0.1em;
          color: #111;
          margin-right: 0.8em;
          vertical-align: middle;
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
        flex-wrap: wrap
        width: 100%;
        margin-bottom: 40px;
        display: flex
        li:last-child
          margin-right: 0;
        li
          width: 30%;
          margin: 0 1.66%;
          background: #F0F0F0;
          // padding: 20px 0;
          border-radius: 4px;
          margin-bottom: 20px;
          padding-bottom: 20px
          img
            display: block;
            width: 100%;
            margin: 0 auto 20px auto;
          p
            font-weight: bold;
            line-height: 1.6;
            text-align: center;
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
  .child3
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
          margin-bottom: 30px
          flex-wrap: wrap
          li
            width: 46%;
            margin: 0 2%;
            margin-bottom: 20px;
            // img
            //   margin: 0 auto;


@media (max-width: 767px)
  .child3
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
            width: 100%;
            margin: 0 0 20px 0;
        .ul1
          flex-wrap: wrap
          margin-bottom: 40px

          li
            width: 100%;
          li:nth-child(2),
          li:nth-child(3)
            border-top: none;


// @media (min-width: 640px)
//   .child3
//     max-width: 640px;
</style>
