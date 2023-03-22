<script setup>
import TabBar from "@/components/tab-bar/index.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import Home from "./views/home/home.vue";
import loading from "@/components/Loading/index.vue";
const value = ref(2);
const route = useRoute();
</script>
<template>
  <div class="app">
    <router-view></router-view>
    <!-- <tab-bar v-if="!route.meta.hideTabBar" /> -->
    <tab-bar></tab-bar>
    <loading></loading>
  </div>
</template>
<style lang="less" scoped></style>
