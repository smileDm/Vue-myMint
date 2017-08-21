<template>
	<div class="personal">
	    <!-- 固定在最顶部 -->
	    <mt-header title="我的" style='background-color: #fb8a2e'>  
	        <router-link to="/" slot="left">  
	        </router-link>
	    </mt-header>
	    <app-img></app-img>
	    <app-listview></app-listview>
	    <app-tabbar></app-tabbar>
	</div>
</template>

<script>
import Img from './Img'
import Listview from './Listview'
import Tabbar1 from '../../views/Zhuye/Tabbar1'
	export default{
		methods: {  
		    
		},
		components:{
			'app-img':Img,
			'app-tabbar':Tabbar1,
			'app-listview':Listview
		}
	}
</script>

