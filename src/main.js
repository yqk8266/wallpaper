import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/404.jpg'),
  loading: require('./assets/loading.jpg'),
  attempt: 1
})
// Vue.use(ElementUI, { size: 'mini' });
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
