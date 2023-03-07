import { defineStore } from "pinia";
import getHotSuggestsAll, {
  getCategoriesAll,
  getCityListAll,
} from "../../services/modules/home";
const useHome = defineStore("home", {
  state: () => ({
    hotSuggest: {},
    categoriesInfo: {},
    cityList: [],
    currentPage: 1,
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
    async fetchCityListInfo() {
      const res = await getCityListAll(this.currentPage++);
      this.cityList.push(...res.data);
    },
  },
});

export default useHome;
