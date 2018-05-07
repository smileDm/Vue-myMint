<template>
	<div id="personal">
		<div class="info">
			<div class="info_left">
				<div class="pic">
					<img src="../../assets/img/personal/girl.jpg" alt="">
				</div>
			</div>
			<div class="info_middle">
				<div>13580574883</div>
				<div>
					<img src="../../assets/img/personal/bojin.png" alt="">
				</div>
			</div>
			<div class="info_right">
				<!-- <img src="../../assets/img/personal/jiantou.png" alt=""> -->
			</div>
		</div>
		<div class="content">
			<div class="item">
				<div class="item_pic">
					<img src="../../assets/img/personal/dingdan.png" alt="" class="content_img">
				</div>
				<div class="item_name">全部订单</div>
				<div class="item_jiantou">
					<img src="../../assets/img/personal/jiantou_gray.png" alt="">
				</div>
			</div>
			<div class="item">
				<div class="item_pic">
					<img src="../../assets/img/personal/youhuiquan.png" alt="" class="content_img">
				</div>
				<div class="item_name">我的优惠券</div>
				<div class="item_jiantou">
					<img src="../../assets/img/personal/jiantou_gray.png" alt="">
				</div>
			</div>
			<div class="item">
				<div class="item_pic">
					<img src="../../assets/img/personal/aboutUs.png" alt="" class="content_img">
				</div>
				<div class="item_name">关于我们</div>
				<div class="item_jiantou">
					<img src="../../assets/img/personal/jiantou_gray.png" alt="">
				</div>
			</div>
			<div class="item">
				<div class="item_pic">
					<img src="../../assets/img/personal/help.png" alt="" class="content_img">
				</div>
				<div class="item_name">购物帮助</div>
				<div class="item_jiantou">
					<img src="../../assets/img/personal/jiantou_gray.png" alt="">
				</div>
			</div>
		</div>
		<app-tabbar></app-tabbar>
	</div>
</template>

<script>
// import Img from './Img'
// import Listview from './Listview'
import Tabbar1 from '../../views/Zhuye/Tabbar1'
export default{
	methods: {  
			
	},
	components:{
		// 'app-img':Img,
		'app-tabbar':Tabbar1
		// 'app-listview':Listview
	}
}
</script>
<style lang="less" scoped>
#personal {
	position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
	background-color: #f6f6f6;
	.info {
		display: flex;
		width: 100%;
		height: 120px;
		background-color: rgb(251, 138, 46);
		.info_left {
			flex: 1.5;
			display: flex;
			justify-content: center;
			align-items: center;
			.pic {
				box-sizing: border-box;
        width: 70px;
        height: 70px;
        background: #fff;                          
        border-radius: 50%;          
				border: 4px solid #fff;
				img {
					width: 100%;
					height: 100%;
					border-radius: 50%;                    
				}
			}
		}
		.info_middle {
			flex: 2.5;
			display: flex;
			justify-content: center;
			flex-direction: column;
			line-height: 24px;
			font-size: 18px;
			color: #fff;
		}
		.info_right {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	.content {
		padding: 10px 0 0 0;
		.item {
			display: flex;
			width: 100%;
			height: 43px;
			background-color: #ffffff;
			border-bottom: 2px solid #f6f6f6;
			.item_pic {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				.content_img {
					width: 20px;
					height: 20px;
				}
			}
			.item_name {
				flex: 5.5;
				display: flex;
				align-items: center;
			}
			.item_jiantou {
				flex: 1;
				display: flex;
				justify-content: center;
				align-items: center;
				img {
					width: 20px;
					height: 20px;
				}
			}
		} 
	}
}
</style>


