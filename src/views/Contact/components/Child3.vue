<template>
  <div class="child3 bg-img">
    <div class="child3-container bx">
      <section class="box">
        <div class="content">
          <Step currentEle="Child3" />
          <p class="remind">
            お問い合わせを承りました。
            <br />
            後ほど担当者よりお返事させていただきます。
            <br />
            ありがとうございました。
          </p>
          <a href="/" class="to-home">
            HOMEに戻る
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Step from "@/components/Step/Step";
export default {
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "株式会社軽井沢オッペンハイムグループ ITソリューション、ソフトウェア開発、アプリケーション開発"
      }
    ],
    title: `お問い合わせ | 株式会社軽井沢オッペンハイムグループ`
  },
  name: "MyTest0ContactChild3",
  props: {
    formData: {
      type: Object
    }
  },
  components: {
    Step
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus" scoped>
.child3
  padding: 0 25px;
  overflow: hidden
  width 100%
  .child3-container
    background: #fff
    .box
      padding: 20px 60px 100px 60px
      .content
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        .remind
          margin-bottom: 40px
        .to-home
          display: inline-block;
          padding: 0.6em 1.8em;
          background: #FFF;
          color: #111;
          line-height: 1.6;
          border: 1px solid #D5D5D5;
          border-radius: 25px;
          transition: all 0.4s ease;
        .to-home:after
          content: "\e62b";
          margin-left: 15px;
          font-family: "iconfont";
@media screen and (max-width: 1039px)
  .child3
    .child3-container
      .box
        width: auto;
        padding: 20px 40px 80px 40px;
        .content
          .p-desc
            margin-bottom: 50px
            .phone-wrapper
              width 90%
          .form-wrapper
            table
              tbody
                tr
                  th
                    width: 30%;
                  td
                    width 70%


@media screen and (max-width: 767px)
  .child3
    padding: 0 15px
    .child3-container
      .box
        width: auto;
        padding: 20px 20px 60px 20px;
        .content
          .form-wrapper
            table
              margin-bottom: 30px
              tbody
                width 100%
                tr
                  width 100%
                  th
                    background: #ECE8E6;
                    font-weight: bold;
                    padding: 10px 10px;
                    border: 1px solid #ECE8E6;
                    width: 100%;
                    display: block;
                  td
                    padding: 10px 10px;
                    border: 1px solid #ECE8E6;
                    width: 100%;
                    display: block;
            .btn-gropu
              margin-bottom: 30px
              input
                font-size: 14px !important
          .remind
            font-size: 14px
</style>
