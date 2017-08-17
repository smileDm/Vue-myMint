<template>
  <div id="app">
    <router-view></router-view>
    <m-tabbar v-model="selected">
      <m-tabbar-item id="Zhuye" isRouter>
        <img slot="icon-normal" src="./assets/img/tabbar/zhuye_gray.png">
        <img slot="icon-active" src="./assets/img/tabbar/zhuye_orange.png">
        主页
      </m-tabbar-item>
      <m-tabbar-item id="Personal" isRouter>
        <img slot="icon-normal" src="./assets/img/tabbar/me_gray.png">
        <img slot="icon-active" src="./assets/img/tabbar/me_orange.png">
        我的
      </m-tabbar-item>
    </m-tabbar>
  </div>
</template>

<script>
  import mTabbar from './views/tabbar.vue'
  import mTabbarItem from './views/tabbar-item.vue'
  export default {
    name: 'app',
    components:{
        mTabbar,
        mTabbarItem
    },
    data() {
        return {
          selected:"Zhuye"
        }
      }
  }
</script>


<style lang="less">
.m-tabbar{
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 50px;
    background: #fff;
    border-top: 1px solid #e4e4e4;

    .m-tabbar-item{
      flex: 1;
      text-align: center;
      .m-tabbar-item-icon{
          display: block;
          padding-top: 2px;
          img{
              width: 28px;
              height: 28px;
          }
      }
      .m-tabbar-item-text{
          display: block;
          font-size: 10px;
          color:#949494;
      }
      &.is-active{
          .m-tabbar-item-text{
              color: #fb8a2e;
          }
      }
  }
}
</style>

