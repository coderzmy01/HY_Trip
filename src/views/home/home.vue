<script setup>
import HomeNavBar from "./cpnts/home-nav-bar.vue";
import homeSearchBox from "./cpnts/home-search-box.vue";
import useHome from "@/stores/modules/home.js";
import HomeCategories from "./cpnts/home-categories.vue";
import HomeContent from "./cpnts/home-content.vue";
const homeStore = useHome();
homeStore.fetchHotSuggestInfo();
homeStore.fetchCategoriesInfo();
</script>
<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <homeSearchBox></homeSearchBox>
    <HomeCategories></HomeCategories>
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
