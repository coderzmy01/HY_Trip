import { onMounted, onUnmounted, ref } from "vue";
import _ from "underscore";
export default function useScroll() {
  const isReachBottom = ref(false);
  const scrollHeight = ref(0);
  const scrollTop = ref(0);
  const clientHeight = ref(0);
  const scrollListener = _.throttle(() => {
    clientHeight.value = document.documentElement.clientHeight;
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;
    // console.log(scrollHeight.value);
    // console.log(clientHeight.value + scrollTop.value);
    if (scrollHeight.value <= scrollTop.value + clientHeight.value) {
      isReachBottom.value = true;
    }
  }, 100);
  onMounted(() => {
    window.addEventListener("scroll", scrollListener);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListener);
  });
  return { isReachBottom, scrollHeight, scrollTop, clientHeight };
}
