<template>
  <div class="news">
    <div class="news-content">
      <Particles :routeName="$route.name" />
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<script>
import Particles from "@/components/Particles/Particles";

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
  name: "MyTest02NewsList",
  components: {
    Particles
  },

  data() {
    return {};
  },

  mounted() {
    // const { query } = this.$route;
    // const { id } = query;
    // if (id) {
    //   this.currentIndex = "ListItem";
    //   this.newsList = originNewsList.filter(i => i.id - 0 == id);
    // }
  },

  methods: {}
};
</script>

<style lang="stylus" scoped></style>
