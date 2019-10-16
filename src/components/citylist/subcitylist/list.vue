<template>
  <div class="list" ref="list">
    <div class="list-wrapper">
      <div class="city-now">
        <div class="header border-topbottom">
          <span>当前城市</span>
        </div>
        <ul class="city-list">
          <li class="city-item">{{locationCity}}</li>
        </ul>
      </div>
      <div class="city-hot">
        <div class="header border-bottomtop">
          <span>热门城市</span>
        </div>
        <ul class="city-list">
          <li
            class="city-item"
            v-for="item in hotCities"
            :key="item.id"
            @click="change(item.name)"
          >{{ item.name }}</li>
        </ul>
      </div>
      <ul class="list-wrapper">
        <li class="list-item" v-for="(item,key) of cities" :key="item.$index" :ref="key">
          <div class="header border-topbottom">
            <span>{{key}}</span>
          </div>
          <div
            class="city-name border-bottom"
            v-for="city in cities[key]"
            :key="city.id"
            @click="change(city.name)"
          >
            <span>{{city.name}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CityList",
  props: {
    cities: Object,
    hotCities: Array,
    alpha: String
  },
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapMutations(["changeCity"]),
    init() {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.list);
      });
    },
    change(cityName) {
      this.changeCity(cityName);
      this.$router.push("/");
    }
  },
  watch: {
    alpha(newValue) {
      if (this.$refs[newValue]) {
        const el = this.$refs[newValue][0];
        this.scroll.scrollToElement(el);
      }
    }
  },
  computed: {
    ...mapState(["locationCity"])
  }
};
</script>
<style lang='scss' scoped>
.list {
  position: absolute;
  left: 0;
  right: 0;
  top: 79px;
  bottom: 0;
  overflow: hidden;
  z-index: -1;
}
.header {
  height: 27px;
  line-height: 27px;
  padding-left: 10px;
  background-color: #eee;
  color: #666;
}
.city-list {
  padding: 5px 30px 5px 5px;
  display: flex;
  flex-wrap: wrap;
  .city-item {
    width: 100px;
    padding: 6px 0;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 3px;
    margin: 5px;
  }
}
.city-name {
  height: 38px;
  line-height: 38px;
  padding-left: 10px;
}
</style>