// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "css/iconfont.css"; //字体图标文件
import "css/reset.css"; //css样式重置
import "css/border.css"; //移动端一像素边框
import fastClick from "fastclick"; //解决移动端点击300毫秒延迟的情况
import "@babel/polyfill"; //解决浏览器不支持某些es6语法
import VueAwesomeSwiper from "vue-awesome-swiper"; //轮播组件
import "swiper/dist/css/swiper.css"; //轮播组件依赖的样式
import store from "./store/index";
import axios from "axios";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper /* { default global options } */);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  store
});
