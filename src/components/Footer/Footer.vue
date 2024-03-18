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
          本社: 〒389-0111 
          <br />
          長野県北佐久郡軽井沢町大字長倉５９３３ー５
          <br />
          TEL: 0267-46-9877
          <br />
          <br />
          長野支店: 〒389-0207
          <br />
          長野県北佐久郡御代田町大字馬瀬口１４９７ー１７
          <br />
          カリビアンプラーザ１０５室
          <br />
          TEL: 0267-31-0097
          <br />
          <br />
          横浜支店: 〒224-0003
          <br />
          神奈川県横浜市都筑区中川中央１ー３５ー１６
          <br />
          マイキャッスルセンター北２０２室
          <br />
          TEL: 045-507-5873
        </p>
      </div>
      <div class="right">
        <ul class="items-wrapper">
          <li class="item">
            <router-link
              to="/services"
              @click.native="toTopHandler"
              class="item-title"
              >事業内容</router-link
            >
            <ul class="item-child-wrapper">
              <li>
                <router-link
                  @click.native="toTopHandler"
                  class="item-child"
                  to="/services"
                  >ソリューション</router-link
                >
              </li>
              <li>
                <router-link
                  @click.native="toTopHandler"
                  class="item-child"
                  to="/services/child2"
                  >開発実績</router-link
                >
              </li>
              <li>
                <router-link
                  @click.native="toTopHandler"
                  class="item-child"
                  to="/services/child3"
                  >自社製品</router-link
                >
              </li>
              <li>
                <router-link
                  @click.native="toTopHandler"
                  class="item-child"
                  to="/services/child4"
                  >特長</router-link
                >
              </li>
            </ul>
          </li>
          <li class="item">
            <router-link
              to="/company"
              @click.native="toTopHandler"
              class="item-title"
              >企業情報</router-link
            >
            <ul class="item-child-wrapper">
              <li>
                <router-link
                  @click.native="toTopHandler"
                  class="item-child"
                  to="/company"
                  >会社概要</router-link
                >
              </li>
              <li>
                <router-link
                  @click.native="toTopHandler"
                  class="item-child"
                  to="/company/child2"
                  >経営理念</router-link
                >
              </li>
              <li>
                <router-link
                  @click.native="toTopHandler"
                  class="item-child"
                  to="/company/child3"
                  >組織図</router-link
                >
              </li>
              <li>
                <router-link
                  @click.native="toTopHandler"
                  class="item-child"
                  to="/company/child4"
                  >アクセス</router-link
                >
              </li>
            </ul>
          </li>
          <li class="item">
            <router-link
              to="/recruit"
              @click.native="toTopHandler"
              class="item-title"
              >採用情報</router-link
            >
            <ul class="item-child-wrapper">
              <li>
                <router-link
                  @click.native="toTopHandler"
                  class="item-child"
                  to="/recruit"
                  >中途採用</router-link
                >
              </li>
              <li>
                <router-link
                  @click.native="toTopHandler"
                  class="item-child"
                  to="/recruit/child2"
                  >新卒採用</router-link
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
              // transition: all 0.5s ease
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
          .item:nth-child(2),
          .item:nth-child(3)
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
