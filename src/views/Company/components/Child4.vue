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
                  〒389-0111 長野県北佐久郡軽井沢町大字長倉５９３３ー５
                  <br />
                  TEL. 0267-46-9877
                  <br />
                  <br />
                  〒224-0003 神奈川県横浜市都筑区中川中央１ー３５ー１６
                  <br />
                  マイキャッスルセンター北２０２室
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6425.395152456146!2d138.55440075561017!3d36.368103591937036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601dd1e1ee2be0ef%3A0x16d8ddc9db507d82!2z44CSMzg5LTAxMTEg6ZW36YeO55yM5YyX5L2Q5LmF6YOh6Lu95LqV5rKi55S66ZW35YCJ5Y2D44Kx5rud6KW_5Yy677yV77yZ77yT77yT4oiS77yV!5e0!3m2!1sja!2sjp!4v1694777198703!5m2!1sja!2sjp"
          title="長野県北佐久郡軽井沢町大字長倉５９３３ー５"
          aria-label="長野県北佐久郡軽井沢町大字長倉５９３３ー５"
          loading="lazy"
        ></iframe>
        <iframe
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          class="map"
          loading="lazy"
          height="400px"
          width="100%"
          src="https://maps.google.com/maps?q=〒224-0003 神奈川県横浜市中川中央1-35-16 マイキャッスルセンター北202室&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near&region=JP"
          title="神奈川県横浜市都筑区中川中央１ー３５ー１６マイキャッスルセンター北２０２室"
          aria-label="神奈川県横浜市都筑区中川中央１ー３５ー１６マイキャッスルセンター北２０２室"
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
