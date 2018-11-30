// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MixIn from './plugins/mixin'

import router from './router'
import Header from './Header'
import Video from './Video'
import Footer from './Footer'
import Navigator from './Navigator'
import Payment from './Payment'

// import components
import DaumMap from './plugins/daum-map'
import VueLazyload from 'vue-lazyload'
import VueUploadComponent from 'vue-upload-component'
import axios from 'axios'
import VeeValidate from 'vee-validate'
// import { Validator } from 'vee-validate'
// import ko from 'vee-validate/dist/locale/ko'

Vue.config.productionTip = false
Vue.component('app-header', Header)
Vue.component('app-video', Video)
Vue.component('app-footer', Footer)
Vue.component('app-navigator', Navigator)
Vue.component('app-payment', Payment)

// Utilities
Vue.component('vue-daum-map', DaumMap)
Vue.component('vue-upload', VueUploadComponent)

Vue.use(DaumMap)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/common/temp.png'),
  loading: require('./assets/common/lc_logo_square.jpg'),
  attempt: 2,
  observer: true,
  listenEvents: [ 'scroll', 'wheel', 'resize' ]
})

Vue.prototype.$axios = axios

// const dictionary = {
//   ko: {
//     attributes: {
//       email: '이메일'
//     }
//   }
// }

// Validator.localize(dictionary)

Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    MixIn
  },
  template: '<App/>'
})
