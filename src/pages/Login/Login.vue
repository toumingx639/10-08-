<template>
  <div id="login">
    <div class="header">
      <div class="left">
        <a href="javascript:">
          <i class="iconfont icon-shouye" @click="goto('/msite')"></i>
        </a>
      </div>

      <div class="center">
        <a href="javascript:">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
        </a>
      </div>

      <div class="right">
        <a href="javascript:">
          <i class="iconfont icon-icon" @click="goto('/search')"></i>
        </a>
        <a href="javascript:">
          <i class="iconfont icon-i-trolley" @click="goto('/shoppingCart')"></i>
        </a>
      </div>
    </div>

    <div class="main">
      <div class="top">
        <div class="logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>

        <div class="btn">
          <div class="btn-item phone">
            <i class="iconfont icon-shouji"></i>
            <span class="name">手机号快捷登录</span>
          </div>
          <div class="btn-item email">
            <i class="iconfont icon-youxiang1"></i>
            <span class="name">邮箱账号登录</span>
          </div>
        </div>
      </div>

      <div class="bottom">
        <div class="communication">
          <i class="iconfont icon-wechat-fill"></i>
          <span class="name">微信</span>
        </div>
        <div class="communication">
          <i class="iconfont icon-QQ"></i>
          <span class="name">QQ</span>
        </div>
        <div class="communication">
          <i class="iconfont icon-weibo"></i>
          <span class="name">微博</span>
        </div>
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
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #login
    width 100%
    height 100%
    background-color  #F2F5F4
    .header
      border-1px(#d9d9d9, bottom)
      display flex
      justify-content space-between
      height 44px
      line-height 44px
      text-align center
      background-color #fafafa
      .left
        padding-left 15px
        a
          width 25px
          height 25px
          i
            font-size 25px
            color #333333
      .center
        width 86px
        height 44px
        line-height 44px
        a
          img
            width 86px
            height 27px
            vertical-align middle
      .right
        height 44px
        line-height 44px
        width 70px
        padding-right 10px
        a
          width 25px
          height 25px
          padding-right 15px
          i
            font-size 22px
            color #333333
    .main
      padding 0 20px
      .top
        width 100%
        .logo
          height 45px
          padding 100px 0
          text-align: center
          img
            height 45px
      .btn
        width 100%
        height 120px
        .btn-item
          height 48px
          line-height 48px
          text-align center
          margin-bottom 15px
          border 1px solid #DD1A21
          color #DD1A21
          border-radius: 2px
          font-size 15px
          &.phone
            background-color #DD1A21
            color #ffffff
          i 
            padding-right 5px
    .bottom
      position absolute
      left 0 
      bottom 70px
      width 100%
      display flex
      justify-content center
      .communication
        width 60px
        height 20px
        line-height 20px
        text-align center
        padding 0 20px
        font-size 14px
        color #666
        border-right: 1px solid #979797
        i
          padding-right 5px
          color #979797

</style>
