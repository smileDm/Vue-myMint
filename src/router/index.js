import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import Zhuye from '../views/Zhuye/Zhuye'
import Mall from  '../views/Mall/Mall'
import Personal from '../views/Personal/Personal'
import MallSearch from '../views/Mall/MallSearch'
import Tabbar1 from '../views/Zhuye/Tabbar1'
import MallReSearch from '../views/Mall/MallReSearch'
import Find from '../views/Find/Find'
import Fashion from '../views/Find/Fashion'
import Login from '../views/Login'
import GoTop from '../views/Find/GoTop'


//import Login from './../views/Login'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',redirect: '/Zhuye', //重定向
      name: 'Hello',
      component: Hello
    },
    { path:'/Zhuye', name: 'Zhuye', component: Zhuye },
    { path:'/Mall',name: 'Mall', component: Mall },
    { path:'/Personal',name:'Personal', component:Personal },
    { path:'/MallSearch',name:'MallSearch', component:MallSearch },
    { path:'/MallReSearch',name:'MallReSearch', component:MallReSearch },
    { path:'/Find',name:'Find',component:Find},
    { path:'/Fashion',name:'Fashion',component:Fashion},
    { path:'/Login',name:'Login',component:Login},
    { path:'/GoTop',name:'GoTop',component:GoTop}

  ]
})
