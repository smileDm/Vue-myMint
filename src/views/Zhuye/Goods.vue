<template>
<!--首页商品展示-->
    <div class="goods">
    	<div class="hot">
    		<div class="hot_title">
    			<span class="activity">热门活动</span>
    			<router-link to="/Mall">
    				<span class="more">查看全部 ></span>
    			</router-link>
    		</div>
    		<div class="hot_content">
    			<router-link to="/Mall">
    				<span class="items">
    					<span class="left">
    						<p class="left_title">发现好品牌</p>
    						<p class="left_content">简约个性 设计</p>
    					</span>
    					<img src="//img11.360buyimg.com/n7/jfs/t3658/287/1096951163/143882/f774e94b/581c56e5N583ae75e.jpg">
    				</span>
    			</router-link>
    			<router-link to="/Mall">
    				<span class="items">
    					<span class="left">
    						<p class="left_title">品牌新风尚</p>
    						<p class="left_content">早秋搭配法则</p>
    					</span>
    					<img src="//img13.360buyimg.com/mobilecms/s300x300_jfs/t6901/6/815157389/36405/8e28fdd7/5979ff7cN515a1bb1.jpg!q70.jpg">
    				</span>
    			</router-link>
    			
    		</div>
    		<div class="hot_content">
    			<router-link to="/Mall">
    				<span class="items">
    					<span class="left">
    						<p class="left_title">穿搭学院</p>
    						<p class="left_content">不普通有腔调</p>
    					</span>
    					<img src="//img11.360buyimg.com/mobilecms/s300x300_jfs/t7891/115/314967738/25869/5047ac71/59919e04Ned43e43b.jpg!q70.jpg">
    				</span>
    			</router-link>
    			<router-link to="/Mall">
    				<span class="items">
    					<span class="left">
    						<p class="left_title">点点精选</p>
    						<p class="left_content">晒后修复攻略</p>
    					</span>
    					<img src="//img11.360buyimg.com/n1/jfs/t5458/203/1941199505/154006/2cfface4/591671c0N156b421c.jpg">
    				</span>
    			</router-link>    			
    		</div>
    		
    	</div>



        <div class="goods_find">
        	<router-link to="/Mall">
        		<img class="title_img" src="//img30.360buyimg.com/da/jfs/t6025/120/7184872764/67775/df771e1a/597b08f3N550caa32.jpg" type="text">
        		<p class="title_p">做自己的女王专场</p>
        	</router-link>
        	<p class="like_p">
        		<span>
        			<img class="like_img" src="../../assets/img/home/like.png" type="text">
        			666+
        		</span>
        	</p>
        </div>
        <div class="goods_find">
        	<router-link to="/Mall">
        		<img class="title_img" src="//img12.360buyimg.com/da/jfs/t7984/210/1053248984/151450/47a8cfff/59999e18N3fedc949.jpg" type="text">
        		<p class="title_p">森宿大牌日专场</p>
        	</router-link>
        	<p class="like_p">
        		<span>
        			<img class="like_img" src="../../assets/img/home/like.png" type="text">
        			1000+
        		</span>
        	</p>
        </div>
        <div class="goods_find">
        	<router-link to="/Mall">
        		<img class="title_img" src="//img20.360buyimg.com/da/jfs/t6931/341/1411624855/325688/a3d00cf6/59813e2fNce23b75f.jpg" type="text">
        		<p class="title_p">花样职场专场</p>
        	</router-link>
        	<p class="like_p">
        		<span>
        			<img class="like_img" src="../../assets/img/home/like.png" type="text">
        			1200+
        		</span>
        	</p>
        </div>
    </div>
</template>

<script>    
    
</script>


<style lang="less" scoped>
	html{
			font-size:10px;
		}
	    .goods{
	        position: absolute;
	        top: 36.5%;
	        bottom: 10%;
	        left: 0;
	        right: 0;
	        overflow-y: scroll;
	        overflow-x: hidden;
	        padding-top:4%;
	    }
	    .hot .hot_content{
	    	margin:0 0 1rem 1rem;
	    	float:left;
	    	width:100%;
	    }
	    .hot_title{
	    	margin:0 1rem 1rem 1rem;
	    	/*font-size:1.5rem;*/
	    	font-size:1rem;
	    }
	    .hot_title .activity{
	    	font-weight:bold;
	    }
	    .hot_title .more{
	    	float:right;
	    }
	    .hot_content .items{
	    	width:50%;
	    	height:10%;
	    }
	    .items .left{
	    	float:left;
	    }
	    .items img{
	    	width:24%;
	    	height:60%;
	    	float:left;
	    }
	    .left_content,.more{
	    	color:#666;
	    	font-size:0.8rem;
	    }
	    
	    .left{
	    	margin-top:0.5rem;
	    }
	    .left_title{
	    	font-weight:bold;
	    	margin-bottom:0.5rem;
	    	/*font-size:1.4rem;*/
	    	font-size:0.8rem;
	    	color: black;
	    }
	    .title_img{
	    	width:100%;
	    	height:40%;
	    }
	    .title_p{
	    	text-align:center;
	    	margin:1rem 0 1rem 0;
	    	/*font-size:1.6rem;*/
	    	font-size:1rem;
	    }
	    .like_img{
	    	width:1rem;
	    	height:1rem;
	    	margin:0 0 -0.2rem 0;
	    }
	    .like_p{
	    	text-align:center;
	    	margin:1rem 0 1rem 0;
	    	/*font-size:1.4rem;*/
	    	font-size:0.4rem;
	    	color:#ff5c5c;
	    }

</style>