<template>
	<div>
		<div class="mall_top">
		  	<!-- 返回 -->
		  	<div class="return" @click="goback"></div>
		  	<!-- 搜索 -->
			<div class="search">
		  		<mt-search  cancel-text="取消" placeholder="搜索" v-model="message" @keyup.enter="search"></mt-search>
		  		<span class="tiphide" ref="tip">dmdmdmdm<!-- <img src="../assets/pig.png" alt=""> -->
		  		数据没mock</span>
		  	</div>
		</div>
  		<div class="mall_content">
  			<!-- 商品 -->
  			<div class="mall" v-for="mall in malls">
  				<img class="mall_img" :src="mall.pic" alt="">
  				<span class="mall_name">{{ mall.name }}</span><br>
  				<span class="mall_price">{{ mall.price }}</span>
  				<span class="mall_num">好评{{ mall.number }}</span>
  			</div>

  		</div>

		

  	</div>
</template>

<script>
export default{
	data(){
		return{
			malls:[],
			inputText: ''
		}
	},
	methods:{
		goback(){
			this.$router.push({path:'MallReSearch'})
		}
	},
	created () {
	  this.inputText = this.$store.state.inputText
	  console.log('hghhhh');
	 this.axios.get('/api/mock/5993aedca1d30433d8631466/myMint/dMiao')
	    .then((res)=>{	       
	       let message = res.data
	       for(let i in message){
	         let item = i;
	         if(item.indexOf(this.inputText)!== -1){
	           this.malls = message[item]
	           return
	         }
	       }
	       if(this.malls.length){
	         this.message = true
	         console.log('找到哦');
	       }else{
	         this.message = false
	         this.$refs.tip.className='tipshow'
	         console.log('没有找到哦');
	       }
	       })
	   .catch((error) => {console.log(error)})
	},
	computed: {

      // message(){
      //   return this.$store.state.inputText
      // }

      message:{
      	get:function(){
        	return this.$store.state.inputText
        },
        set:function(v){
        	this.$store.state.inputText=v
        }
      }

    }
	
}	
</script>

<style>
	html{
		font-size: 10px;
	}
	.return{
		float: left;
		background: url('../../assets/img/mall/return.png') no-repeat;
		width: 9.4%;
		height: 3rem;
		margin: 3% 0 0 2%;

	}
	.search{
		float: left;
		width: 88.6%;
		height: 4.3rem;
	}
	.mall_top{
		width: 100%;
		height: 4.3rem;
		float: left;
	}
	.mall{
		width: 45%;
		height: 50%;
		float: left;
		margin: 2.5%;
	}
	.mall_img{
		width: 100%;
		height: 100%;
		margin-bottom: 3%;

	}
	.mall_name{
		font-size: 1.4rem;
	}
	.mall_price{
		font-size: 1.8rem;
		color:red;
	}
	.mall_num{
		font-size: 1.2rem;
		color:#666;
		float: right;
		margin-top:0.4rem;
	}
	.tiphide{
	  display: none;
	}

</style>