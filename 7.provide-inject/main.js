import Vue from 'vue'
import App from './App.vue'
import 'animate.css'

Vue.config.productionTip = false
// 发布订阅模式
// event Bus
Vue.prototype.$bus = new Vue()



new Vue({
  render: h => h(App)
}).$mount('#app')
