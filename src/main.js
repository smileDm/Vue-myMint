// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import axios from  'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from "vue-resource"


Vue.use(VueResource);
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(MintUI)
Vue.use(Vuex)
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
