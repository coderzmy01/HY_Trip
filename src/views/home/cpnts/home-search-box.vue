<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import useCity from "../../../stores/modules/city";
import { formatDate, getDiffDate } from "../../../utils/formatDate";
import useHome from "../../../stores/modules/home";
import { storeToRefs } from "pinia";
const router = useRouter();
const cityStore = useCity();
const curCity = cityStore.curCity;
const CityTap = function () {
  router.push("/city");
};

const nowDate = new Date();
const startDate = ref(formatDate(nowDate));
const endDate = ref(formatDate(nowDate.getTime() + 24 * 60 * 60 * 1000));
let diffDay = ref(1);
const date = ref("");
const show = ref(false);
const onConfirm = (values) => {
  const [start, end] = values;
  show.value = false;
  startDate.value = formatDate(start);
  endDate.value = formatDate(end);
  diffDay = getDiffDate(start, end);
};

const searchClick = () => {
  router.push({
    path: "/search",
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
    },
  });
};

const homeStore = useHome();
const { hotSuggest } = storeToRefs(homeStore);
</script>
<template>
  <div class="location">
    <div class="city" @click="CityTap">{{ curCity.cityName }}</div>
    <div class="position">
      <span class="text">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="" />
    </div>
  </div>
  <div class="section date-range" @click="show = true">
    <div class="start">
      <div class="date">
        <span class="tip">开始</span>
        <span class="time">{{ startDate }}</span>
      </div>
      <div class="stay">共{{ diffDay }}天</div>
    </div>
    <div class="end">
      <div class="date">
        <span class="tip">出发</span>
        <span class="time">{{ endDate }}</span>
      </div>
    </div>
  </div>
  <div class="section">
    <div class="start">价格不限</div>
    <div class="end">人数不限</div>
  </div>
  <div class="section">
    <div class="start">关键字/位置/民宿名</div>
  </div>
  <div class="section hotSuggests">
    <template v-for="(item, index) in hotSuggest" :key="index">
      <div
        class="item"
        :style="{
          color: item.tagText.color,
          background: item.tagText.background.color,
        }"
      >
        {{ item.tagText.text }}
      </div>
    </template>
  </div>
  <div class="section search-btn">
    <div class="btn" @click="searchClick">开始搜索</div>
  </div>
  <van-calendar
    v-model:show="show"
    @confirm="onConfirm"
    color="#ff9856"
    type="range"
  />
</template>
<style lang="less" scoped>
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
.section {
  padding: 0 20px;
  height: 44px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: #999;
  // justify-content: space-between;
  .start {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    flex: 1;
    .stay {
      flex: 1;
      text-align: center;
      font-size: 12px;
    }
  }
  .end {
    min-width: 30%;
    padding-left: 20px;
  }
}
.date {
  display: flex;
  flex-flow: column;
  .tip {
    font-size: 12px;
    color: #999;
  }
  .time {
    margin-top: 3px;
    color: #333;
    font-size: 15px;
    font-weight: 500;
  }
}
.hotSuggests {
  margin: 10px 0;
  height: auto;
  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}
.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
  }
}
</style>
