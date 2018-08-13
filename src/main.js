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
import DaumMap from './plugins/daum-map'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.component('app-header', Header)
Vue.component('app-video', Video)
Vue.component('app-footer', Footer)
Vue.component('app-navigator', Navigator)
Vue.component('vue-daum-map', DaumMap)

Vue.use(DaumMap)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/common/temp.png'),
  loading: require('./assets/common/lc_logo_square.jpg'),
  attempt: 2,
  observer: true,
  listenEvents: [ 'scroll', 'wheel', 'resize' ]
})

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
