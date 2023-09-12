<template>
  <div class="main">
    <Header :dataSource="navList" />
    <div class="nav-toggle">
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <aside class="modal">
      <nav class="modal-nav">
        <router-link
          class="modal-nav-item"
          :to="nav.path"
          v-for="nav in navList"
          :key="nav.path"
        >
          <span class="modal-nav-item-title">{{ nav.title }}</span>
          <span>{{ nav.enTite }}</span>
        </router-link>
      </nav>
    </aside>
    <router-view />
    <Footer />
    <div class="overlay"></div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      navList: [
        {
          path: "/home",
          title: "ホーム",
          enTite: "Home"
        },
        {
          path: "/services",
          title: "事業内容",
          enTite: "Services"
        },
        {
          path: "/company",
          title: "企業情報",
          enTite: "Company"
        },
        {
          path: "/recruit",
          title: "採用情報",
          enTite: "Recruit"
        },
        {
          path: "/contact",
          title: "お問い合わせ",
          enTite: "contact"
        }
      ]
    };
  },
  mounted() {
    console.log(this.$route);
  }
};
</script>

<style lang="stylus" scoped>
.overlay
  display: none
  position: fixed
  background: rgba(0,0,0,.6)
  width: 100%
  height: 100%
  top: 0
  left: 0
  right: 0
  bottom: 0
.main
  .modal
    display: none
    .modal-nav
      width: 730px
      list-style: none
      margin-bottom: 0
      display: flex
      flex-direction: column
      .modal-nav-item
        padding: 16px 0;
        line-height: 1;
        border-top: 1px solid #E8E8E8;
        height: 60px
        font-weight: 700
        transition: all 0.5s ease;
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        color: #111
      :hover,
      .link-active
        background-color: #DD7B0F
        background-image: linear-gradient(to right, #DD7B0F 0%, #DE1B10 51%, #DD7B0F 100%)
        color: #fff !important
        box-sizing: border-box
        background-size: 200% auto
  .nav-toggle
    display: none
    position: fixed
    top: 18px
    right: 15px
    height: 32px
    >div
      position: relative
      width: 32px
    span
      width: 100%
      height: 2px
      left: 0
      display: block
      background: #111
      position: absolute
      transition: .35s ease-in-out
    span:nth-child(1)
      top: 0
    span:nth-child(2)
      top: 11px
    span:nth-child(3)
      top: 22px
@media screen and (max-width:767px)
  .show-overlay
    .modal
      transform: translate3d(-250px,0,0);
    .overlay
      display: block
    .nav-toggle
      span:nth-child(1)
        top: 11px;
        transform: rotate(45deg);
      span:nth-child(2)
        width: 0;
        left: 50%;
      span:nth-child(3)
        top: 11px;
        transform: rotate(-45deg);

  .overlay
    z-index: 200
  .main
    .modal
      z-index: 300
      padding-top: 120px
      position: fixed
      right: -250px
      top: 0
      height: 100%
      width: 250px
      color: #111
      background: #fff
      transition: .35s ease-in-out
      display: block
      .modal-nav
        width: auto
        float: none
    .nav-toggle
      display: block
      z-index: 400
    .home-content
      .main-container
        .main-container-wrapper
          padding: 0 15px
          .news-container
            width: auto
            padding: 30px 20px 40px 20px
            flex-wrap: wrap
            .title-wrapper
              width 100%
              margin-bottom: 30px
              .txt
                font-size: 24px
                margin-bottom: 15px
                padding-left: 35px
            .news-lists-wrapper
              .list-item
                flex-direction: column
          .cards-container
            padding:40px 20px 0 20px
            .card-items
              width: 100%
              max-width: 380px
              float: none
              margin: 0 auto 15px auto
              .card-items-img
                border-left: none
                border-right: none
              .card-txt-wrapper
                .card-txt-content
                  .card-title-wrapper
                    font-size: 100%
                    margin-bottom: 25px
                    .title-top
                      font-size: 22px
                  .desc
                    font-size: 100%
                  .more
                    width: 156px
                    font-size: 100%
                    padding: 0 0 0 28px
                    transition: none

            .card-items:first-child
              margin-bottom:15px
            .card-items:nth-child(2)
              margin-bottom:15px
</style>
