<template>
	<div>
		<div class="gray"></div>
		<div class="table"> 
			<table width="100%" border="0" cellspacing="0" cellpadding="0"> 
			<tr> 
				<td width="33%">
					<router-link to="/">
						<div class="kuang" >
							<img src="../../assets/img/personal/1.png" rel="我的订单"><br>
							<span>我的订单</span>
						</div>
					</router-link>
				</td> 
				<td width="33%">
					<div class="kuang">
						<img src="../../assets/img/personal/2.png" alt="22"><br>
						<span>周日拼</span>
					</div>
				</td> 
				<td width="33%">
					<div class="kuang">
						<img src="../../assets/img/personal/3.png" alt=""><br>
						<span>优惠券</span>
					</div>
				</td> 
			</tr> 
			<tr> 
				<td>
					<div class="kuang">
						<img src="../../assets/img/personal/4.png" alt=""><br>
						<span>意见反馈</span>
					</div>
				</td> 
				<td>
					<div class="kuang">
						<img src="../../assets/img/personal/5.png" alt=""><br>
						<span>礼品卡</span>
					</div>
				</td> 
				<td>
					<div class="kuang">
						<img src="../../assets/img/personal/6.png" alt=""><br>
						<span>联系客服</span>
					</div>
				</td> 
			</tr> 
			</table> 
		</div> 
	</div>
	 
</template>

<style scoped>
	/* 分割线 */
	.gray{
		width:100%;
		height:0.5rem;
		background-color:#f1f1f1;
		margin-top:10%;
	}
	.table table{
		border-right:1px solid #d9d9d9;
		border-bottom:1px solid #d9d9d9;
	} 
	.table table td{
		border-left:1px solid #d9d9d9;
		border-top:1px solid #d9d9d9;
		
	} 
	.kuang{
		margin:30% 0 30% 30%;
	} 
	
</style>