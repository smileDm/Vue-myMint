<template>
    <div class="gotop">
        <BackTop :height="100" :bottom="50" on-click=''>
            <div class="top"></div>
        </BackTop>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
    .top{
        border-radius: 2px;
        width: 10rem;
        height: 10rem;
        background:red;
        background-size: 10rem 10rem;
    }
    .gotop{
        height:10rem;
    }
</style>
</style>
