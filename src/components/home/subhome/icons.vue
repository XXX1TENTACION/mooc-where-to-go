<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in pageList" :key="item.$index">
        <div class="icons-item" v-for="page in item" :key="page.id">
          <div class="icons-img">
            <img width="55" height="55" :src="page.imgUrl" />
          </div>
          <div class="icons-desc">
            <span class="text">{{ page.desc }}</span>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  props: {
    iconList: {
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  computed: {
    pageList() {
      //pageList是一个二维数组，里面的每一个数组由每一页的数据组成
      const pageList = [];
      this.iconList.forEach((item, index) => {
        const pageIndex = Math.floor(index / 8);
        if (!pageList[pageIndex]) {
          pageList[pageIndex] = [];
        }
        pageList[pageIndex].push(item);
      });
      return pageList;
    }
  }
};
</script>
<style lang='scss' scoped>
.icons >>> .swiper-slide {
  display: flex;
  flex-wrap: wrap;
}
.icons >>> .swiper-container {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 49.3%;
}
.icons {
  .icons-item {
    flex: 0 0 25%;
    // width: 93px;
    height: 80px;
    padding-top: 10px;
    box-sizing: border-box;
    .icons-img {
      text-align: center;
    }
    .icons-desc {
      margin-top: 5px;
      text-align: center;
    }
  }
  .swiper-pagination {
    bottom: 0;
  }
}
</style>