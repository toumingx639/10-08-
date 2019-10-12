<template>
  <div>
    <div class="mHeader">
        <slot name="left"></slot>

        <div class="header-search" @click="goto('/search')">
          <span class="iconfont icon-icon"></span>
          <span class="placeholder">搜索商品, 共23084款好物</span>
        </div>

        <slot name="right"></slot>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "MsiteHeader",

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
  .mHeader
    z-index 3
    box-sizing border-box
    height 44px
    padding 8px 10px
    border-1px(#d9d9d9, bottom)
    background-color #fff
    .header-search
      margin: 0 5px
      background: #ededed
      height 28px
      text-align: center
      line-height: 28px
      font-size: 14px
      color: #333
      opacity 0.8
      span:nth-child(1)
          padding-right: 5px
          font-size 14px
          font-weight bold
</style>
