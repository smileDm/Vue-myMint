<template>
	<div class="find">
		<!-- 固定在最顶部 -->
		<div v-show='show' class="pagecover" @click='hide'></div>
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
		name:'home',
		data(){
			return{
				show:false,
				showLoading:true
			}
		},
		methods:{
			handleClose:function(){
				console.log("返回")
			},
			hide(){
			        this.show=!this.show;
			},
			beforeRouteLeave(to,from,next){
			      // console.log('leave');
			      if(to.name==='Topic'){
			        let scrollTop=$(window).scrollTop();
			        let array=this.listArray;
			        window.window.sessionStorage.scrollTop=scrollTop;
			        window.window.sessionStorage.array=JSON.stringify(array);
			        this.$backToTop().hide();
			        $(window).off('scroll');
			      }
			      next();
			    },
			    beforeRouteEnter(to,from,next){
			      if (from.name!=='Topic') {
			        window.window.sessionStorage.removeItem('array');
			      }
			      next();
			    }
		},
		components:{
			'app-fashion':Fashion,
			'app-tabbar':Tabbar1
		}
	}
</script>

<style lang='scss'>
    .pagecover{
      position: fixed;
      top:0;
      left:0;
      right:0;
      bottom:0;
      z-index:100;
      background:rgba(0,0,0,0.4);
    }
</style>