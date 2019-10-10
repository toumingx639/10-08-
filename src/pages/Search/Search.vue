<template>
  <div id="search">
    <div class="main">
      <div class="header">
        <form action="/search" class="searchWrapp">
          <div class="header-search">
            <input type="search" placeholder="爆款 全阶猫粮">
            <i class="iconfont icon-icon"></i>
          </div>
        </form>
        <span class="cancel" @click="toReturn">取消</span>
      </div>

      <div class="content">
        <div class="title">
          <h3>热门搜索</h3>
        </div>

        <div class="list">
          <a href="javascript:" class="item ellipsis" v-for="(item, index) in listArr" :key="index">{{item}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        listArr: ['免洗面膜仅49.9', '早秋服饰', '超薄纸尿裤', '咖啡碳保暖套装', '金秋大闸蟹', '新西兰纯牛奶 限时特惠', '女鞋', '被子', '内裤', '手机壳', '男鞋', '牙刷']
      }
    },

    methods: {
      toReturn () {
        this.$router.back()
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #search
    background-color #eeeeee
    font-size 14px
    width 100%
    height 100%
    color #333333
    font-family: PingFangSC-Light,helvetica,'Heiti SC'
    .main
      float left
      clearFix()
      width 100%
      box-sizing border-box
      background-color #ffffff
      .header
        padding 0 15px
        height 44px
        display flex
        align-items center
        .searchWrapp
          background-color #f4f4f4
          width 300px
          height 28px
          .header-search
            position relative
            padding 0 10px
            height 28px
            line-height 28px
            input
              background-color #f4f4f4
              padding-left 22px
              font-size 14px
              opacity 0.8  
              outline none              
            i 
              position absolute
              left 10px
              top 2px
              font-size 14px
              font-weight bold
              opacity 0.7                

        .cancel
          margin-left 15px
          width 28px
          height 44px
          line-height 44px
          text-align center
      .content
        width 100%
        height 220px
        box-sizing border-box
        padding 0 15px 15px 15px
        margin-bottom 10px
        .title
          color #999999
          font-size 15px
          height 44px
          line-height 44px
        .list
          box-sizing border-box
          width 100%
          height 160px
          color #333333
          opacity 0.9
          a
            display inline-block
            padding 4px 8px
            border 1px solid #999999
            margin 0 16px 16px 0
            border-radius 3px
            color #333333
            font-size 12px
            &:nth-child(2)
              color #b4282d
              border-color #b4282d
            &:nth-child(5)
              color #b4282d
              border-color #b4282d
</style>
