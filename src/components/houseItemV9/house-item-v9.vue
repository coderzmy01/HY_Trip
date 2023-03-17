<script setup>
import { defineProps, ref, computed } from "vue";
const value = ref(3);
const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
});
const itemScore = computed(() => {
  return Number(props.itemData.commentScore);
});
</script>
<template>
  <div class="home-item">
    <div class="item-inner">
      <div class="cover"><img :src="itemData.image.url" alt="" /></div>
      <div class="info">
        <div class="sum">{{ itemData.summaryText }}</div>
        <div class="title">{{ itemData.houseName }}</div>
        <div class="price">
          <van-rate
            :model-value="itemScore"
            :size="15"
            void-color="#eee"
            color="#fff"
            readonly
          />
          <span>￥{{ itemData.finalPrice }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.home-item {
  width: 50%;
  .item-inner {
    position: relative;
    margin: 5px;
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    .cover {
      img {
        width: 100%;
      }
    }
    .info {
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      color: #fff;
      .sum {
        font-size: 12px;
      }
      .title {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .price {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }
    }
  }
}
</style>
