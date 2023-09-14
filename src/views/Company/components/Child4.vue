<template>
  <div class="child4">
    <div class="title">
      <span class="en">{{ $route.meta.enName }}</span>
      <span class="ja">{{ $route.meta.jaName }}</span>
    </div>
    <section class="section1">
      <div class="section-left">
        <h2 class="txt-wrapper">
          <span class="txt">アクセスマップ</span>
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
          </tbody>
        </table>
        <iframe
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          class="map"
          height="400px"
          width="100%"
          src="https://maps.google.com/maps?q=%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E9%83%BD%E7%AD%91%E5%8C%BA%E4%B8%AD%E5%B7%9D%E4%B8%AD%E5%A4%AE1-35-16%E3%80%80%E3%83%9E%E3%82%A4%E3%82%AD%E3%83%A3%E3%83%83%E3%82%B9%E3%83%AB%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E5%8C%97202%E5%AE%A4&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
          title="神奈川県横浜市都筑区中川中央1-35-16　マイキャッスルセンター北202室"
          aria-label="神奈川県横浜市都筑区中川中央1-35-16　マイキャッスルセンター北202室"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "株式会社dreaMTank ITソリューション、ソフトウェア開発、アプリケーション開発"
      }
    ],
    title: `アクセス | dreaMTank株式会社`
  },
  name: "MyTest02CompanyChild4",

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus" scoped>
.child4
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
      // flex: 1
      .map
        margin-top: 40px
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
  .child4
    .title
      margin-bottom: 30px
      .en
        font-size: 32px
    .section1
      margin-bottom: 50px;
      .section-left
        width: 20%;
        .txt-wrapper
          font-size: 100%
      .section-right
        width: 72%;






@media (max-width: 767px)
  .child4
    .title
      .en
        font-size: 26px
      .ja
        padding: 0 15px;
    .info-img
      height: 320px;
      width: 100%;
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
  .child4
    max-width: 640px;
@media (min-width: 768px)
  .child4
    max-width: 768px;
@media (min-width: 1024px)
  .child4
    max-width: 1024px;

@media (min-width: 1280px)
  .child4
    max-width: 1280px
</style>
