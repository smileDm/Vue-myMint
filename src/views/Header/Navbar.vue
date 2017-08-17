<template>  
  <div class="navbar">    
    <!-- navbar -->  
    <mt-navbar class="page-part" v-model="selected">  
      <mt-tab-item id="1">商品</mt-tab-item>  
      <mt-tab-item id="2">评价</mt-tab-item>  
      <mt-tab-item id="3">商家</mt-tab-item>  
    </mt-navbar>  
  
    <div>  
      <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>  
    </div>  
  
    <!-- tabcontainer -->  
    <mt-tab-container v-model="selected">  
      <mt-tab-container-item id="1">  
        <mt-cell v-for="n in 10" :title="'内容 ' + n" />  
      </mt-tab-container-item>  
      <mt-tab-container-item id="2">  
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />  
      </mt-tab-container-item>  
      <mt-tab-container-item id="3">  
        <mt-cell v-for="n in 6" :title="'选项 ' + n" />  
      </mt-tab-container-item>  
    </mt-tab-container>  
  </div>  
</template>  
  
<script>  
export default {  
  name: 'page-navbar',  
  
  data() {  
    return {  
      selected: '1'  
    };  
  }  
};  
</script> 

<style lang="less">
	.navbar{
		position: absolute;
		top: 35%;
		right: 0;
		left: 0;
		bottom: 0;
		overflow-y: scroll;
		overflow-x: hidden;
	}
</style> 