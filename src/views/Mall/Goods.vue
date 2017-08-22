<template>
	<div class="goods">
		<!-- 左侧菜单 -->
		<div class="menu-wrapper" ref="menuWrapper">
			<ul>
				<li v-for="(item,index) in goods" class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
					<span class="text border-1px">
						<span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
					</span>

				</li>
			</ul>
		</div>
		<!-- 右侧商品详情 -->
		<div class="foods-wrapper" ref="foodsWrapper">
			<ul>
				<li v-for="(item,index) in goods" class="food-list" ref="foodList">
					<h1 class="title">{{item.name}}</h1>
					
						<div v-for="(food,index) in item.foods" class="food-item border-1px" @click="seeFood(food,$event)">
							<div class="icon">
								<img width="57" height="57" :src="food.icon">
							</div>
							<div class="content">
								<div class="name">{{food.name}}</div>
							                		
							</div>
						</div>
					
				</li>
			</ul>
		</div>
		

		
	</div>
</template>

<script type="text/ecmascript-6">
// 引入better-scroll
import BScroll from 'better-scroll'

export default {
	props:['seller'],
	//注册组件，然后才可以在模板里使用
	components: {
		
	},
	data() {
		return {
			goods:[],          //商品信息
			listHeight:[],     //菜单列表元素
			scrollY:0,         //食物列表滚动的高度实时计算
			seeFoodinfo:{}	   //选中的商品用以查看商品详情
		}
	},
	created() {
		// 商品icon类名
		this.classMap = ['decrease','discount','guarantee','invoice','special'];
		//利用 mock.js 模拟的数据用来请求

		this.$http.get('https://www.easy-mock.com/mock/596e2463a1d30433d836f112/ele/ele').then((response) => {

            this.goods = response.data.goods;
            this.$nextTick(() => {
            	this._initScroll();
            	this._calculateHeight();
            })

        });

    },
    computed: {
    	//根据食物列表所处的位置，判断菜单的class
    	currentIndex() {
    		for(var i=0; i<this.listHeight.length; i++){
    			// 判断菜单栏处于第几个位置
    			let height1 = this.listHeight[i];
    			let height2 = this.listHeight[i+1];

    			if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
    				return i;
    			}
    		}
    		return 0;
    	},
    	

	},
    methods:{
    	// foodlist 的 height 的高度变化 自动触发计算属性 currentIndex的变化
    	selectMenu(index) {
    		// 因为有自动派发事件，所以需要阻止，
    		if(!event._constructed) return;

    		console.log(index);
    		let foodList = this.$refs.foodList;

    		let el = foodList[index];

    		this.foodsScroll.scrollToElement(el,10);

    	},
    	// 初始化 better-scroll
    	_initScroll() {
    		this.menuScroll = new BScroll(this.$refs.menuWrapper,{
    			click:true        //默认派发点击事件
    		});

    		this.foodsScroll = new BScroll(this.$refs.foodsWrapper,{
    			click:true,
    			probeType:3   //实时侦测滚动
    		});

    		this.foodsScroll.on('scroll', (pos) => {
    			// debugger
    			this.scrollY = Math.abs(Math.round(pos.y));
    		})
    	},

    	// 计算菜单栏元素
    	_calculateHeight() {
    		let foodList = this.$refs.foodList;

	    	let height = 0;

	    	this.listHeight.push(height);

	    	for(let i=0; i<foodList.length; i++){
	    		let item = foodList[i];

	    		// 把foodlist列表中的每个元素的clientHeight(每一项的高度)的高度放到列表中
	    		height += item.clientHeight;

	    		this.listHeight.push(height);
	    	}

    	},
    	_drop(target) {
			//调用 shopcar 组件中的 drop 方法，向其传入当前点击的 dom 对象
//    		this.$refs.shopcart.drop(target);
			// 体验优化,异步执行下落动画
			this.$nextTick(() => {
				this.$refs.shopcart.drop(target);
			});
    	}

    	
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/mixin.styl"
.goods
	position:absolute
	top:40px
	bottom:46px
	display:flex
	width:100%
	overflow:hidden
	.menu-wrapper{
		// flex布局左栏固定
		flex:0 0 80px
		width:80px
		background-color:#f4f5f7
		.menu-item{
			// 用于垂直居中
			display:table
			width:56px
			height:54px
			//background-color:#f3f5f7
			background-color:red
			padding:0 12px
			line-height:14px
			&.current{
				position: relative
		        z-index: 10
		        margin-top: -1px
		        background: #fff
		        font-weight: 700
			}
			.text{
				// 垂直居中 table-cell vertical-align
				display: table-cell;
			    width: 56px;
			    vertical-align: middle;
			    position: relative;
			    font-size: 12px;
			    border-1px(rgba(7,17,27,0.1))

			    .icon{
					display:inline-block
					vertical-align:top
					position:relative
					width:12px
					height:12px
					margin-right:2px
					background-size:12px 12px
					background-repeat:no-repeat

					
			}


		}
	}

	.foods-wrapper{
		flex:1
		.title{
			padding-left:14px
			height:26px
			font-size:12px
			line-height:26px
			color:rgb(147,153,159)
			background-color:#f3f5f7
			border-left:2px solid #d9dde1
		}
		.food-item{
			display:flex
			margin:18px
			padding-bottom:18px
			border-1px(rgba(7,17,27,0.1))
			&:last-child{
				border-none()
				margin-bottom:0
			}
			.icon{
				flex:0 0 57px
				margin-right:18px
				float:left
			}
			.content{
				flex:1
				float:left
				.name{
					margin:2px 0 8px 0
					line-height:14px
					color:rgb(7,17,27)
					font-size:14px
				}
				.cart-wrapper{
					position:absolute
					right:0
					bottom:12px
				}
			}
		}
	}
}
</style>
