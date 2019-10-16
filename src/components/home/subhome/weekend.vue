<template>
  <div class="weekend">
    <div class="header">
      <span>周末去哪儿</span>
    </div>
    <div class="item" v-for="item in weekendList" :key="item.id">
      <div class="item-img">
        <img width="100%" :src="item.imgUrl" />
      </div>
      <div class="item-text">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeWeekend",
  props: {
    weekendList: {
      type: Array
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.header {
  height: 40px;
  line-height: 40px;
  background-color: #eee;
  padding-left: 5px;
}
.item-img {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 36.6%;
}
.item-text {
  padding: 5px;
  .item-title {
    height: 27px;
    line-height: 27px;
  }
  .item-desc {
    height: 20px;
    line-height: 20px;
    max-width: 350px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #ccc;
  }
}
</style>