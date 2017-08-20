<template>
	<div>
		<div class="mall_top">
		  	<!-- 返回 -->
		  	<div class="return" @click="goback"></div>
		  	<!-- 搜索 -->
			<div class="search">
		  		<mt-search  cancel-text="取消" placeholder="搜索" v-model="message" @keyup.enter="search"></mt-search>
		  		<input  type="input"  @keyup.13="search" v-model="message" placeholder="请输入搜索内容" >
		  	</div>
		</div>
		<div id="box">
		  <div class="color"></div>
		  <input  type="input"  @keyup.enter="search" v-model="message" placeholder="请输入搜索内容" >
		  <button @click="goback">取消</button>
		  <span class="tiphide" ref="tip">dmdmdmdm<!-- <img src="../assets/pig.png" alt=""> -->
		  数据没mock</span>
		</div>
  		<div class="mall_content">
  			<!-- 商品 -->
  			<div class="mall" v-for="mall in malls">
  				<img class="mall_img" :src="mall.pic" alt="">
  				<span class="mall_name">{{mall.name}}</span><br>
  				<span class="mall_price">{{mall.price}}}</span>
  				<span class="mall_num">{{mall.number}}</span>
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
	created () {
	  this.inputText = this.$store.state.inputText
	  console.log('hghhhh');
	 this.axios.get('http://www.easy-mock.com/mock/59992a6f059b9c566dc882fd/myMint/dMiao')
	    .then((res)=>{
	       console.log(res.data)
	       let message = res.data
	       console.log("message:",message)
	       for(let i in message){
	         let item = i;
	         console.log('ttt');
	         console.log(item);
	         console.log(this.inputText);
	         console.log(item.indexOf(this.inputText));
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

    },
	methods:{
		goback(){
			this.$router.push({path:'Mall'})
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
		/* background: url('../../assets/img/mall/return.png') no-repeat; */
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
		font-size: 1.6rem;
	}
	.mall_price{
		font-size: 1.8rem;
	}
	.mall_num{
		font-size: 1.8rem;
		float: right;
	}




	body{
	  background: #fff;
	}
	.tiphide{
	  display: none;
	}
	.tip {
	  margin-top: 100px;
	  width: 100%;
	  height: 200px;
	  text-align: center;
	}
	.tipshow{
	  height: 25px;
	  line-height: 25px;
	  display: block;
	  padding-top: 30px;
	  width: 100%;
	  text-indent: 2em;
	}
	.tipshow img{
	  width: 20px;
	  height: 20px;
	}
	#box{
	  width: 100%;
	  height: 50px;
	  position: relative;
	}
	#box .color{
	  position: absolute;
	  left: 5%;
	  right: 10%;
	  top: 10px;
	  height: 30px;
	  background-color: #efefef;
	  z-index: -1;
	}
	#box input{
	width: 85%;
	margin-left: 5%;
	margin-top: 10px;
	height: 30px;
	line-height: 30px;
	/* background:url('../assets/search.png') no-repeat 15px 10px; */
	}
	#box button{
	  display: block;
	  float: right;
	  width: 10%;
	  margin-top: 10px;
	  margin-bottom: 10px;
	  height: 30px;
	  color: #8a8a8a;
	}
	.see_content {
	  width: 100%;
	  height: 100%;
	  /*background-color: red;*/
	}
	.see_content_ul{
	  padding-top: 10%;
	  width: 98%;
	  height: 90%;
	  margin: 0 auto;
	}
	.see_content_ul li{
	  width: 50%;
	  list-style: none;
	  float: left;
	}
	.see_content_ul li .see_picture{
	  display: block;
	  width: 90%;
	  height: 200px;
	  margin: 0 auto;
	}
	.see_name{
	  display: block;
	  max-width: 90%;
	  margin: 0 auto;
	  font-size: 14px;
	  text-indent: 10px;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  display: -webkit-box;
	  -webkit-line-clamp: 2;
	  -webkit-box-orient: vertical;
	}
	.see_xinxi{
	  width: 90%;
	  height: 50px;
	  /*border-bottom: 1px solid #9d9d9d;
	  border-right:  1px solid #9d9d9d;
	  border-left:  1px solid #9d9d9d;*/
	}
	.see_xinxi .see_price{
	  width:50px;
	  height: 30px;
	  display: block;
	  float: left;
	}
	.see_xinxi .see_content .love{
	  display: block;
	  width: 10px;
	  height: 10px;
	  float: left;
	}
	.see_number{
	  display: block;
	  float: right;
	  width: 30px;
	  height: 30px;
	  margin-right: 10px;
	}

</style>