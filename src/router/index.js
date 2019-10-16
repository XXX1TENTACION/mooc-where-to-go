import Vue from "vue";
import Router from "vue-router";
import Home from "components/home/home";
import Detail from "components/detail/detail";
import CityList from "components/citylist/citylist";
Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/detail/:id", name: "detail", component: Detail },
    { path: "/citylist", name: "citylist", component: CityList }
  ],
  //每次进入到新的路由页面时都让页面从顶部开始显示
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
