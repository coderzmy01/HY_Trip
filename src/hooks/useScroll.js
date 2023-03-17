import { onMounted, onUnmounted, ref } from "vue";

export default function useScroll() {
  const isReachBottom = ref(false);
  const scrollListener = () => {
    if (
      document.documentElement.scrollHeight <=
      document.documentElement.scrollTop + document.documentElement.clientHeight
    ) {
      isReachBottom.value = true;
    }
  };
  onMounted(() => {
    window.addEventListener("scroll", scrollListener);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListener);
  });
  return { isReachBottom };
}
