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
					
						<div v-for="(food,index) in item.foods" class="food-item border-1px" @click="selectFood(food,$event)">
							<div class="icon">
								<img width="57" height="57" :src="food.icon">
							</div>
							<div class="content">
								<div class="name">{{food.name}}</div>
							    <div class="price">{{food.price}}</div>           		
							</div>
						</div>
					
				</li>
			</ul>
		</div>
		
		<Clothes :food="selectedFood" ref="food"></Clothes>
		
	</div>
	
</template>

<script type="text/ecmascript-6">
// 引入better-scroll
import BScroll from 'better-scroll'
import Clothes from './Clothes';

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
			selectedFood: {}	   //选中的商品用以查看商品详情
		}
	},
	created() {
		// 商品icon类名
		this.classMap = ['decrease','discount','guarantee','invoice','special'];
		//利用 mock.js 模拟的数据用来请求

		this.$http.get('http://www.easy-mock.com/mock/599aec4b059b9c566dca1f41/goods/dm').then((response) => {
            this.goods = response.data.goods;
            this.$nextTick(() => {
            	this._initScroll();
            	this._calculateHeight();
            })

        });

    },
    computed: {
    	//根据列表所处的位置，判断菜单的class
    	currentIndex() {
    		for(var i=0; i<this.listHeight.length; i++){
    			// 判断商品栏处于第几个位置
    			let height1 = this.listHeight[i];
    			let height2 = this.listHeight[i+1];

    			if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
    				return i;
    			}
    		}
    		return 0;
    	}
    	
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
    	selectFood(food, event) {
        if (!event._constructed) {
          return;
        }
        this.selectedFood = food;
        this.$refs.food.show();//展示
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

    	
    },
    components: {

      Clothes
    }


}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/mixin.styl"
.goods
    display: flex
    position: absolute
    top: 40px
    bottom: 0px
    width: 100%
    overflow: hidden
    .menu-wrapper
      flex: 0 0 80px
      width: 80px
      .menu-item
        display: table
        height: 54px
        width: 56px
        padding: 0 14px
        line-height: 14px
        text-align: center
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          color: #fc9c4e
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: #000
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: #000
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            line-height: 24px
            color:#999
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
