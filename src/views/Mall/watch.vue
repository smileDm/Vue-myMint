<template>
  <div class="watching">
    <!--<watchsearch></watchsearch>-->
    <app-leftmall></app-leftmall>
    <div class="tu">
    <li class="picture"v-for="(item,index) in items">
      <router-link :to="item.url">
        <img v-bind:src="item.pic" alt="">
        <p class="text">{{item.text}}</p>
      </router-link>
    </li>
    </div>
  </div>
</template>
<script>
//import watchsearch from '../components/watchsearch'
import LeftMall from './LeftMall'
export default {
  data (){
    return {
      items:[
        {
          pic: 'https://gd1.alicdn.com/imgextra/i3/464241778/TB2Yf.6fkqvpuFjSZFhXXaOgXXa_!!464241778.jpg_400x400.jpg',
          text: '手机周边',
          url: '/watching/phone'
        },
        {
          pic: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/TB1bxOpKVXXXXX3XFXXXXXXXXXX_!!0-item_pic.jpg_270x270.jpg_.webp',
          text: '节庆礼品',
          url: '/find'

        },
        {
          pic: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/TB1..vBLVXXXXb9XVXXXXXXXXXX_!!0-item_pic.jpg_230x230.jpg_.webp',
          text: '图书杂志',
          url: '/find'
        },
        {
          pic: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/TB1wJyjRXXXXXaNXFXXXXXXXXXX_!!0-item_pic.jpg_230x230.jpg_.webp',
          text: '配饰',
          url: '/find'
        },
        {
          pic: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/TB1NiWbPFXXXXbtaXXXXXXXXXXX_!!0-item_pic.jpg_230x230.jpg_.webp',
          text: '面部护理',
          url: '/find'
        },
        {
          pic: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/TB1JT5iLXXXXXX9XXXXXXXXXXXX_!!0-item_pic.jpg_230x230.jpg_.webp',
          text: '文具',
          url: '/find'
        }
      ]
    }

  },
  components: {
    //watchsearch,
    'app-leftmall':LeftMall
  },
  methods:{
  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
body{
  background: #fff;
}
li{
  list-style: none;
}
.watching{
  width: 100%;
  height: 100%;
  position: relative;
}
.tu{
  position: absolute;
  top: 51px;
  left: 80px;
  right: 0;
  height: 500px;
}
.picture{
  margin-top: 20px;
  float: left;
  width: 33.33333333%;
  height: 80px;
}
a{
  text-decoration: none;
  color: #8A8A8A;
}
.picture img{
  width: 50px;
  height: 50px;
  margin: 0 auto
}
.picture .text{
  display: block;
  text-align: center;
  width: 100%;
  height: 30px;
  line-height: 30px;
}

</style>
