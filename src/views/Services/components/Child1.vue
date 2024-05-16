<template>
  <div class="child1">
    <div class="title">
      <span class="en">{{ $route.meta.enName }}</span>
      <span class="ja">{{ $route.meta.jaName }}</span>
    </div>
    <img :src="services01" alt="" class="info-img" />
    <section class="section1">
      <div class="section-left">
        <p class="txt-wrapper">
          <span class="txt">SOLUTION</span>
          01
        </p>
      </div>
      <div class="section-right">
        <h2 class="title">システムインテグレーション事業</h2>
        <p class="p1">
          業務分析やシステム最適化計画などのシステムコンサルティングから、システムの構築、運用、保守までトータルでサポートいたします。
        </p>
        <div class="flow-wrapper">
          <p class="item-wrapper">
            <span class="item">コンサルティング</span>
          </p>
          <p class="item-wrapper">
            <span class="item">要件定義・設計</span>
          </p>
          <p class="item-wrapper">
            <span class="item">開発・実装</span>
          </p>
          <p class="item-wrapper">
            <span class="item">テスト・導入</span>
          </p>
          <p class="item-wrapper">
            <span class="item">保守・運用</span>
          </p>
        </div>
        <h3 class="t3">
          システム開発
        </h3>
        <h4 class="btn1">
          <span class="btn1-txt">得意業務</span>
        </h4>
        <table class="it-list">
          <tbody>
            <tr>
              <th>金融</th>
              <td>
                <p>
                  銀行、生保、損保、クレジット
                </p>
              </td>
            </tr>
            <tr>
              <th>公共</th>
              <td>
                <p>
                  医療、保険、年金、税金
                </p>
              </td>
            </tr>
            <tr>
              <th>企業</th>
              <td>
                <p>
                  人事、給与、SFA、ビッグデータ
                </p>
              </td>
            </tr>
            <tr>
              <th>その他</th>
              <td>
                <p>
                  製造、販売、流通、通信
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <h4 class="btn1">
          <span class="btn1-txt">得意技術</span>
        </h4>
        <table class="it-list">
          <tbody>
            <tr>
              <th>開発言語</th>
              <td>
                <p>
                  Flutter、iOS Objective-C、Swift、Android
                  Java、Kotlin、UNUnityARVRMR、C#、Linux、C/C++、JavaServer、PHP、ReactJS、VueJS、HTML5、Xamarin
                </p>
              </td>
            </tr>
            <tr>
              <th>モバイル</th>
              <td>
                <p>
                  IOS、Android
                </p>
              </td>
            </tr>
            <tr>
              <th>クラウド</th>
              <td>
                <p>
                  AWS(＊)、Azure
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <ul class="img-wrapper">
          <li v-for="logo in logoList" :key="logo">
            <img :data-src="logo" loading="lazy" :src="logo" alt="" />
          </li>
        </ul>
        <h4 class="btn1">
          <span class="btn1-txt">契約形態</span>
        </h4>
        <ul class="ul1">
          <li>
            <span class="iconfont">&#xe601;</span>
            一般派遣契約
          </li>
          <li>
            <span class="iconfont">&#xe601;</span>
            SE準委任契約
          </li>
          <li>
            <span class="iconfont">&#xe601;</span>
            請負契約
          </li>
        </ul>
        <h3 class="t3">
          提供サービス・ソリューション
        </h3>
        <Client
          :sourceData="[
            'Flutter関連全般',
            'WEBシステム構築・開発',
            'AWSシステム構築・開発',
            'SalesForce導入支援・開発',
            'RPA導入支援・開発',
            '組込みシステム開発',
            'スマホアプリ開発',
            'ECサイト構築・開発',
            'DWHシステム開発',
            'インフラ関連'
          ]"
        />
      </div>
    </section>
    <section class="section2">
      <div class="section-left">
        <p class="txt-wrapper">
          <span class="txt">SOLUTION</span>
          02
        </p>
      </div>
      <div class="section-right">
        <h2 class="title">オフショア開発及び中国進出支援事業</h2>
        <ul class="ul2">
          <li>
            <span class="iconfont">&#xe601;</span>
            一般派遣契約
          </li>
          <li>
            <span class="iconfont">&#xe601;</span>
            SE準委任契約
          </li>
          <li>
            <span class="iconfont">&#xe601;</span>
            請負契約
          </li>
        </ul>
      </div>
    </section>
    <section class="section3">
      <div class="section-left">
        <p class="txt-wrapper">
          <span class="txt">SOLUTION</span>
          03
        </p>
      </div>
      <div class="section-right">
        <h2 class="title">グローバル人材事業</h2>
        <table class="it-list">
          <tbody>
            <tr>
              <th>言語</th>
              <td>
                <p>
                  英語、日本語、中国語
                </p>
              </td>
            </tr>
            <tr>
              <th>業種</th>
              <td>
                <p>
                  ソフトウェア開発、PMO、ヘルプデスク、事務アシスタント
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          <span class="iconfont">&#xe601;</span>
          英語研修、育成の取り組みあり
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import services01 from "@/views/Services/img/services-01.jpg";
import logo1 from "@/views/Services/img/logo1.jpeg";
import logo2 from "@/views/Services/img/logo2.gif";
import logo3 from "@/views/Services/img/logo3.gif";
import logo4 from "@/views/Services/img/logo4.gif";
import logo5 from "@/views/Services/img/logo5.gif";
import logo6 from "@/views/Services/img/logo6.gif";

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
    title: `ソリューション | 千誠国際⽇本語学校`
  },

  name: "MyTest02ServicesChild1",
  components: {
    Client
  },

  data() {
    return {
      services01,
      logoList: [logo1, logo2, logo3, logo4, logo5, logo6]
    };
  },

  mounted() {
    // console.log(this.$route);
  },

  methods: {}
};
</script>

<style lang="stylus" scoped>
.child1
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
  .child1
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
  .child1
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
//   .child1
//     max-width: 640px;
</style>
