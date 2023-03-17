<script setup>
import HomeNavBar from "./cpnts/home-nav-bar.vue";
import homeSearchBox from "./cpnts/home-search-box.vue";
import useHome from "@/stores/modules/home.js";
import HomeCategories from "./cpnts/home-categories.vue";
import HomeContent from "./cpnts/home-content.vue";
import useScroll from "@/hooks/useScroll";
import { watch } from "vue";
const homeStore = useHome();
homeStore.fetchHotSuggestInfo();
homeStore.fetchCategoriesInfo();
const { isReachBottom } = useScroll();
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchCityListInfo().then(() => {
      isReachBottom.value = false;
    });
  }
});
</script>
<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <homeSearchBox></homeSearchBox>
    <HomeCategories></HomeCategories>
    <div class="search-bar">我是搜索框</div>

    <HomeContent></HomeContent>
  </div>
</template>
<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
