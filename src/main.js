import Vue from 'vue'
import 'normalize.css/normalize.css'
import './plugins/axios'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import '@/permission'

import VirtualCollection from 'vue-virtual-collection'

Vue.use(VirtualCollection)

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)


import wechat from './utils/wechat'
if (wechat.isWechat()) {
  Vue.prototype.$wechat = wechat
}

import waterfall from 'vue-waterfall2'
Vue.use(waterfall)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/loading.jpg'),
  loading: require('./assets/loading.jpg'),
  attempt: 1
})
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
