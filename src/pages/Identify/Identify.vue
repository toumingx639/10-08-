<template>
  <div id="identify">
    <div class="header">
      <div class="top">
        <div class="left">
          <a href="javascript:">
            <i class="iconfont icon-shouye" @click="goto('/msite')"></i>
          </a>
        </div>

        <div class="center">
          <a href="javascript:">
            <span :class="{on: isShow}">发现</span>
          </a>
          <a href="javascript:">
            <span :class="{on: !isShow}">甄选家</span>
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

      <div class="list" v-show="isShow" ref="info">
        <ul class="wrapper">
          <li class="content" v-for="(item, index) in arr" :key="index" :class="{active: index===0}">
            <a href="javascript:">{{item}}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="main" ref="details">
      <div class="content">
        <div class="banner">
          <a href="javascript:">
            <div class="picture">
              <img src="https://yanxuan.nosdn.127.net/9b83d46a01159e7a42d97598dc442172.jpg?imageView&quality=65&thumbnail=690y376" alt="">
            </div>
          </a>
        </div>

        <div class="good-thing"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import Swiper from 'swiper'
  // import 'swiper/css/swiper.min.css'
  import BScroll from '@better-scroll/core'

  export default {
    data() {
      return {
        arr: ['推荐','好货内部价','晒单','选购指南','回购榜','达人','HOME'],
        isShow: true  // 默认为true时是在发现页面的
      }
    },

    mounted() {
      this.initScroll()
      this.initScroll2()
    },

    methods: {
      goto (path) {
        if (this.$route.path !== path) {
          this.$router.push(path)
        } else {
          window.location.reload()  // 是请求的路径的话 更新下页面
        }
      },
    
      initScroll () {
        this.scroll = new BScroll(this.$refs.info, {
          click: true,
          scrollX: true,
          scrollY: false
        })
      },
      initScroll2 () {
        this.scroll2 = new BScroll(this.$refs.details, {
          click: true
        })
      },
    },

    watch: {
      info () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },

      details () {
        this.$nextTick(() => {
          this.scroll2.refresh()
        })
      },
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #identify
    box-sizing border-box
    padding-bottom 50px
    width 100%
    height 100%
    background-color #fafafa
    .header
      width 100%
      .top
        display flex
        justify-content space-between
        height 50px
        line-height 50px
        text-align center
        border-1px(#d9d9d9, bottom)
        .left
          padding-left 15px
          a
            width 25px
            height 25px
            i
              font-size 25px
              color #333333
        .center
          width 160px
          height 50px
          line-height 50px
          a
            text-align center
            line-height 1
            vertical-align middle
            padding 0 8px
            font-size 14px
            .on
              font-size 20px
              font-weight bold
              color #b4282d
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
      .list
        border-1px(#d9d9d9, bottom)
        width 100%
        height 36px
        .wrapper
          box-sizing border-box
          float left
          display: flex
          align-items: center
          height 36px
          white-space nowrap
          .content
            display inline-block
            height 36px
            line-height 36px
            margin: 0 10px
            padding 0 4px
            a
              font-size: 14px
              color: #7F7F7F
          .active
            color: #b4282d
            box-sizing border-box
            border-bottom: 2px solid #B4282D
            a
              color #B4282D
    .main
      box-sizing border-box
      width 100%
      height 100%
      clearFix()
      .content
        float left
        .banner
          margin 10px 0
          height 188px
          padding 18px 15px
          background-color #ffffff
          a
            img 
              width 100%
              height 100%
          
</style>
