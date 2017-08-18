<template>
  <div class="leftwatching">
    <div class="lists">

      <router-link  to="/Personal" tag="li">
        <div>
          推荐
        </div>
      </router-link>
      <router-link  to="/Personal" tag="li">
        <div>
          推荐
        </div>
      </router-link>
      <router-link  to="/Personal" tag="li">
        <div>
          推荐
        </div>
      </router-link>
      <router-link  to="/Personal" tag="li">
        <div>
          推荐
        </div>
      </router-link>
      <router-link  to="/Personal" tag="li">
        <div>
          推荐
        </div>
      </router-link>
      
      
     </div>
  </div>
</template>
 <script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
body{
  background: #fff;
}
.choose{
  color: red;
  background-color: #fff;
  position: relative;
}
.choose::before{
  content: '';
  position: absolute;
  top:40%;
  bottom: 40%;
  left:4px;
  width: 4px;
  background-color:red;
}
.leftwatching{
  position: fixed;
  left: 0;
  bottom: 55px;
  top: 50px;
  /*height: 100%;*/
  width: 80px;
}
.lists{
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 100%;
}

.lists li{
  flex:1;
  display: block;
  width: 80px;
  border: none;
  text-align: center;
  list-style: none;
  text-decoration: none;
  color:#000;
  align-items: center;
  background-color: #EFEFEF;
}
.list{
 width: 100%;
 height: 50px;
 line-height: 50px;
 text-align: center;
}

</style>
