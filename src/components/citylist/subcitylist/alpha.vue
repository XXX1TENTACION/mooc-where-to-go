<template>
  <ul class="alpha-list">
    <li
      class="alpha-item"
      v-for="item in alphabet"
      :key="item.$index"
      @click="test(item)"
      @touchstart.prevent="touchStart"
      @touchmove="touchMove"
      @touchend="touchEnd"
      :ref="item"
    >
      <span>{{ item }}</span>
    </li>
  </ul>
</template>
<script>
export default {
  name: "CityAlpha",
  props: {
    alphabet: Array
  },
  data() {
    return {
      flag: false
    };
  },
  methods: {
    test(name) {
      this.$emit("change", name);
    },
    touchStart() {
      this.flag = true;
    },
    touchMove(e) {
      if (this.flag) {
        const startTop = this.$refs["A"][0].offsetTop;
        const touchTop = e.touches[0].clientY - 79;
        const index = Math.floor((touchTop - startTop) / 20);
        this.$emit("change", this.alphabet[index]);
      }
    },
    touchEnd() {
      this.flag = false;
    }
  }
};
</script>
<style lang='scss' scoped>
@import "css/variable.scss";
.alpha-list {
  position: absolute;
  top: 79px;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .alpha-item {
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: $bgColor;
  }
}
</style>