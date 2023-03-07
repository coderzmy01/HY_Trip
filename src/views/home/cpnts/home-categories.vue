<script setup>
import { storeToRefs } from "pinia";
import { toRef } from "vue";
import useHome from "../../../stores/modules/home";

const homeStore = useHome();
const { categoriesInfo } = storeToRefs(homeStore);
</script>
<template>
  <div class="categories">
    <template v-for="(item, index) in categoriesInfo" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>
<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  height: 80px;
  padding: 0 10px;
  margin-top: 8px;

  .item {
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70px;
    img{
      width: 32px;
    }
    .text{
      font-size: 5px;
    }
  }
}
</style>
