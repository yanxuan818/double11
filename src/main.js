// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router/index.js'
import http from "@/common/js/http.js"
import "../static/css/reset.css";
import "../static/js/flexible.js";
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data:{
    http:http,
    isMask:false,
    isError:false,
  }
})
