<template>
  <div id="index">
   <!--首页搜索-->
   <app-search></app-search>
   <!--首页轮播-->
   <app-banner :listImg="listImg"></app-banner>
   <!--首页商品展示-->
   <app-goods></app-goods> 
   <!--底部按钮-->
   <app-tabbar></app-tabbar>

   
  </div>
</template>

<script>
 //导入搜索组件（搜索）
 import Search from './Search'
 //导入Banner组件（轮播）
 import Banner from './Banner'
 //导入图片
 import a from '../../assets/img/home/banner1.jpg'
 import b from '../../assets/img/home/banner2.jpg'
 import c from '../../assets/img/home/banner3.jpg'
 import d from '../../assets/img/home/banner4.jpg'
 import e from '../../assets/img/home/banner5.jpg'
 //导入Goods组件（商品展示）
 import Goods from './Goods'
 //导入Tabbar1组件（底部按钮）
 import Tabbar1 from './Tabbar1'

     export default {
        data() {
            return {
                listImg: [
                	{url: a}, {url: b}, {url: c}, {url: d}, {url: e}
                ]
            }
        },
        components: {
        	'app-search':Search,
            'app-banner': Banner,
            'app-goods':Goods,
            'app-tabbar':Tabbar1
        }
    }
</script>
