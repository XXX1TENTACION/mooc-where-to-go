<template>
  <div class="swiper" v-if="swiperList.length">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img width="100%" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: {
      type: Array
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true
      }
    };
  }
};
</script>
<style lang='scss' scoped>
.swiper >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}
.swiper >>> .swiper-slide {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 26.7%;
}
</style>