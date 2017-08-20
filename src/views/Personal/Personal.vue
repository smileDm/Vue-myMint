<template>
	<div class="personal">
	    <!-- 固定在最顶部 -->
	    <mt-header title="我的" style='background-color: #fb8a2e'>  
	        <router-link to="/" slot="left">  
	        </router-link>  
	        <mt-button icon="more" slot="right" @click="more"></mt-button>  
	    </mt-header>
	    <app-tabbar></app-tabbar>
	</div>
</template>

<script>
import Tabbar1 from '../../views/Zhuye/Tabbar1'
	export default{
		methods: {  
		    /* 固定在顶部更多 */ 
		    more: function(){  
		        console.log("更多")  
		    }
		},
		components:{
			'app-tabbar':Tabbar1
		}
	}
</script>

