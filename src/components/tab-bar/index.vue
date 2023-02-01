<script setup>
import { ref } from "vue";
import tabBarData from "../../assets/data/tabbar.js";
import { getAssetUrl } from "../../utils/load_data";
const curIndex = ref(0);
const tabBarTap = (index) => {
  curIndex.value = index;
};
</script>
<template>
  <div class="tab-bar">
    <van-tabbar v-model="curIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabBarData">
        <van-tabbar-item :name="index" icon="home-o">
          <span>{{ item.text }}</span>
          <template #icon>
            <img
              v-if="curIndex !== index"
              :src="getAssetUrl(item.imgSrc)"
              alt=""
            />
            <img v-else :src="getAssetUrl(item.imgSrcActive)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>
<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #f3f3f3;
  display: flex;
  height: 59px;
  // .tab-bar-item {
  //   display: flex;
  //   flex: 1;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  img {
    width: 26px;
  }
  //   .text {
  //     font-size: 12px;
  //     margin-top: 2px;
  //   }
  //   &.active {
  //     color: var(--primary-color);
  //   }
  // }
  // :deep(.van-icon-home-o) {
  //   font-size: 36px;
  // }
}
</style>
