<template>
  <footer class="footer">
    <a href="#top" class="to-top" @click.prevent="toTopHandler">
      <img :src="iconUpArrow" alt="" class="icon-up-arrow" srcset="" />
    </a>
    <div class="footer-content">
      <div class="left">
        <router-link class="left-logo" to="/">
          <img class="logo-icon" :src="logoIcon" alt="" srcset="" />
          <span class="logo-txt">dreaMTank株式会社</span>
        </router-link>
        <p class="info">
          本店: 長野県北佐久郡軽井沢町大字長倉5933番地5
          <br />
          本店TEL: 0267-46-9877
          <br />
          本店〒: 389-0111
          <br />
          支店: 神奈川県横浜市都筑区中川中央１丁目３５−１６
          <br />
          マイキャッスルセンター北　202室
          <br />
          支店TEL: 045-507-5873
          <br />
          本店〒: 224-0003
        </p>
      </div>
      <div class="right">
        <ul class="items-wrapper">
          <li class="item">
            <router-link to="" class="item-title">事業内容</router-link>
            <ul class="item-child-wrapper">
              <li>
                <router-link class="item-child" to=""
                  >ブランディング</router-link
                >
              </li>
              <li>
                <router-link class="item-child" to="">発達</router-link>
              </li>
              <li>
                <router-link class="item-child" to=""
                  >マーケティング</router-link
                >
              </li>
              <li>
                <router-link class="item-child" to="">私たちの仕事</router-link>
              </li>
            </ul>
          </li>
          <li class="item">
            <router-link to="" class="item-title">クイックリンク</router-link>
            <ul class="item-child-wrapper">
              <li>
                <router-link class="item-child" to=""
                  >私たちについて</router-link
                >
              </li>
              <li>
                <router-link class="item-child" to="">利用規約</router-link>
              </li>
              <li>
                <router-link class="item-child" to=""
                  >プライバシーポリシー</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="links"></div>
    </div>
  </footer>
</template>

<script>
import iconUpArrow from "../../assets/img/icon-up-arrow.png";
import logoIcon from "../../assets/img/icon-log.jpeg";
export default {
  name: "MyTest02Footer",

  data() {
    return {
      iconUpArrow,
      logoIcon
    };
  },

  mounted() {},

  methods: {
    toTopHandler() {
      const targetElement = $("#top")[0];
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style lang="stylus" scoped>
.footer
  width: 100%
  background: #111
  overflow: hidden
  position: relative
  color: #fff
  .to-top:hover
    opacity: 1
  .to-top
    display: flex
    align-items: center
    justify-content: center
    width: 70px
    height: 70px
    background-color: #1b1b1b
    text-align: center
    color: #fff
    font-size: 24px
    text-decoration: none
    line-height: 70px
    transition: all 0.5s ease
    opacity:.6
    position: absolute
    bottom: 60px
    right: 0
    z-index: 100
    .icon-up-arrow
      width 25px
  .footer-content
    max-width: 1000px
    margin: 0 auto
    padding: 50px 0 30px 0
    display: flex
    .left
      width 35%
      .left-logo
        display: flex
        align-items: center
        font-size: 24px
        .logo-icon
          border-radius: 100%
          margin-right: 6px
        .logo-txt
          font-size: 16px
          font-weight: 700
          color: #fff
      .info
        font-size: 14px
        line-height: 1.6
    .right
      flex: 1
      font-weight: 700
      margin-left: 80px
      margin-top: 6px
      .items-wrapper
        display: flex
        justify-content: space-around
        .item
          .item-title
            transition: all 0.5s ease
            color: #fff
            display: inline-block
            margin-bottom: 15px
          .item-title:hover
            opacity: .5
          .item-child-wrapper
            .item-child
              transition: all 0.5s ease
              color: #fff
            .item-child:hover
              opacity: .5
            .item-child:first-child
              display: inline-block
              margin-top: 12px
@media screen and (max-width:1039px)
  .footer
    .to-top
      width: 60px
      height: 60px
      background-color: #1B1B1B
      line-height: 60px
      opacity: .6
    .footer-content
      max-width: 100%
      margin: 0
      padding: 40px 0 0 0
      flex-wrap: wrap
      .left
        width: 100%
        margin-bottom: 30px
        .left-logo
          justify-content: center
        .info
          text-align: center
      .right
        margin-left: 0
        margin-right: 0
        .items-wrapper
          .item:nth-child(2)
            display: none
          .item
            width 100%
            text-align: center
            .item-title
              width: 100%
              background-color: #202020
              margin-bottom: 1px
              height: 44px
              line-height: 44px
            .item-child-wrapper
              .item-child
                width: 100%
                background-color: #202020
                margin-bottom: 1px
                height: 44px
                line-height: 44px
                margin-top: 0 !important
</style>
