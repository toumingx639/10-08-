<template>
   <div id="category">
    <MsiteHeader />

    <div class="main">
      <div class="left-scroll" ref="leftScroll">
        <div class="left">
          <ul>
            <li v-for="(item, index) in arr" :key="index" :class="{active: index === 0}" @click="goto(index)">
              <a href="javascript:">{{item}}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="right-scroll" ref="rightScroll">
        <div class="right">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/01467535cd09249bd5cf0ae110845892.jpg?imageView&quality=75&thumbnail=0x196"></div>
              <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/21eaf80574f1ce30fee388e777ccb15d.jpg?imageView&quality=75&thumbnail=0x196"></div>
            </div>
            <div class="swiper-pagination"></div>
          </div>

          <div class="content">
            <ul>
              <li>
                <div class="img">
                  <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <div class="text">明星商品</div>
              </li>
              <li>
                <div class="img">
                  <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <div class="text">员工精选好货低至15</div>
              </li>
              <li>
                <div class="img">
                  <img src="https://yanxuan.nosdn.127.net/cda4a56526a230055bea8221a6b7ab11.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <div class="text">99+好评</div>
              </li>
              <li>
                <div class="img">
                  <img src="https://yanxuan.nosdn.127.net/39c21b07c6ccdefeac5bd8dd985ceb4e.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <div class="text">解乏小食每满99减12</div>
              </li>
              <li>
                <div class="img">
                  <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <div class="text">秋冬服饰配特惠低至5折</div>
              </li>
              <li>
                <div class="img">
                  <img src="https://yanxuan.nosdn.127.net/39c21b07c6ccdefeac5bd8dd985ceb4e.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <div class="text">断货补单王39元起</div>
              </li>
              <li>
                <div class="img">
                  <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <div class="text">新奇好物低至9.9</div>
              </li>
              <li>
                <div class="img">
                  <img src="https://yanxuan.nosdn.127.net/39c21b07c6ccdefeac5bd8dd985ceb4e.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <div class="text">金秋出游用品低至12.9</div>
              </li>
              <li>
                <div class="img">
                  <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <div class="text">新奇好物低至9.9</div>
              </li>
              <li>
                <div class="img">
                  <img src="https://yanxuan.nosdn.127.net/39c21b07c6ccdefeac5bd8dd985ceb4e.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <div class="text">金秋出游用品低至12.9</div>
              </li>
              <li>
                <div class="img">
                  <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <div class="text">新奇好物低至9.9</div>
              </li>
              <li>
                <div class="img">
                  <img src="https://yanxuan.nosdn.127.net/39c21b07c6ccdefeac5bd8dd985ceb4e.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <div class="text">金秋出游用品低至12.9</div>
              </li>
              <li>
                <div class="img">
                  <img src="https://yanxuan.nosdn.127.net/71a5f1a0299e278f8193c193d8b7d1e4.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <div class="text">新奇好物低至9.9</div>
              </li>
              <li>
                <div class="img">
                  <img src="https://yanxuan.nosdn.127.net/39c21b07c6ccdefeac5bd8dd985ceb4e.png?imageView&quality=85&thumbnail=144x144" alt="">
                </div>
                <div class="text">金秋出游用品低至12.9</div>
              </li>
            </ul>  
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import BScroll from '@better-scroll/core'
  import MsiteHeader from '../../components/Header/MsiteHeader.vue'

  export default {
    data() {
      return {
        arr: ['推荐专区', '秋冬好物', '爆品专区', '新品专区', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '全球特色', '运动旅行', '数码家电', '全球特色'],
        listArr: 0 // 当前列表的下标
      }
    },
    
    components: {
      MsiteHeader
    },

    mounted() {
      new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          bulletClass : 'my-bullet', //需设置.my-bullet样式
          bulletActiveClass: 'my-bullet-active'
        }
      }),

      this.initScroll()
      this.initScroll2()
    },

    methods: {
      initScroll () {
        this.scroll = new BScroll(this.$refs.leftScroll, {
          click: true
        })
      },
      initScroll2 () {
        this.scroll2 = new BScroll(this.$refs.rightScroll, {
          click: true
        })
      },

      goto (path) {
        if (this.$route.path !== path) {
          this.$router.push(path)
        } else {
          window.location.reload()  // 是请求的路径的话 更新下页面
        }
      }
    },

    watch: {
      leftScroll () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },

      rightScroll () {
        this.$nextTick(() => {
          this.scroll2.refresh()
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #category
    width 100%
    height 100%
    background #ffffff
    .header
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
    .main
      display flex
      height 600px
      .left-scroll
        height 100%
        .left
          float left
          box-sizing: border-box
          width 80px
          text-align center
          font-size 14px
          color: #333
          ul
            padding-bottom 20px 0
            li
              height 25px
              line-height 25px
              text-align: center
              margin-top 20px
              a
                color: #333
              &.active
                border-left 3px solid #ab2b2b
                a
                  color #ab2b2b
      .right-scroll
        height 100%
        .right
          float left
          box-sizing border-box
          width 295px
          padding 15px
          .swiper-container
            position relative
            width 100%
            height 96px
            >>>.swiper-wrapper
              width 100%
              height 96px
              .swiper-slide
                width 100%
                height 96px
                img
                  width 100%
                  height 96px
            >>>.swiper-pagination
              span 
                display inline-block
                width 20px!important 
                height 2px!important 
                &.my-bullet
                  width 20px!important
                  height 3px!important
                  background #ffffff
                  opacity 0.4
                  margin-right 3px
                  &.my-bullet-active
                    background  #f9f9f9
                    opacity 1
          .content
            width 100%
            padding-top 16px
            ul
              display flex
              flex-wrap wrap
              li 
                width 75px
                margin-right 13px
                .img
                  width 75px
                  height 75px
                  img 
                    width 100%
                    height 100%
                .text
                  width 75px
                  font-size 12px
                  text-align center
                  line-height 1.5
                  color #333333
</style>
