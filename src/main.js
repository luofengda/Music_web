// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from "vue";
import App from "./App";
import router from './router'
// 解决移动端点击300毫秒的延迟
import fastclick from 'fastclick'
import "common/stylus/index.styl"

fastclick.attach(document.body)
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
