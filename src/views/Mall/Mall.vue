<template>
	<div class="personal">
	    <!-- 固定在最顶部 -->
	    <mt-header title="商城"  style="background:#fb8a2e">  
          <router-link to="/Zhuye" slot="left">  
            <mt-button icon="back" @click="handleClose"></mt-button>  
          </router-link>  
        </mt-header>
	    <app-goods></app-goods>
	</div>
</template>

<script>
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
			'app-goods':Goods
		}
	}
</script>
