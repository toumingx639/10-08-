<template>
  <div class="mainHeader">
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
</template>

<script type="text/ecmascript-6">
  export default {
    name: "MainHeader",
    methods: {
      goto (path) {
        if (this.$route.path !== path) {
          this.$router.push(path)
        } else {
          window.location.reload()  // 是请求的路径的话 更新下页面
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .mainHeader
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
</style>
