<template>
  <div class="page_index">
    <div class="main_con">
      <div class="banner"></div>
      <div class="coupon_list">
        <div class="item clearfix">
          <div class="coupon_price">
            <b>&yen;</b><span>20</span>
          </div>
          <div class="coupon_name">
            <p>接送机/站立减</p><p>优惠券</p>
          </div>
          <div class="coupon_cost" @click="couponBuy()">
            <div class="price"><b>&yen;</b><span>1</span></div>
            <div class="btn">立即抢购</div>
          </div>
        </div>
      </div>
      <div class="btn_my_coupon"></div>
      <div class="txt_rule"></div>
    </div>
    <div class="mask" v-show="isMask==true"></div>
    <div class="pop_success" v-show="isPopSuccess==true"> 
      <i class="icon"></i>
      <div class="txt">立减优惠券购买成功</div>
      <div class="btn">去使用</div>
      <div class="close" @click="popHide()"><span></span></div>
    </div>
    <div class="pop_fail" v-show="isPopFail==true">
      <div class="txt">亲爱的会员，福利仅新用户可享哦，还不快点把这好消息告诉你的朋友们~</div>
      <div class="btn" @click="popHide()">知道了</div>
    </div>
    <div class="pop_soldout" v-show="isPopSoldout==true">
      <div class="txt">亲爱的会员，今天的券已发完，请明日赶早哦！</div>
      <div class="btn" @click="popHide()">知道了</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data(){
    return{
      isPopSuccess:false,  //领取成功
      isPopFail:false,  //领取失败
      isPopSoldout:false, //已领取完
      isMask:false,  //遮罩
      num50:0,  //50元券已领数
      num20:0,  //20元券已领数
    }
  },
  methods:{
    //弹窗关闭
    popHide(){
      this.isMask=this.isPopSuccess=this.isPopFail=this.isPopSoldout=false;
    },
    //立即抢购
    couponBuy(){
      this.isMask=true;
      this.isPopSuccess=true;
    }
  }
}
</script>

<style lang="less">
.page_index{
  margin:0 auto;
  max-width:7.5rem;
   background:#820228;
  .main_con{
    padding-bottom:1.36rem;
    .banner{
      width:100%;
      height:7.23rem;
      background:url("../../assets/images/banner.png") no-repeat top center;
      background-size:contain;
    }
    .coupon_list .item{
      width:100%;
      height:2.29rem;
      background:url("../../assets/images/couponBg.png") no-repeat top center;
      background-size:cover;
      .coupon_price{
        float:left;
        padding:0.35rem 0 0 0.99rem;
        width:1.53rem;
        color:#fff;
        font-weight: bold;
        b{
          font-size:0.38rem;
        }
        span{
          font-size:1rem;
        }
      }
      .coupon_name{
        float:left;
        margin-top:0.45rem;
        width:2.4rem;
        color:#fff;
        line-height: 0.4rem;
        font-size:0.36rem;
        font-weight: bold;
        p{
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .coupon_cost{
        float:left;
        padding:0.38rem 0.27rem 0.15rem 0.39rem;
        width:1.25rem;
        &.disabled{
          .btn{
            background:#ccc;
          }
        }
        .price{
          height:0.8rem;
          line-height: 0.8rem;
          font-weight: bold;
          color:#ed1651;
          text-align: center;
          b{
            font-size:0.24rem;
          }
          span{
            font-size:1rem;
          }
        }
        .btn{
          margin-top:0.08rem;
          width:1.25rem;
          height:0.32rem;
          line-height: 0.32rem;
          color:#fff;
          font-size:0.22rem;
          font-weight: bold;
          border-radius:0.32rem;
          text-align: center;
          background: #ed1651;
        }
      }
    }
    .btn_my_coupon{
      margin:0.21rem auto 0.57rem;
      width:2.4rem;
      height:0.8rem;
      background:url("../../assets/images/btnMyCoupon.png") no-repeat top center;
      background-size:cover;
    }
    .txt_rule{
      width:100%;
      height:10.35rem;
      background:url("../../assets/images/txtRule.png") no-repeat top center;
      background-size:cover;
    }
  }
  .mask{
    position: fixed;
    z-index: 500;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background:rgba(0,0,0,0.8);
  }
  .pop_success{
    position:fixed;
    z-index: 501;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width:5.6rem;
    height:3.65rem;
    background:#fff;
    border-radius: 0.1rem;
    .icon{
      position:absolute;
      left:1.66rem;
      top:-0.7rem;
      width:2.2rem;
      height:2rem;
      background:url("../../assets/images/popSuccess.png") no-repeat top center;
      background-size:cover;
    }
    .txt{
      margin-top:1.55rem;
      font-size:0.36rem;
      font-weight: bold;
      color:#fe3267;
      line-height: 0.4rem;
      text-align: center;
    }
    .btn{
      margin:0.62rem auto 0;
      width:2.08rem;
      height:0.6rem;
      background:url("../../assets/images/popBtn.png") no-repeat top center;
      background-size:cover;
      font-size:0.28rem;
      font-weight: bold;
      color:#fff;
      line-height:0.6rem;
      text-align: center;
    }
    .close{
      position:absolute;
      top:3.65rem;
      left:2.43rem;
      width:0.76rem;
      height:1.19rem;
       background:url("../../assets/images/popClose.png") no-repeat top center;
      background-size:cover;
    }
  }
  .pop_fail{
    position:fixed;
    z-index: 501;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width:5.6rem;
    height:3.65rem;
    background:#fff;
    border-radius: 0.1rem;
    .txt{
      margin:0 auto;
      padding-top:0.56rem;
      width:4.46rem;
      font-size:0.3rem;
      font-weight: bold;
      color:#736357;
      line-height: 0.48rem;
      text-align: center;
    }
    .btn{
      margin:0.57rem auto 0;
      width:2.08rem;
      height:0.6rem;
      background:url("../../assets/images/popBtn.png") no-repeat top center;
      background-size:cover;
      font-size:0.28rem;
      font-weight: bold;
      color:#fff;
      line-height: 0.6rem;
      text-align: center;
    }
  }
  .pop_soldout{
    position:fixed;
    z-index: 501;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    width:5.6rem;
    height:3.65rem;
    background:#fff;
    border-radius: 0.1rem;
    .txt{
      margin:0 auto;
      padding-top:0.99rem;
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
      background:url("../../assets/images/popBtn.png") no-repeat top center;
      background-size:cover;
      font-size:0.28rem;
      font-weight: bold;
      color:#fff;
      line-height: 0.6rem;
      text-align: center;
    }
  }
}
</style>
