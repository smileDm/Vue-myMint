<template>
	<div class="personal">
	    <!-- 固定在最顶部 -->
	    <mt-header title="商城" style='background-color: #fb8a2e'>  
	        <router-link to="/" slot="left">  
	        </router-link>  
	        <mt-button icon="more" slot="right" @click="more"></mt-button>  
	    </mt-header>
	    <!-- 商城左边部分 -->
	    <app-leftmall></app-leftmall>
	    <app-watch></app-watch>
	</div>
</template>

<script>
	import LeftMall from './LeftMall'
	import watch from './watch'
	export default{
		methods: {  
		    /* 固定在顶部更多 */ 
		    more: function(){  
		        console.log("更多")  
		    }
		},
		components:{
			'app-leftmall':LeftMall,
			'app-watch':watch
		}
	}
</script>
