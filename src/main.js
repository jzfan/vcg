import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios';
import router from './router'

// Vue.prototype.axios = axios;

Vue.config.productionTip = false

Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')