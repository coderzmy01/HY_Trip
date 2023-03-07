<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import useCity from "@/stores/modules/city";
const props = defineProps({
  CityGroup: {
    type: Object,
    default: () => ({}),
  },
});
const indexList = computed(() => {
  const list = props.CityGroup.cities.map((item) => item.group);
  list.unshift("#");
  return list;
});
const router = useRouter();

const cityStore = useCity();
const itemClick = (city) => {
  cityStore.curCity = city;
  router.back();
};
</script>
<template>
  <van-index-bar
    :sticky="false"
    highlight-color="#ff9854"
    :index-list="indexList"
  >
    <div class="hotlist">
      <van-index-anchor index="热门" />
      <div class="hot-city">
        <template v-for="(city, index) in CityGroup.hotCities" :key="index">
          <div class="hot-item" @click="itemClick(city)">
            {{ city.cityName }}
          </div>
        </template>
      </div>
    </div>
    <template v-for="(group, index) in CityGroup.cities" :key="index">
      <van-index-anchor :index="group.group" />
      <template v-for="(city, indey) in group.cities" :key="indey">
        <van-cell :title="city.cityName" @click="itemClick(city)" />
      </template>
    </template>
  </van-index-bar>
</template>
<style lang="less" scoped>
.hot-city {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  padding-right: 25px;
  .hot-item {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}
</style>
