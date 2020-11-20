import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import html2canvas from 'html2canvas'
import QRCode from 'qrcodejs2'

Vue.use(Element).use(Vant)

Vue.config.productionTip = false
Vue.prototype.$html2canvas = html2canvas
Vue.prototype.$QRCode = QRCode

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
