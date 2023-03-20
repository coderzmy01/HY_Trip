<script setup>
import { ref, computed } from "vue";
import HomeNavBar from "./cpnts/home-nav-bar.vue";
import homeSearchBox from "./cpnts/home-search-box.vue";
import SearchBox from "@/components/search-box/index.vue";
import useHome from "@/stores/modules/home.js";
import HomeCategories from "./cpnts/home-categories.vue";
import HomeContent from "./cpnts/home-content.vue";
import useScroll from "@/hooks/useScroll";
import { watch } from "vue";
const homeStore = useHome();
homeStore.fetchHotSuggestInfo();
homeStore.fetchCategoriesInfo();
const { isReachBottom, scrollTop } = useScroll();
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchCityListInfo().then(() => {
      isReachBottom.value = false;
    });
  }
});
const isShowSearch = computed(() => {
  return scrollTop.value >= 100;
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
    <div class="search-bar" v-if="isShowSearch">
      <search-box> </search-box>
    </div>
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
  .search-bar {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
  }
}
</style>
