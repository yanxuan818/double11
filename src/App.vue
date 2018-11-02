<template>
  <div id="app">
    <router-view></router-view>
    <div class="mask" v-show="$root.isMask"></div>
    <div class="pop_error" v-show="$root.isError!=false">
      <div class="txt">{{$root.isError}}</div>
      <div class="btn" @click="popHide()">我知道了</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    // 错误弹窗关闭
    popHide(){
      this.$root.isMask=this.$root.isError=false;
    }
  }
}
</script>
<style lang="less" scoped>
  .mask{
    position: fixed;
    z-index: 500;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background:rgba(0,0,0,0.8);
  }
  .pop_error{
    position:fixed;
    z-index: 501;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    padding:1rem 0 0.5rem 0;
    width:5.6rem;
    background:#fff;
    border-radius: 0.1rem;
    .txt{
      margin:0 auto;
      width:4.4rem;
      font-size:0.3rem;
      font-weight: bold;
      color:#736357;
      line-height: 0.48rem;
      text-align: center;
    }
    .btn{
      margin:0.62rem auto 0;
      width:2.08rem;
      height:0.6rem;
      background:url("./assets/images/popBtn.png") no-repeat top center;
      background-size:cover;
      font-size:0.28rem;
      font-weight: bold;
      color:#fff;
      line-height: 0.6rem;
      text-align: center;
    }
  }
</style>
