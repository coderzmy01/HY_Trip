<script setup>
import useHome from "@/stores/modules/home";
import { storeToRefs } from "pinia";
import HouseItemV3 from "@/components/houseItemV3/house-item-v3.vue";
import HouseItemV9 from "@/components/houseItemV9/house-item-v9.vue";
const homeStore = useHome();
homeStore.fetchCityListInfo();
const { cityList } = storeToRefs(homeStore);
</script>
<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in cityList" v-key="item.data.houseId">
        <house-item-v3
          v-if="item.discoveryContentType === 3"
          :itemData="item.data"
        ></house-item-v3>
        <house-item-v9
          v-else-if="item.discoveryContentType === 9"
          :itemData="item.data"
        ></house-item-v9>
      </template>
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
  .list {
    height: 300px;
  }
}
</style>
