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
        <table class="it-list">
          <tbody>
            <tr>
              <th>商号</th>
              <td>
                <p>
                  dreaMTank株式会社（略称：MT）
                </p>
              </td>
            </tr>
            <tr>
              <th>役員</th>
              <td>
                <p>
                  代表取締役社長　李拯東
                </p>
              </td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>
                <p>
                  〒389-0111 長野県北佐久郡軽井沢町大字長倉5933番地5
                  <br />
                  TEL. 0267-46-9877
                  <br />
                  〒224-0003 神奈川県横浜市中川中央1-35-16
                  マイキャッスルセンター北202室
                  <br />
                  TEL. 045-507-5873
                </p>
              </td>
            </tr>
            <tr>
              <th>設立</th>
              <td>
                <p>
                  2014年5月
                </p>
              </td>
            </tr>
            <tr>
              <th>事業年度</th>
              <td>
                <p>
                  5月～4月末
                </p>
              </td>
            </tr>
            <tr>
              <th>資本金</th>
              <td>
                <p>
                  3500万円
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section class="section2">
      <div class="section-left">
        <h2 class="txt-wrapper">
          <span class="txt">主要取引先</span>
        </h2>
      </div>
      <div class="section-right">
        <ul class="client">
          <li>富士ソフト株式会社</li>
          <li>日鉄ソリューションズ株式会社</li>
          <li>株式会社システナ</li>
          <li>他多数（敬称略・順不同）</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MyTest02CompanyChild1",

  data() {
    return {};
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
      color: #DF0011;
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
      .client
        margin-bottom: 20px;
        width: 100%;
        display: flex
        flex-wrap: wrap
        li:nth-child(1),
        li:nth-child(2)
          border-top: 1px solid #E7E7E2;
        li
          width 50%
          border-bottom: 1px solid #E7E7E2;
          padding: 0.6em 0;
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
        border-top: 3px solid #DF0011;
        padding-top: 0.8em;
        margin-bottom: 30px;
        font-size: 100%
    .section-right
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
