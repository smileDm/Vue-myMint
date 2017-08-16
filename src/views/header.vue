<template>
  <div>
   <app-banner :listImg="listImg"></app-banner>
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

     export default {
        data() {
            return {
                listImg: [
                	{url: a}, {url: b}, {url: c}, {url: d}, {url: e}
                ]
            }
        },
        components: {
            'app-banner': Banner
        }
    };
</script>