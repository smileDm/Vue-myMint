<template>
    <div class="goods">
    	<div class="hot">
    		<div class="hot_title">
    			<span class="activity">热门活动</span>
    			<span class="more">查看全部</span>
    		</div>
    		<div class="hot_content">
    			<span class="items">
    				<span class="left">
    					<p class="left_title">发现好品牌</p>
    					<p class="left_content">简约个性 设计</p>
    				</span>
    				<img src="//img11.360buyimg.com/n7/jfs/t3658/287/1096951163/143882/f774e94b/581c56e5N583ae75e.jpg">
    			</span>
    			<span class="items">
    				<span class="left">
    					<p class="left_title">品牌新风尚</p>
    					<p class="left_content">早秋搭配法则</p>
    				</span>
    				<img src="//img13.360buyimg.com/mobilecms/s300x300_jfs/t6901/6/815157389/36405/8e28fdd7/5979ff7cN515a1bb1.jpg!q70.jpg">
    			</span>
    			
    		</div>
    		<div class="hot_content">
    			<span class="items">
    				<span class="left">
    					<p class="left_title">穿搭学院</p>
    					<p class="left_content">不普通有腔调</p>
    				</span>
    				<img src="//img11.360buyimg.com/mobilecms/s300x300_jfs/t7891/115/314967738/25869/5047ac71/59919e04Ned43e43b.jpg!q70.jpg">
    			</span>
    			<span class="items">
    				<span class="left">
    					<p class="left_title">点点精选</p>
    					<p class="left_content">晒后修复攻略</p>
    				</span>
    				<img src="//img11.360buyimg.com/n1/jfs/t5458/203/1941199505/154006/2cfface4/591671c0N156b421c.jpg">
    			</span>
    			
    		</div>
    		
    	</div>



        <div class="goods_find">
        	<img class="title_img" src="../../assets/img/home/hc1.jpg" type="text">
        	<p class="title_p">你的屋子也要漂亮衣服</p>
        	<p class="like_p">
        		<span>
        			大丁 | 
        			<img class="like_img" src="../../assets/img/home/like.png" type="text">
        			666
        		</span>
        	</p>
        </div>
        <div class="goods_find">
        	<img class="title_img" src="../../assets/img/home/hc1.jpg" type="text">
        	<p class="title_p">你的屋子也要漂亮衣服</p>
        	<p class="like_p">
        		<span>
        			大丁 | 
        			<img class="like_img" src="../../assets/img/home/like.png" type="text">
        			666
        		</span>
        	</p>
        </div>
        <div class="goods_find">
        	<img class="title_img" src="../../assets/img/home/hc1.jpg" type="text">
        	<p class="title_p">你的屋子也要漂亮衣服</p>
        	<p class="like_p">
        		<span>
        			大丁 | 
        			<img class="like_img" src="../../assets/img/home/like.png" type="text">
        			666
        		</span>
        	</p>
        </div>
    </div>
</template>

<script>    
    
</script>


<style lang="less">
	html{
			font-size:10px;
		}
	    .goods{
	        position: absolute;
	        top: 30%;
	        bottom: 9%;
	        left: 0;
	        right: 0;
	        overflow-y: scroll;
	        overflow-x: hidden;
	    }
	
	    .hot .hot_content{
	    	margin:0.5rem 0 0 1rem;
	    	float:left;
	    	width:100%;
	    }
	    .hot_title{
	    	margin:0 1rem 0 1rem;
	    	font-size:1.5rem;
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
	    
	    .left{
	    	margin-top:0.5rem;
	    }
	    .left_title{
	    	font-weight:bold;
	    	margin-bottom:0.5rem;
	    }
	    

	    .title_img{
	    	width:100%;
	    	height:15%;
	    }
	    .title_p{
	    	text-align:center;
	    	margin:1rem 0 1rem 0;
	    	font-size:1.6rem;
	    }
	    .like_img{
	    	width:1rem;
	    	height:1rem;
	    }
	    .like_p{
	    	text-align:center;
	    	margin:1rem 0 1rem 0;
	    	font-size:1.2rem;
	    }
    
</style>