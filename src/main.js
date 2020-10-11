import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios';
import echarts from 'echarts'

Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
