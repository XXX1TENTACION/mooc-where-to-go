<template>
  <div>
    <detail-header :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-header>
    <detail-list :categoryList="categoryList"></detail-list>
    <div class="test"></div>
  </div>
</template>
<script>
import DetailHeader from "components/detail/subdetail/header";
import DetailList from "components/detail/subdetail/list";
export default {
  name: "detail",
  components: { DetailHeader, DetailList },
  data() {
    return {
      sightName: "",
      bannerImg: "",
      gallaryImgs: [],
      categoryList: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("/api/detail.json").then(this.success);
    },
    success(res) {
      const data = res.data.data;
      this.categoryList = data.categoryList;
      this.gallaryImgs = data.gallaryImgs;
      this.sightName = data.sightName;
      this.bannerImg = data.bannerImg;
    }
  }
};
</script>
<style lang='scss' scoped>
.test {
  height: 800px;
}
</style>