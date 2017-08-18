import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Zhuye from '../views/Zhuye/Zhuye'
import Mall from  '../views/Mall/Mall'
import Personal from '../views/Personal/Personal'
import MallSearch from '../views/Mall/MallSearch'
//import Login from './../views/Login'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',redirect: '/Zhuye', //重定向
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Zhuye', name: 'Zhuye', component: Zhuye
      //path: '/', name: 'Login', component: Login
    },
    { path:'/Mall',name: 'Mall', component: Mall },
    { path:'/Personal',name:'Personal', component:Personal },
    { path:'/MallSearch',name:'MallSearch', component:MallSearch }
  ]
})
