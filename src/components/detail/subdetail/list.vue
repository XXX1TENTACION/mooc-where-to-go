<template>
  <div class="list">
    <ul v-for="item in categoryList" :key="item.$index">
      <li class="list-item border-bottom">
        <span class="mp-ticketype-ticket"></span>
        <span>{{ item.title }}</span>
      </li>
      <li v-if="item.children" class="list-children">
        <detail-list :categoryList="item.children"></detail-list>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "DetailList",
  props: {
    categoryList: {
      type: Array
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
.list-item {
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  .mp-ticketype-ticket {
    display: inline-block;
    width: 18px;
    height: 18px;
    margin-top: 3px;
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -19px
      no-repeat;
    background-size: cover;
  }
}
.list-children {
  padding: 0 10px;
}
</style>