<template>
  <div class="list bg-img">
    <div class="list-container bx">
      <section class="list-box">
        <!-- <div> -->
        <div class="list-wrapper">
          <div class="news-wrapper">
            <div class="list-item-wrapper">
              <router-link
                v-for="date in originNewsList"
                :key="date.id"
                :to="'listitem/' + date.id"
                class="list-item"
              >
                <span class="date">{{ date.date }}</span>
                <span class="title">{{ date.title }}</span>
              </router-link>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import originNewsList from "@/assets/mock/news.json";

export default {
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "株式会社軽井沢オッペンハイムグループ ITソリューション、ソフトウェア開発、アプリケーション開発"
      }
    ],
    title: "ニュース | スマート農業とARアプリ"
  },
  name: "MyTest02List",

  data() {
    return {
      originNewsList
    };
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="stylus" scoped>
.list
  padding: 0 25px;
  overflow: hidden
  width: 100%
  .list-container
    width 100%
    background: #FFF;
    .list-box
      width: auto;
      padding: 20px 60px 100px 60px;
      .list-wrapper
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        .news-wrapper
          border-top: 1px solid #E8E8E8
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
@media screen and (max-width:767px)
  .list
    padding: 0 15px;
    .list-container
      .list-box
        padding: 20px 20px 60px 20px;
        .list-item
          flex-direction: column !important
</style>
