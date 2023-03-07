<script setup>
import { storeToRefs } from "pinia";
import { toRef, ref, computed } from "vue";
import getCityAll from "../../services/modules/city";
import useCity from "../../stores/modules/city";
import CityList from "./cpnts/city-list.vue";

const searchValue = ref("");
const active = ref();
const cityStore = useCity();
cityStore.fetchCityInfo();
const { cityInfo } = storeToRefs(cityStore);
let currentCity = computed(() => cityInfo.value[active.value]);
</script>
<template>
  <div class="city top-page">
    <div class="top">
      <van-search
        v-model="searchValue"
        placeholder="请输入搜索关键词"
        show-action
      />
      <van-tabs v-model:active="active" color="#ff9854">
        <template v-for="(value, key, index) in cityInfo" v-key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
      <div class="bottom">
        <template v-for="(value, key, index) in cityInfo" v-key="key">
          <CityList v-show="key === active" :CityGroup="value"></CityList>
        </template>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.city {
  .bottom {
    position: relative;
    z-index: 9;
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
