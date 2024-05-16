<template>
  <div class="list-item bg-img">
    <div class="list-item-container bx">
      <section class="list-item-box">
        <div class="list-wrapper">
          <ul class="top-nav">
            <router-link v-show="id != 1" :to="backHandler" class="top-nav-link"
              >古い記事へ</router-link
            >
            <router-link to="/news" class="top-nav-link"
              >News一覧へ</router-link
            >
            <router-link
              v-show="length != id"
              :to="goHandler"
              class="top-nav-link"
              >新しい記事へ</router-link
            >
          </ul>
          <div class="article-warpper">
            <p class="date">{{ listItem.date }}</p>
            <h2 class="title">{{ listItem.title }}</h2>
          </div>
          <div class="content">
            <p v-for="(t, index) in listItem.content" :key="index">{{ t }}</p>
          </div>
          <div class="img-wrapper" v-for="i in listItem.imgList" :key="i">
            <div class="img-item-wrapper">
              <img loading="lazy" :src="i" alt="" :data-src="i" />
            </div>
          </div>
          <ul class="top-nav">
            <router-link v-show="id != 1" :to="backHandler" class="top-nav-link"
              >古い記事へ</router-link
            >
            <router-link to="/news" class="top-nav-link"
              >News一覧へ</router-link
            >
            <router-link
              v-show="length != id"
              :to="goHandler"
              class="top-nav-link"
              >新しい記事へ</router-link
            >
          </ul>
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
          "千誠国際⽇本語学校"
      }
    ],
    title: "ニュース一覧 | スマート農業とARアプリ"
  },
  name: "MyTest02ListItem",
  props: {
    id: {
      type: String
    }
  },

  data() {
    return {
      listItem: {},
      length: originNewsList.length
    };
  },

  mounted() {
    if (this.id) {
      this.listItem = originNewsList.filter(i => i.id == this.id)[0];
    }
  },

  methods: {},
  computed: {
    goHandler() {
      const new_id = this.id - 0 + 1;
      return new_id + "";
    },
    backHandler() {
      const new_id = this.id - 1;
      return new_id + "";
    }
  }
};
</script>

<style lang="stylus" scoped>
.list-item
  padding: 0 25px;
  overflow: hidden
  width: 100%
  .list-item-container
    width 100%
    background: #FFF;
    .list-item-box
      width: auto;
      padding: 20px 60px 100px 60px;
      .content
        white-space: pre-line;
        p
          margin-bottom: 20px
      .img-wrapper
        margin-top: 50px
        .img-item-wrapper
          img
            display: block;
            width: auto;
            max-width: 80%;
            margin: 0 auto 10px auto;
      .article-warpper
        margin-bottom: 50px;
        .date
          margin-bottom: 5px;
          font-weight: bold;
        .title
          font-size: 125%;
          font-weight: bold;
          line-height: 1.6;
          border-bottom: 1px solid #E2E2E2;
          padding-bottom: 15px;
          margin-bottom: 30px;
      .list-wrapper
        width: 100%;
        max-width: 800px;
        margin: 0 auto
        .top-nav
          width: 60%;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 10px
          display: flex
          justify-content: center
          align-items: center
          .top-nav-link:first-child
            border-radius: 25px 0 0 25px;
          .top-nav-link:last-child
            border-radius: 0 25px 25px 0;
          .top-nav-link:hover
            background: #888888;
            color: #FFF;
          .top-nav-link
            display: block;
            height: 50px;
            line-height: 50px;
            background: #E8E8E8;
            color: #111;
            text-align: center;
            transition: all .5s;
            margin-left: 1px;
            flex: 1

@media screen and (max-width: 767px)
  .list-item
    padding: 0 15px;
    .list-item-container
      .list-item-box
        width: auto;
        padding: 20px 20px 60px 20px;
        .img-wrapper
          margin-top: 20px
        .article-warpper
          .title
            font-size: 113%;
        .list-wrapper
          .top-nav
            width: 100%;
            font-size: 12px;
</style>
