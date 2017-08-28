<template>
<!--登录界面-->
	<div class="login">
		<img class="close" src="../assets/img/login/close.png" alt="close">
		<div>
			<img class="logo" src="../assets/img/login/logo.png" alt="logo">
		</div>
		<div class="input">
			<img class="phone_img" src="../assets/img/login/phone.png" alt="phone">
			<input class="phone_input" type="text" placeholder="手机号">
			<button class="phone_btn">验证</button>
		</div>
		<div class="input">
			<img class="shield_img" src="../assets/img/login/shield.png" alt="shield">
			<input class="shield_input" type="text" placeholder="验证码">
			<button class="shield_btn">验证码</button>
		</div>
		<mt-button type="danger" class="login_btn">快速登录</mt-button>
		<span class="other">其他登录方式</span>
		<img src="../assets/img/login/weixin.png" alt="">
		<img class="other_img" src="../assets/img/login/weibo.png" alt="">
		<img class="other_img" src="../assets/img/login/qq.png" alt="">
	</div>
</template>

<script>
import Login from '../../static/css/Login.css'
 export default {
    data() {
        return {
            
            
        }
    }
};
</script>


