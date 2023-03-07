import { defineStore } from "pinia";
import getHotSuggestsAll, {
  getCategoriesAll,
} from "../../services/modules/home";
const useHome = defineStore("home", {
  state: () => ({
    hotSuggest: {},
    categoriesInfo: {},
  }),
  actions: {
    async fetchHotSuggestInfo() {
      const res = await getHotSuggestsAll();
      this.hotSuggest = res.data;
    },
    async fetchCategoriesInfo() {
      const res = await getCategoriesAll();
      this.categoriesInfo = res.data;
    },
  },
});

export default useHome;
