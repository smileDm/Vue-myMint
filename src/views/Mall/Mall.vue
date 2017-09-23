<template>
	<div class="personal">
	    <!-- 固定在最顶部 -->
	    <mt-header title="商城"  style="background:#fb8a2e">  
          <router-link to="/Zhuye" slot="left">  
            <mt-button icon="back" @click="handleClose"></mt-button>  
          </router-link>  
        </mt-header>
	    <!-- 商城左边部分 -->
	    <!--<app-leftmall></app-leftmall>
	    <app-watch></app-watch>-->
	    <app-goods></app-goods>
	    <!-- <app-tabbar></app-tabbar> -->
	</div>
</template>

<script>
	//import LeftMall from './LeftMall'
	//import watch from './watch'
	/*import Tabbar1 from '../../views/Zhuye/Tabbar1'*/
	import Goods from './Goods'
	import BScroll from 'better-scroll';

	export default{
		methods: {  
		    /* 固定在顶部更多 */ 
		    handleClose: function(){  
		       console.log("返回")  
		    }
		   
		},
		components:{
			//'app-leftmall':LeftMall,
			//'app-watch':watch,
			/*'app-tabbar':Tabbar1,*/
			'app-goods':Goods
		}
	}
</script>
