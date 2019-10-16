<template>
  <div>
    <common-header>
      <div class="search" slot="center">
        <span class="iconfont iconsousuo icon-search"></span>
        <input class="input" type="text" placeholder="输入喜欢的城市或游玩景点" />
      </div>
      <router-link tag="div" to="/citylist" class="select" slot="right">
        <span class="city">{{locationCity}}</span>
        <span class="iconfont iconarrow-left-copy-copy arrow"></span>
      </router-link>
    </common-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommond :recommendList="recommendList"></home-recommond>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
import CommonHeader from "components/common/header";
import HomeSwiper from "components/home/subhome/swiper";
import HomeIcons from "components/home/subhome/icons";
import HomeRecommond from "components/home/subhome/recommond";
import HomeWeekend from "components/home/subhome/weekend";
import { mapState } from "vuex";
export default {
  name: "home",
  components: {
    CommonHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommond,
    HomeWeekend
  },
  data() {
    return {
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("/api/index.json").then(this.success);
    },
    success(res) {
      const data = res.data.data;
      this.iconList = data.iconList;
      this.recommendList = data.recommendList;
      this.swiperList = data.swiperList;
      this.weekendList = data.weekendList;
    }
  },
  computed: {
    ...mapState(["locationCity"])
  }
};
</script>
<style lang='scss' scoped>
.search {
  flex: 1;
  position: relative;
  margin-left: 5px;
  color: #ccc;
  .icon-search {
    position: absolute;
    top: 2px;
    left: 7px;
  }
  .input {
    box-sizing: border-box;
    width: 100%;
    height: 31px;
    line-height: 31px;
    border-radius: 7px;
    padding: 0 24px;
  }
}
.select {
  min-width: 52px;
  height: 33px;
  line-height: 33px;
  text-align: center;
  padding: 5px;
  font-size: 0;
  .city {
    font-size: 13px;
    margin-right: 3px;
  }
  .arrow {
    font-size: 13px;
  }
}
</style>