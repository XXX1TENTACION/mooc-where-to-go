<template>
  <div>
    <div class="search">
      <input type="text" class="input" placeholder="请输入城市名称或拼音" v-model="textValue" />
    </div>
    <search-list :cities="cities" :textValue="textValue"></search-list>
  </div>
</template>
<script>
import SearchList from "./searchList";
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  components: { SearchList },
  data() {
    return {
      textValue: ""
    };
  }
};
</script>
<style lang='scss' scoped>
@import "~css/variable.scss";
.search {
  height: 36px;
  background-color: $bgColor;
  margin-top: -1px;
  text-align: center;
  .input {
    height: 31px;
    line-height: 31px;
    width: 350px;
    padding: 0 8px;
    color: #666;
    border-radius: 3px;
    text-align: center;
  }
}
</style>