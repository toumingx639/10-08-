<template>
  <div id="shoppingCart">
    <div class="header">
      <div class="left">购物车</div>

      <div class="right">
        <a href="javascript:">领券</a>
      </div>
    </div>

    <div class="promise">
      <ul class="list">
        <li class="item">
          <i class="iconfont icon-kongxinyuan"></i>
          <span>30天无忧退货</span>
        </li>
        <li class="item">
          <i class="iconfont icon-kongxinyuan"></i>
          <span>48小时快速退款</span>
        </li>
        <li class="item"> 
          <i class="iconfont icon-kongxinyuan"></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>

    <div class="content">
      <div class="img"></div>
      <div class="text">
        <div class="title">去添加点什么吧</div>
        <div class="btn" @click="goto('/login')">登录</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goto (path) {
        if (this.$route.path !== path) {
          this.$router.push(path)
        } else {
          window.location.reload()  // 是请求的路径的话 更新下页面
        }
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #shoppingCart
    position relative
    width 100%
    height 100%
    background #f4f4f4
    color #333333
    .header
      width 100%
      height 44px
      line-height 44px
      background #fff
      border-1px(#d9d9d9, bottom)
      display flex
      justify-content space-between
      .left
        padding-left 15px
        font-size 18px
      .right
        padding-right 25px
        a
          color #B4282D
    .promise
      width 100%
      height 35px
      line-height 35px
      background-color #eee
      font-size 12px
      .list
        display flex
        justify-content space-between
        align-items center
        padding-right 15px
        .item
          display flex
          align-items center
          color #666
          i 
            width 20px
            height 18px
            line-height 18px
            font-size 16px
            text-align center
            margin-top 9px
    .content
      width 240px
      height 210px
      position absolute
      left 50%
      top 50%
      transform translate(-50%, -50%)
      .img
        width 130px
        height 130px
        margin 0 auto
        background no-repeat center/100% url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png")
      .text
        width 240px
        height 100px
        font-size 14px
        .title
          color #999
          text-align center
          margin-bottom 25px
        .btn
          width 240px
          height 45px
          line-height 45px
          text-align center
          background #b4282d
          color #ffffff
</style>
