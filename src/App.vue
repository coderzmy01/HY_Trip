<script setup>
import TabBar from "@/components/tab-bar/index.vue";
import { ref } from "vue";
import Home from "./views/home/home.vue";

const value = ref(2);
</script>
<template>
  <Home></Home>
  <tab-bar />
</template>
<style lang="less" scoped></style>
