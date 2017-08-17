import Vue from 'vue'
import Router from 'vue-router'
//import Header from './../views/header'
import Login from './../views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //path: '/', name: 'Header', component: Header
      path: '/', name: 'Login', component: Login
    }
  ]
})
