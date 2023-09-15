<template>
  <div class="home">
    <div class="home-content">
      <section class="banner-container">
        <div class="banner-wrapper bx">
          <div class="covervid-wrapper">
            <video
              class="covervid-video"
              autoplay
              :poster="bgMp4Jpg"
              loop
              muted
            >
              <source :src="bgMp4" type="video/mp4" />
            </video>
          </div>
          <!-- <div class="banner-txt"></div> -->
        </div>
      </section>
      <section class="main-container bg-img">
        <div class="main-container-wrapper bx">
          <div class="cards-container">
            <div class="card-items" v-for="card in cardList" :key="card.img">
              <img
                loading="lazy"
                :data-src="card.img"
                :src="card.img"
                alt=""
                class="card-items-img"
              />
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
              <router-link to="/news" class="btn">NEWS INDEX</router-link>
            </div>
            <div class="news-lists-wrapper">
              <router-link
                v-for="date in newList"
                :key="date.id"
                :to="'news/listitem/' + date.id"
                class="list-item"
                :class="date.id === 1 && 'border-top'"
              >
                <span class="date">{{ date.date }}</span>
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
import bgMp4 from "@/assets/video/bg-mp4.mp4";
import bgMp4Jpg from "@/assets/img/bg-mp4.jpg";

import newList from "@/assets/mock/news.json";

export default {
  name: "MyTest02Home",
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "株式会社dreaMTank ITソリューション、ソフトウェア開発、アプリケーション開発"
      }
    ],
    title: "dreaMTank株式会社 | スマート農業とARアプリ"
  },
  data() {
    return {
      cardList: [
        {
          img: card01,
          titleTop: "SOLUTION",
          titleBottom: "ソリューション",
          desc:
            "システムのコンサルティング、導入、運用に渡るすべてのフェーズのサービスを提供し、お客様の利便性、満足度の高いシステムの構築をサポートします。",
          path: "/services"
        },
        {
          img: card02,
          titleTop: "ACHIEVEMENT",
          titleBottom: "開発実績",
          desc:
            "ビットクロスのソリューションをご活用いただいているお客様のシステム開発実績や、システム構築例についてご紹介します。",
          path: "/services/child2"
        },
        {
          img: card03,
          titleTop: "PRODUCT",
          titleBottom: "自社製品",
          desc:
            "ビットクロスがご提供する自社製品をご紹介します。ラーニングサポートサービスは、ナレッジ習得のための最適な提案をAIにより学習者へ提供するWebサービスです。",
          path: "/services/child3"
        },
        {
          img: card04,
          titleTop: "FEATURE",
          titleBottom: "特長",
          desc:
            "フレームワークを利用したシステム開発から大規模システム開発まで、幅広いご要望に対応。豊富な経験といち早い先端技術への取り組みがビットクロスの強みです。",
          path: "/services/child4"
        }
      ],
      date: new Date(),
      newList: newList.slice(0, 8),
      openMoal: false,
      bgMp4,
      bgMp4Jpg
    };
  },

  mounted() {
    // 非移动端
    if (!navigator.userAgent.match(/(iPhone|Android)/)) {
      this.changeBoxSizeHandler();
      window.addEventListener("resize", this.changeBoxSizeHandler);
    }
    // 初始化coverVid
    $(".covervid-video").coverVid(640, 360);
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
  }
};
</script>

<style lang="stylus" scoped>
.home
  .home-content
    // height 270px
    .banner-container
      width: 100%;
      // background-color: #504D4B;
      // background-image: url(../../img/main_bg.jpg);
      background-position: 50% 50%;
      background-repeat: no-repeat;
      position: relative;
      // top: 70px;
      // margin-bottom: 70px;
      z-index: -101;
      .banner-wrapper
        width: 100%;
        max-width: 1120px;
        height: 320px;
        margin: 0 auto 0 auto;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;
        position: relative;
        z-index: -99;
        .covervid-wrapper
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -100;
          // .video
     .main-container
      width: 100%
      // background: url(https://bitcross.co.jp/common/img/contents_bg.gif) repeat
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
                  line-height: 1.6
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
                      color: #111
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
                    // padding-top: 10px
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
                border: .7px solid #111
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
      // .banner-container
      //   margin-bottom: 60px;
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
      .banner-container
        .banner-wrapper
          height 220px
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
