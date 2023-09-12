<template>
  <div class="home">
    <div class="home-content">
      <section class="banner-container">
        <div class="banner-wrapper bx">
          <div class="banner-bg"></div>
          <div class="banner-txt"></div>
        </div>
      </section>
      <section class="main-container">
        <div class="main-container-wrapper bx">
          <div class="cards-container">
            <div class="card-items" v-for="card in cardList" :key="card.img">
              <img :src="card.img" alt="" class="card-items-img" />
              <div class="card-txt-wrapper">
                <div class="card-txt-content">
                  <p class="card-title-wrapper">
                    <span class="title-top bold">{{ card.titleTop }}</span>
                    <span class="title-bottom bold">{{
                      card.titleBottom
                    }}</span>
                  </p>
                  <p class="desc" ref="myEleP">
                    {{ card.desc }}
                  </p>
                  <router-link :to="card.path" class="more">
                    MORE INFO
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="news-container">
            <div class="title-wrapper">
              <h2 class="txt">NEWS</h2>
              <router-link to="" class="btn">NEWS INDEX</router-link>
            </div>
            <div class="news-lists-wrapper">
              <router-link
                v-for="date in newList"
                :key="date.id"
                :to="'news/' + date.id"
                class="list-item"
                :class="date.id === 1 && 'border-top'"
              >
                <span class="date">{{ formattedDate }}</span>
                <span class="title">{{ date.title }}</span>
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import card01 from "@/assets/img/card-01.jpeg";
import card02 from "@/assets/img/card-02.jpeg";
import card03 from "@/assets/img/card-03.jpeg";
import card04 from "@/assets/img/card-04.jpeg";

export default {
  name: "MyTest02Home",
  data() {
    return {
      cardList: [
        {
          img: card01,
          titleTop: "BRANDING",
          titleBottom: "ブランディング",
          desc:
            "モバイルネイティブアプリの企画、開発、テスト、保守。クライアントアプリケーション企画、設計・開発、運営及び管理。UE/Unity系アプリケーション設計や開発",
          path: "/services"
        },
        {
          img: card02,
          titleTop: "DEVELOPMENT",
          titleBottom: "発達",
          desc:
            "モバイルネイティブアプリの企画、開発、テスト、保守。クライアントアプリケーション企画、設計・開発、運営及び管理。UE/Unity系アプリケーション設計や開発",
          path: "/services/child2"
        },
        {
          img: card03,
          titleTop: "MARKETING",
          titleBottom: "マーケティング",
          desc:
            "モバイルネイティブアプリの企画、開発、テスト、保守。クライアントアプリケーション企画、設計・開発、運営及び管理。UE/Unity系アプリケーション設計や開発",
          path: "/services/child3"
        },
        {
          img: card04,
          titleTop: "OUR WORK",
          titleBottom: "私たちの仕事",
          desc:
            "ロボットトラクタやスマートフォンで操作するビニルハウスの管理システムなどの活用により、農作業を自動化するアプリです。",
          path: "/services/child4"
        }
      ],
      date: new Date(),
      newList: [
        {
          id: 1,
          date: "",
          title: "我本来是新闻的标题，但是没有数据就先空着。"
        },
        {
          id: 2,
          date: "",
          title: "我本来是新闻的标题，但是没有数据就先空着。"
        },
        {
          id: 3,
          date: "",
          title: "我本来是新闻的标题，但是没有数据就先空着。"
        },
        {
          id: 4,
          date: "",
          title: "我本来是新闻的标题，但是没有数据就先空着。"
        },
        {
          id: 5,
          date: "",
          title: "我本来是新闻的标题，但是没有数据就先空着。"
        },
        {
          id: 6,
          date: "",
          title: "我本来是新闻的标题，但是没有数据就先空着。"
        },
        {
          id: 7,
          date: "",
          title: "我本来是新闻的标题，但是没有数据就先空着。"
        },
        {
          id: 8,
          date: "",
          title: "我本来是新闻的标题，但是没有数据就先空着。"
        }
      ],
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
      ],
      openMoal: false
    };
  },

  mounted() {
    // 非移动端
    if (!navigator.userAgent.match(/(iPhone|Android)/)) {
      this.changeBoxSizeHandler();
      window.addEventListener("resize", this.changeBoxSizeHandler);
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.changeBoxSizeHandler);
  },
  methods: {
    changeBoxSizeHandler() {
      const myEleP = this.$refs.myEleP;
      let max_height = 0,
        newheight = 0;
      if (myEleP) {
        myEleP.forEach(item => {
          item.style.height = "auto";
          // 取四个元素中最高元素的高作为整体的高
          max_height =
            max_height > item.offsetHeight ? max_height : item.offsetHeight;
          if (item.style) {
            newheight = max_height;
            // 对style做兼容处理
            const stylea =
              item.currentStyle ||
              document.defaultView.getComputedStyle(item, "");
            if (stylea.paddingTop)
              newheight -= stylea.paddingTop.replace("px", "");
            if (stylea.paddingBottom)
              newheight -= stylea.paddingBottom.replace("px", "");
            if (stylea.borderTopWidth && stylea.borderTopWidth != "medium")
              newheight -= stylea.borderTopWidth.replace("px", "");
            if (
              stylea.borderBottomWidth &&
              stylea.borderBottomWidth != "medium"
            )
              newheight -= stylea.borderBottomWidth.replace("px", "");
            item.style.height = newheight + "px";
          } else {
            item.style.height = max_height + "px";
          }
        });
      }
    }
  },
  computed: {
    formattedDate() {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // 获取月份时要加1，且格式化为两位数
      const day = String(date.getDate()).padStart(2, "0"); // 获取日期并格式化为两位数
      return `${year}.${month}.${day}`;
    }
  }
};
</script>

<style lang="stylus" scoped>
.home
  .home-content
    // height 270px
    .banner-container
      width: 100%
      height 270px
      // background-color:#504D4B
      background-position:50% 50%
      background-repeat:no-repeat
      position: relative
      .banner-wrapper
        width: 100%
        height: 100%
        margin: 0 auto 0 auto
        background-repeat: no-repeat
        background-position: 50% 50%
        background-size: cover
        position: relative
        background-image:url('https://demo.athemes.com/atu-agency/wp-content/uploads/sites/86/2018/06/books-business-computer-459654.jpg')
     .main-container
      width: 100%
      background: url(https://bitcross.co.jp/common/img/contents_bg.gif) repeat
      /* padding: 0 25px; */
      overflow: hidden
        // background: url(../img/contents_bg.gif) repeat;
        overflow: hidden
        .main-container-wrapper
          .cards-container
            padding: 60px 60px 0 60px
            display: flex
            background-color: #fff
            flex-wrap: wrap
            .card-items
              width 25%
              .card-items-img
                width 100%
                // width 248px
                // max-height: 159px
                border-left: 1px solid #FFF
                border-right: 1px solid #FFF
              .card-txt-wrapper
                margin: 0 10px
                .card-txt-content
                  width:auto
                  background:#FFF
                  padding:25px 20px
                  box-shadow:0px 0px 5px rgba(0,0,0,0.2)
                  position:relative
                  top:-10px
                  left:0
                  .card-title-wrapper
                    display: flex
                    flex-direction: column
                    align-items: center
                    justify-content: center
                    margin-bottom: 25px
                    font-weight: 700px
                    .title-top
                      display: block
                      font-family: 'Roboto Condensed', sans-serif
                      font-size: 24px
                      color: #DF0011
                      letter-spacing: 0.06em
                      margin-bottom: 10px
                    .title-bottom
                      font-size: 15px
                      color: rgb(17, 17, 17)
                  .desc
                    font-size: 14px
                    margin-bottom: 25px
                    word-wrap: break-word
                    color: rgb(17, 17, 17)
                    line-height: 25px
                    padding-top: 10px
                  .more
                    display:block
                    width:156px
                    margin:0 auto
                    background:#FFF
                    height:40px
                    font-size:14px
                    line-height:40px
                    color:#111
                    border:1px solid #111
                    border-radius:22px
                    padding:0 0 0 28px
                    position:relative
                    transition: all 0.4s ease
                  .more:hover
                    background:#E0E0E0
                    border:1px solid #E0E0E0
                  .more:after
                    content:""
                    position:absolute
                    display:block
                    width:11px
                    height:11px
                    right:24px
                    top:13px
                    background:url(../../assets/img/icon-plus.png)
                    background-size:11px 11px
                    -webkit-transition: all 0.15s ease
                    -moz-transition: all 0.15s ease
                    transition: all 0.15s ease

                  :hover:after
                      transform: rotate(90deg)
          .news-container
            width:auto
            padding:80px 60px
            display: flex
            background-color: #fff
            .title-wrapper
              width 26%
              .txt
                font-family: 'Roboto Condensed', sans-serif
                font-size:30px
                font-weight:bold
                margin-bottom:25px
                color:#111
                letter-spacing:0.06em
                padding-left:40px
                position:relative
              .txt:before
                content:""
                position:absolute
                display:block
                width:20px
                left:0
                top:20px
                border: .7px solid #DF0011
                background-size:20px 1px
              .btn
                display:inline-block
                background:#FFF
                height:44px
                line-height:44px
                color:#111
                border:1px solid #111
                border-radius:22px
                padding:0 54px 0 30px
                position:relative
                transition: all 0.4s ease
              .btn:after
                content:""
                position:absolute
                display:block
                width:11px
                height:11px
                right:28px
                top:16px
                background:url(../../assets/img/icon-plus.png)
                background-size:11px 11px
                transition: all 0.15s ease
              .btn:hover
                background:#E0E0E0
                border:1px solid #E0E0E0
              .btn:hover:after
                transform: rotate(90deg)
            .news-lists-wrapper
              display: flex
              flex-direction: column
              flex: 1
              .border-top
                border-top:1px solid #E8E8E8
              .list-item:hover
                background-color: #E8E8E8
              .list-item
                width:100%
                padding:1em 1.2em
                line-height:1.8
                display: flex
                transition: all 0.5s ease
                border-bottom:1px solid #E8E8E8
                .date,.title
                  color: #111
                .date
                  width 20%
                .title
                  width 80%

@media screen and (max-width:1039px)
  .home
    .modal
      .modal-nav
        width: 480px
        list-style: none
        margin-bottom: 0
        float: right
    .home-content
      .main-container
        .main-container-wrapper
          .news-container
            width: auto
            padding: 70px 40px
            .title-wrapper
              width 32%
              .txt
                font-size: 28px
          .cards-container
            padding:60px 40px 0 40px
            .card-items
              width:50%
              .card-txt-wrapper
                .card-txt-content
                  .card-title-wrapper
                    font-size: 114%
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
@media screen and (max-width:767px)
  .home
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
