import { defineStore } from "pinia";
import getCityAll from "../../services/modules/city";

const useCity = defineStore("city", {
  state: () => ({
    cityInfo: {},
    curCity: { cityName: "广州" },
  }),
  actions: {
    async fetchCityInfo() {
      const res = await getCityAll();
      this.cityInfo = res.data;
    },
  },
});
export default useCity;
