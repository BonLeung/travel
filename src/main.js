import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyLoad from 'vue-lazyload'

import './assets/styles/reset.css'
import './assets/styles/border.css'
import 'swiper/css/swiper.css'
import './assets/styles/iconfont.css'

import loadingGif from './assets/images/loading.gif'

Vue.config.productionTip = false

// FastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  loading: loadingGif,
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
