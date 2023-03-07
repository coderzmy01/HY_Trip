<script setup>
import useHome from "@/stores/modules/home";
const homeStore = useHome();
const getCityListTap = () => {
  homeStore.fetchCityListInfo();
};
</script>
<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="btn">
      <button @click="getCityListTap">click</button>
    </div>
  </div>
</template>
<style lang="less" scoped>
.content {
  padding: 10px 8px;
  .title {
    font-size: 22px;
    padding: 0 10px;
  }
  .btn{
    height: 300px;
  }
}
</style>
