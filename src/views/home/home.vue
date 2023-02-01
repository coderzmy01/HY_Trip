<script setup>
import HomeNavBar from "./cpnts/home-nav-bar.vue";
</script>
<template>
  <div class="home">
    <HomeNavBar></HomeNavBar>
    <div class="banner">
      <img src="../../assets/img/home/banner.webp" alt="" />
    </div>
    <div class="location">
      <div class="city">广州</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="../../assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
  .location {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 44px;
    .city {
      flex: 1;
    }
    .position {
      width: 74px;
      display: flex;
      align-items: center;
      .text {
        position: relative;
        top: 2px;
        font-size: 12px;
      }
      img {
        width: 18px;
        height: 18px;
        margin-left: 3px;
      }
    }
  }
}
</style>
