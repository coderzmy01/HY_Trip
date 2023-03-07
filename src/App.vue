<script setup>
import TabBar from "@/components/tab-bar/index.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import Home from "./views/home/home.vue";

const value = ref(2);
const route = useRoute();
</script>
<template>
  <router-view></router-view>
  <!-- <tab-bar v-if="!route.meta.hideTabBar" /> -->
  <tab-bar></tab-bar>
</template>
<style lang="less" scoped></style>
