<template>
  <div v-show="textValue" ref="list" class="serach-list">
    <ul>
      <li
        class="search-item border-bottom"
        v-for="item in list"
        :key="item.id"
        @click="change(item.name)"
      >{{item.name}}</li>
      <li class="search-item border-bottom" v-if="!this.list.length">没有找到该城市</li>
    </ul>
  </div>
</template>
<script>
import Bscroll from "better-scroll";
import { mapMutations } from "vuex";
export default {
  name: "SearchList",
  props: {
    cities: Object,
    textValue: String
  },
  data() {
    return {
      list: []
    };
  },
  watch: {
    textValue(newValue) {
      const list = [];
      if (!newValue) {
        this.list = [];
        return;
      }
      for (let key in this.cities) {
        this.cities[key].forEach(item => {
          if (
            item.name.indexOf(newValue) !== -1 ||
            item.spell.indexOf(newValue) !== -1
          ) {
            list.push(item);
          }
        });
      }
      this.list = list;
    }
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
  }
};
</script>
<style lang='scss' scoped>
.serach-list {
  z-index: 100;
  position: absolute;
  top: 79px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #eee;
  overflow: hidden;
  .search-item {
    text-align: start;
    height: 31px;
    line-height: 31px;
    padding-left: 10px;
    background-color: #fff;
  }
}
</style>