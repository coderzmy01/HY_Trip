<script setup>
import { defineProps } from "vue";
defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<template>
  {{ itemData }}
</template>
<style lang="less" scoped></style>
