<template>
	<div class="find">
		<!-- 固定在最顶部 -->
	    <mt-header title="发现时尚"  style="background:#fb8a2e">  
          <router-link to="/Zhuye" slot="left">  
            <mt-button icon="back" @click="handleClose"></mt-button>
          </router-link>  
        </mt-header>
		<app-fashion></app-fashion>

        <app-tabbar></app-tabbar>	
       
	</div>
</template>

<script>
import Fashion from './Fashion'
import Tabbar1 from '../../views/Zhuye/Tabbar1'

	export default{
		methods:{
			handleClose:function(){
				console.log("返回")
			}
		},
		components:{
			'app-fashion':Fashion,
			'app-tabbar':Tabbar1
		}
	}
</script>