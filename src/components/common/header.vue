<template>
  <div class="header">
    <div class="icon-back" @click="$router.push('/')">
      <span class="iconfont iconfanhui"></span>
    </div>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>
<script>
export default {
  name: "CommonHeader",
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
@import "~css/variable.scss";
.header {
  width: 100%;
  height: $headerHeight;
  line-height: $headerHeight;
  background-color: $bgColor;
  color: #fff;
  display: flex;
  .icon-back {
    width: 32px;
    text-align: center;
  }
}
</style>