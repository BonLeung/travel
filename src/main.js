import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/styles/reset.css'
import './assets/styles/border.css'
import 'swiper/css/swiper.css'

Vue.config.productionTip = false

FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
