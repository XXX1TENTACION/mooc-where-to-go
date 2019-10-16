<template>
  <div class="city">
    <common-header class="header">
      <div class="title" slot="center">
        <span class="text">国内城市</span>
      </div>
    </common-header>
    <city-search class="search" :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :alpha="alpha"></city-list>
    <city-alpha :alphabet="alphabet" @change="postInfo"></city-alpha>
  </div>
</template>
<script>
import CommonHeader from "components/common/header";
import CitySearch from "components/citylist/subcitylist/search";
import CityList from "components/citylist/subcitylist/list";
import CityAlpha from "components/citylist/subcitylist/alpha";
export default {
  name: "citylist",
  components: { CommonHeader, CitySearch, CityList, CityAlpha },
  data() {
    return {
      cities: {},
      hotCities: [],
      alpha: ""
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("/api/city.json").then(this.success);
    },
    success(res) {
      const data = res.data.data;
      this.cities = data.cities;
      this.hotCities = data.hotCities;
    },
    postInfo(alphabet) {
      this.alpha = alphabet;
    }
  },
  computed: {
    alphabet() {
      const alphabet = [];
      for (let key in this.cities) {
        alphabet.push(key);
      }
      return alphabet;
    }
  }
};
</script>
<style lang='scss' scoped>
.title {
  flex: 1;
  text-align: center;
  .text {
    margin-left: -33px;
  }
}
</style>