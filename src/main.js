import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import waterfall from 'vue-waterfall2'
import '@/styles/index.scss' // global css
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.use(ElementUI, { size: 'mini' });
Vue.use(waterfall)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
