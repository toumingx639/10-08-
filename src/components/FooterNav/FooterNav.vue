<template>
  <div id="footer">
    <div class="footer-item" :class="{on: '/msite'===$route.path}" @click="goto('/msite')">
      <span class="iconfont icon-shouye"></span>
      <span class="footer-text">首页</span>
    </div>
    <div class="footer-item" :class="{on: '/category'===$route.path}" @click="goto('/category')">
      <span class="iconfont icon-fenlei"></span>
      <span class="footer-text">分类</span>
    </div>
    <div class="footer-item" :class="{on: $route.path==='/identify'}" @click="goto('/identify')">
      <span class="iconfont icon-topic"></span>
      <span class="footer-text">识物</span>
    </div>
    <div class="footer-item" :class="{on: $route.path==='/shoppingCart'}" @click="goto('/shoppingCart')">
      <span class="iconfont icon-i-trolley"></span>
      <span class="footer-text">购物车</span>
    </div>
    <div class="footer-item" :class="{on: $route.path==='/personal'}" @click="goto('/personal')">
      <span class="iconfont icon-geren"></span>
      <span class="footer-text">个人</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'FooterNav',
    methods: {
      goto (path) {
        if (this.$route.path !== path) {
          this.$router.replace(path)
        } else {
          window.location.reload()
        }
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #footer
    // 固定定位
    position: fixed
    left: 0
    bottom: 0
    box-sizing: border-box
    z-index: 9
    width: 100%
    height 49px
    display flex  
    justify-content: space-around
    align-items: center
    background-color #ffffff
    .footer-item
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      font-size: 14px
      span:nth-child(1)
        padding-bottom: 5px
        font-size 18px
      &.on
        color: #b4282d
 
</style>
