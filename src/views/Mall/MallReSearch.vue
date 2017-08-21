<template >
  <div class="realsearch">
  <div id="box">
    <div class="color"></div>
    <input  type="input"  @keyup.13="search" placeholder="请输入搜索内容" v-model='inputText'>
    <button @click="history">取消</button>
  </div>
  <div class="history_box" ref="hb" style="display:none">
    <p>搜索历史</p>
    <div class="content" >
      <ul>
       <li v-for="inputText in inputTexts">
          <span class="content_list_history">{{inputText}}</span>
       </li>
     </ul>
    </div>
    <div class="clear" @click="clearall">清除历史记录</div>
<span class="background"></span>
  </div>

    <div class="realsearch_content">
      <p>热门搜索</p>
      <li  v-for="(content, index) in contents" @click="go(index)">
        <router-link :to="content.url">
           {{content.text}}
        </router-link>
      </li>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
  export default{
    data () {
      return {
        inputText:'',
        inputTexts: [],
        mess:'',
        history_content:'',
        contents: [
          {
            url: '',
            text: '韩都衣舍'
          },
          {
            url: '',
            text: '夏装'
          },
          {
            url: '',
            text: '连衣裙'
          },
          {
            url: '',
            text: 'T恤'
          },
          {
            url: '',
            text: '2017韩版女装'
          }
        ]
      }
    },
    mounted () {
      this.inputTexts = this.$store.state.inputTexts
      if(this.inputTexts.length > 0){
         this.$refs.hb.style.display = 'block'
      }
      if(this.inputTexts.length >6){
            this.inputTexts.length = 6;
        }
    },
    methods: {
      history: function () {
        this.$router.push({path:'/Zhuye'})
      },
      search: function () {
        if(this.inputText === ''){
          alert('别调皮哦，输入不可以为空哦')
        }else{
          this.inputText = this.inputText.trim();
          this.$store.dispatch('setInput', this.inputText)
          console.log(this.$store.state.inputText)
          this.$store.dispatch('collection', this.inputText);
          this.inputTexts = this.$store.state.inputTexts
          console.log(this.inputTexts);
          var a = document.querySelector('.history_box');
          if(this.inputTexts.length != 0){
            a.style.display = 'block';
            this.inputTexts = this.$store.state.inputTexts
          }
           this.$router.push({path:'/MallSearch'})

        }

      },
      clearall: function() {
        this.$store.dispatch('clear', this.inputTexts);
        this.inputTexts = this.$store.inputTexts
        var a = document.querySelector('.history_box');
        a.style.display = 'none';
      },
      go: function(index){
        this.$router.push({path:'/MallSearch'})
        this.$store.dispatch('setInput', this.contents[index].text )
        this.inputText = this.$store.state.inputText
        this.$store.dispatch('collection',this.inputText );
        this.inputTexts = this.$store.state.inputTexts
      }
    }
  }
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
body{
  background: #fff;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
.realsearch{
  width: 100%;
  height: 100%;
}
#box{
  width: 100%;
  height: 50px;
  position: relative;
}
#box::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #8a8a8a;
  transform: scaleY(.5);
}
#box .color{
  position: absolute;
  left: 5%;
  right: 10%;
  top: 10px;
  height: 30px;
  background-color: #efefef;
  z-index: -10;
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
.history_box{
  width: 100%;
  height: 100%;
}

.history_box p{
  display: block;
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: left;
  text-indent: 10px;
  color: #8a8a8a;
}
.history_box .content{
  width: 100%;
  height: 70px;
}
.content_list_history{
  display: block;
  float: left;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 15px;
  padding-right: 15px;
  border: 1px solid #bfbfbf;
  margin-left: 10px;
  border-radius: 20px;
}
.history_box .clear{
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #8a8a8a;
  position: relative;
  /* background:url('../assets/back.png') no-repeat 33% 42%; */
}
.history_box .clear::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #8a8a8a;
  transform: scaleY(.5);
}
.history_box .clear::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #8a8a8a;
  transform: scaleY(.5);
}
.history_box .background{
  display: block;
  width: 100%;
  height: 20px;
  background-color: #efefef;
}
.realsearch_content{
  width: 100%;
  height: 300px;
  position: relative;
}
.realsearch_content p{
  display: block;
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: left;
  color: #8a8a8a;
  text-indent: 10px;
}
.realsearch_content li{
  float: left;
  margin: 10px  10px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 15px;
  border: 1px solid #8a8a8a;
}
.realsearch_content a{
  color: black;
}

</style>
