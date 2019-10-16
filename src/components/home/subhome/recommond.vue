<template>
  <div class="recommond">
    <div class="header">
      <span>热销推荐</span>
    </div>
    <router-link
      :to="'/detail/'+item.id"
      tag="div"
      class="item border-bottom"
      v-for="item in recommendList"
      :key="item.id"
    >
      <div class="item-img">
        <img width="85" height="85" :src="item.imgUrl" />
      </div>
      <div class="item-desc">
        <div class="desc-header">
          <span>{{item.title}}</span>
        </div>
        <p class="desc-detail">{{item.desc}}</p>
        <div class="desc-btn">
          <button class="btn">查看详情</button>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "HomeRecommond",
  props: {
    recommendList: {
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
  margin-top: 10px;
  padding-left: 5px;
}
.item {
  display: flex;
  .item-img {
    padding: 5px;
  }
  .item-desc {
    padding: 5px;
    .desc-header {
      height: 27px;
      line-height: 27px;
      font-size: 16px;
    }
    .desc-detail {
      height: 20px;
      line-height: 20px;
      color: #ccc;
      max-width: 260px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .desc-btn {
      margin-top: 8px;
      .btn {
        height: 22px;
        line-height: 22px;
        padding: 0 10px;
        background-color: #ff9300;
        color: #fff;
        border-radius: 5px;
      }
    }
  }
}
</style>