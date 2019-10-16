<template>
  <div class="header">
    <div class="img-wrapper" @click="gallaryImgsShow">
      <img width="100%" :src="bannerImg" />
    </div>
    <div class="bulletin">
      <div class="left">
        <span>{{sightName}}</span>
      </div>
      <div class="right">
        <span class="iconfont iconpicture"></span>
        <span class="number">3</span>
      </div>
    </div>
    <div class="title-back" v-show="flag" @click="$router.back(-1)">
      <span class="iconfont iconfanhui"></span>
    </div>
    <common-fade>
      <common-header class="fixed" v-show="!flag">
        <div class="title-fixed" slot="center">
          <span class="title-text">景点详情</span>
        </div>
      </common-header>
    </common-fade>
    <div class="gallary" v-show="isgallaryImgsShow" @click="gallaryImgsHide">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in gallaryImgs" :key="item .id">
          <img width="375" height="262" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
import CommonHeader from "components/common/header";
import CommonFade from "components/common/fade";
import { mapState, mapMutations } from "vuex";
export default {
  name: "DetailHeader",
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: { CommonHeader, CommonFade },
  data() {
    return {
      flag: true,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        }
      }
    };
  },
  computed: {
    ...mapState(["isgallaryImgsShow"])
  },
  methods: {
    ...mapMutations(["gallaryImgsShow", "gallaryImgsHide"])
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 60) {
        this.flag = false;
      } else {
        this.flag = true;
      }
    });
  }
};
</script>
<style lang='scss' scoped>
.gallary >>> .swiper-container {
  width: 100%;
  overflow: inherit;
}
.header {
  position: relative;
  .img-wrapper {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 55%;
  }
  .bulletin {
    z-index: 97;
    position: absolute;
    display: flex;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    background-image: linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .left {
      flex: 1;
      height: 36px;
      line-height: 36px;
      padding: 0 10px;
      font-size: 16px;
    }
    .right {
      flex: 0 0 66px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      font-size: 12px;
    }
  }
  .title-back {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .fixed {
    z-index: 98;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .title-fixed {
    flex: 1;
    text-align: center;
    .title-text {
      margin-left: -33px;
    }
  }
  .gallary {
    z-index: 99;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .swiper-pagination {
      color: #fff;
      bottom: -170px;
    }
  }
}
</style>