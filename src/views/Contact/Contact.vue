<template>
  <div class="contact">
    <div class="contact-content">
      <Particles :routeName="$route.name" />
      <keep-alive>
        <component
          :formData="formData"
          @currentIndexHandler="currentIndexHandler"
          :is="currentIndex"
        ></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Particles from "@/components/Particles/Particles";
import Child1 from "./components/Child1.vue";
import Child2 from "./components/Child2.vue";
import Child3 from "./components/Child3.vue";

export default {
  metaInfo: {
    meta: [
      {
        name: "description",
        content:
          "株式会社dreaMTank ITソリューション、ソフトウェア開発、アプリケーション開発"
      }
    ],
    title: `お問い合わせ | dreaMTank株式会社`
  },
  name: "MyTest02Contact",
  components: {
    Particles,
    Child1,
    Child2,
    Child3
  },

  data() {
    return {
      currentIndex: "Child1",
      formData: {}
    };
  },

  mounted() {
    // console.log(this.$route);
  },

  methods: {
    currentIndexHandler({ Child2, formData }) {
      this.currentIndex = Child2;
      this.formData = formData;
    }
  }
};
</script>

<style lang="stylus" scoped></style>
