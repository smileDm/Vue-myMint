<template>
	<div class="img">
			<!-- 上传图片 -->
		<div class="img_upload">
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-success="handleAvatarSuccess"
			  :before-upload="beforeAvatarUpload">
			  <img v-if="imageUrl" :src="imageUrl" class="avatar">
			  <img src="../../assets/img/personal/girl.jpg" v-else class="el-icon-plus avatar-uploader-icon"></img>
			</el-upload>
		</div>
			<!-- 昵称 -->
			

	</div>
</template>

<script>
  export default {
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style>
  html{
  	font-size:10px;
  }
  .img_upload{
  	position:relative;
  	left:50%;
  	margin:4rem 0 0 -3rem;
  }
  /* 上传图片 */
  .avatar-uploader .el-upload {
  	border: 1px dashed #d9d9d9;
    border-radius: 0.6rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 2.8rem;
    color: #8c939d;
    width: 6rem;
    height: 6rem;
    line-height: 6rem;
    text-align: center;
  }
  .avatar {
    width: 6rem;
    height: 6rem;
    display: block;
  }
  /* 昵称 */
  
</style>