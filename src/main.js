// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from "vue";
import App from "./App";
// 解决移动端点击300毫秒的延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)
// import router from './router'
import "common/stylus/index.styl"
// E:\github\src\common\stylus\index.styl
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: "#app",
  // router,
  render: h => h(App)
});
