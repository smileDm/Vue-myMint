<template>
  <div>
   <app-banner :listImg="listImg"></app-banner>
   <!-- <app-navbar></app-navbar> -->
   <app-goods></app-goods> 
  </div>
</template>

<script>
 //导入Banner组件
 import Banner from './Header/Banner.vue'
 //导入图片
 import a from '../assets/img/home/banner1.png'
 import b from '../assets/img/home/banner2.jpg'
 import c from '../assets/img/home/banner3.jpg'
 import d from '../assets/img/home/banner4.jpg'
 import e from '../assets/img/home/banner5.jpg'
 //导入Navbar组件
/* import Navbar from './Header/Navbar.vue'*/
 //导入Goods组件
 import Goods from './Header/Goods.vue'

     export default {
        data() {
            return {
                listImg: [
                	{url: a}, {url: b}, {url: c}, {url: d}, {url: e}
                ]
            }
        },
        components: {
            'app-banner': Banner,
            /*'app-navbar': Navbar,*/
            'app-goods':Goods
        }
    };
</script>