<template>
  <div id="msite">
    <div class="header">
      <div class="line">
        <a href="javascript:" @click="goto('/msite')"></a>
        <div class="header-search" @click="goto('/search')">
          <span class="iconfont icon-icon"></span>
          <span class="placeholder">搜索商品, 共23084款好物</span>
        </div>
        <div class="loginBtn" @click="goto('/login')">登录</div>
      </div>
      <div class="list-nav">
        <div class="list" ref="info">
          <ul class="wrapper">
            <li class="content" v-for="(item, index) in arr" :key="index" :class="{active: index===0}">
              <a href="javascript:">{{item}}</a>
            </li>
          </ul>
        </div>
        <div class="mask">
          <div class="mask-icon" @click="display()"></div>
          <div class="maskAll" v-show="isOPen">
            <div class="shopList">
              <div>
                <h2>全部频道</h2>
                <div class="mask-icon" @click="display()"></div>
              </div>
              <ul>
                <li v-for="(item, index) in arr" :key="index" :class="{active: index===0}">
                  <a href="javascript:">{{item}}</a>
                </li>
              </ul>
            </div>
            <div class="shop-mask"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" ref="content">
      <div class="main">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="./images/1.jpg"></div>
            <div class="swiper-slide"><img src="./images/2.jpg"></div>
            <div class="swiper-slide"><img src="./images/1.jpg"></div>
            <div class="swiper-slide"><img src="./images/2.jpg"></div>
            <div class="swiper-slide"><img src="./images/1.jpg"></div>
            <div class="swiper-slide"><img src="./images/2.jpg"></div>
            <div class="swiper-slide"><img src="./images/1.jpg"></div>
            <div class="swiper-slide"><img src="./images/2.jpg"></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>

        <div class="indexService">
          <ul class="g-grow">
            <li class="item">
              <span class="iconfont icon-yi"></span>
              <span>网易自营品牌</span>
            </li>
            <li class="item">
              <span class="iconfont icon-duihao"></span>
              <span>30天无忧退货</span>
            </li>
            <li class="item">
              <span class="iconfont icon-tuikuan"></span>
              <span>48小时快速退款</span>
            </li>
          </ul>
        </div>
      
        <div class="classification">
          <a href="https://m.you.163.com/item/newItem">
            <div class="icon">
              <img src="http://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="">
            </div>
            <div class="text">新品首发</div>
          </a>
          <a href="https://m.you.163.com/item/newItem">
            <div class="icon">
              <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="">
            </div>
            <div class="text">居家生活</div>
          </a>
          <a href="https://m.you.163.com/item/newItem">
            <div class="icon">
              <img src="https://yanxuan.nosdn.127.net/896a3beac514ae8f40aafe028e5fec56.png" alt="">
            </div>
            <div class="text">服饰鞋包</div>
          </a>
          <a href="https://m.you.163.com/item/newItem">
            <div class="icon">
              <img src="http://yanxuan.nosdn.127.net/37520d1204a0c55474021b43dac2a69e.png" alt="">
            </div>
            <div class="text">美食酒水</div>
          </a>
          <a href="https://m.you.163.com/item/newItem">
            <div class="icon">
              <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt="">
            </div>
            <div class="text">个护清洁</div>
          </a>
          <a href="https://m.you.163.com/item/newItem">
            <div class="icon">
              <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt="">
            </div>
            <div class="text">母婴亲子</div>
          </a>
          <a href="https://m.you.163.com/item/newItem">
            <div class="icon">
              <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt="">
            </div>
            <div class="text">运动旅行</div>
          </a>
          <a href="https://m.you.163.com/item/newItem">
            <div class="icon">
              <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt="">
            </div>
            <div class="text">数码家电</div>
          </a>
          <a href="https://m.you.163.com/item/newItem">
            <div class="icon">
              <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" alt="">
            </div>
            <div class="text">全球特色</div>
          </a>
          <a href="https://m.you.163.com/item/newItem">
            <div class="icon">
              <img src="http://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif" alt="">
            </div>
            <div class="text">好货抄底</div>
          </a>
        </div>

        <div class="new-gift">
          <div class="gift-title">
            <span class="text">新人专享礼</span>
          </div>
          <div class="gift-content">
            <div class="left">
              <a href="javascript:">
                <div class="name">新人专享礼包</div>
                <div class="imgWrap">
                  <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
                </div>
              </a>
            </div>
            <div class="right">
              <div class="module1">
                <a href="javascript:">
                  <div class="welfare">
                    <div class="top">福利社</div>
                    <div class="bottom">今日特价</div>
                  </div>
                  <div class="price">
                    <div class="line1">¥160</div>
                    <div class="line2">¥459</div>
                  </div>
                </a>
              </div>
              <div class="module1 b2">
                <a href="javascript:">
                  <div class="welfare">
                    <div class="top">新人拼团</div>
                    <div class="bottom on" style="color:#fff">1元起包邮</div>
                  </div>
                  <div class="price">
                    <div class="line1">¥1</div>
                    <div class="line2">¥13.9</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="brand">
          <div class="productHeader">
            <div class="title">
              <h2>品牌制造商直供</h2>
            </div>
            <div class="more">更多></div>
          </div>
          <ul>
            <li>
              <a href="javascript:">
                <div>
                  <span class="newName">海外制造商</span>
                  <span class="newPri">9.9元起</span>
                </div>
                <img src="http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:">
                <div>
                  <span class="newName">CK制造商</span>
                  <span class="newPri">29.9元起</span>
                </div>
                <img src="http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:">
                <div>
                  <span class="newName">海外制造商</span>
                  <span class="newPri">9.9元起</span>
                </div>
                <img src="http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1" alt="">
              </a>
            </li>
            <li>
              <a href="javascript:">
                <div>
                  <span class="newName">CK制造商</span>
                  <span class="newPri">29.9元起</span>
                </div>
                <img src="http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1" alt="">
              </a>
            </li>
          </ul>
        </div>

        <div class="limitedTime">
          <div class="productHeader">
            <div class="time">
              <h2>限时购</h2>
              <span class="hour">03</span>
              <span class="sparate">:</span>
              <span class="minute">04</span>
              <span class="sparate">:</span>
              <span class="sesond">05</span>
            </div>
            <div class="more">更多></div>
          </div>
          <ul>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newPri">¥289</span>
                <span class="oldPri">¥349</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newPri">¥289</span>
                <span class="oldPri">¥349</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newPri">¥289</span>
                <span class="oldPri">¥349</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newPri">¥289</span>
                <span class="oldPri">¥349</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newPri">¥289</span>
                <span class="oldPri">¥349</span>
              </div>
            </li>
            <li>
              <img src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" >
              <div>
                <span class="newPri">¥289</span>
                <span class="oldPri">¥349</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="footer">
          <div class="btn">
            <a><span>下载APP</span></a>
            <a><span>电脑版</span></a>
          </div>
          <div class="text">
            <p>网易公司版权所有 © 1997-2019</p>
            <p>食品经营许可证：JY13301080111719</p>
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

  export default {
    data() {
      return {
        arr: ['推荐','居家生活','服饰鞋包','美食酒水','个户清洁','母婴亲子','运动旅行','数码家电','全球特色'],
        isOPen: false
      }
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
        this.scroll = new BScroll(this.$refs.info, {
          click: true,
          scrollX: true,
          scrollY: false
        })
      },
      initScroll2 () {
        this.scroll2 = new BScroll(this.$refs.content, {
          click: true
        })
      },

      display () {
        this.isOPen = !this.isOPen
        return this.isOPen
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
      info () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      },

      content () {
        this.$nextTick(() => {
          this.scroll2.refresh()
        })
      }
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #msite
    position relative
    box-sizing border-box
    padding: 74px 0 50px 0
    width 100%
    height 100%
    background-color: #eee
    .header
      z-index 33
      background #ffffff
      position: fixed
      left: 0
      top: 0
      box-sizing: border-box
      width: 100%
      height 74px
      .line
        display: flex
        align-items: center
        padding: 8px 15px
        height 28px
        a
          width 65px
          height 28px
          background no-repeat center/100% url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
        .header-search
          margin: 0 5px
          background: #ededed
          width: 65%
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
        .loginBtn
          box-sizing: border-box
          border: 1px solid #b4282d
          color: #b4282d
          height 28px
          padding: 0 6px
          line-height: 28px
          font-size: 14px
          border-radius: 5px
      .list-nav
        position relative
        display flex
        .list
          width 78%
          height 30px
          .wrapper
            float left
            display: flex
            align-items: center
            height 30px
            padding: 0 10px
            white-space nowrap
            .content
              display inline-block
              padding: 5px 10px
              a
                font-size: 14px
                color: #333
            .active
              color: #b4282d
              border-bottom: 3px solid #b4282d
              padding-bottom 3px
              a
                color #b4282d
        .mask
          z-index 10
          width 24%
          height 30px
          background-color  #ffffff
          .mask-icon
            display block
            margin 0 auto 
            width 20px
            height 30px
            background no-repeat center/80% url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png") 
          .maskAll
            position absolute
            left 0
            top 0
            width 100%
            .shopList
              background-color #ffffff
              div
                display flex
                justify-content space-between
                h2
                  margin 5px 0 12px 15px
                  font-size 14px
                .mask-icon
                  float right
                  margin-right 30px
                  transform: rotate(180deg)
              ul
                display flex
                flex-wrap wrap
                li
                  height 27px
                  width 74px
                  border 1px solid #cccccc
                  background #FAFAFA
                  border-radius 3px
                  margin 0 0 20px 15px
                  text-align center
                  a
                    font-size 12px
                    line-height 27px
                    color #333
                .active
                  border-color #b4282d
                  a
                    color #b4282d
            .shop-mask
              height 600px
              width 100%
              background: rgba(0,0,0,.5)
    .container
      width 100%
      height 100%
      .main
        width 100%
        float left
        .swiper-container
          position relative
          width: 100%
          height 185px
          .swiper-wrapper
            .swiper-slide
              img
                width: 100%
                height 185px
          .swiper-pagination
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
        .indexService
          width: 100%
          height 36px
          line-height: 36px
          font-size: 12px
          background-color: #fff
          .g-grow
            display: flex
            justify-content: space-evenly
            .item
              span:nth-child(1)
                color: #b4282d
        .classification
          display flex
          flex-wrap wrap
          justify-content space-evenly
          background-color: #fff
          margin-bottom 10px
          a
            width 16%
            padding 5px 0 5px 3px
            .icon
              width 100%
              img 
                width 100%
            .text
              color #333333
              text-align center
              font-size 13px
              margin-top 5px
        .new-gift
          width 100%
          height 260px
          padding-bottom 15px
          background-color: #fff
          margin-bottom 10px
          box-sizing border-box
          color #333
          font-family: PingFangSC-Light helvetica 'Heiti SC'
          .gift-title
            width 100%
            height 40px
            line-height 40px
            text-align center
            font-size 16px
            overflow hidden
            .text
              display inline-block
              position relative
              height 40px
              line-height 40px
              &::before
                content: ''
                position absolute
                top 20px
                left -20px
                width 12px
                height 2px
                background #333
              &::after
                content: ''
                position absolute
                top 20px
                right -20px
                width 12px
                height 2px
                background #333
          .gift-content
            width 92%
            height 200px
            padding 0 15px 0 15px
            margin-bottom 15px
            clearFix()
            .left
              float left
              width 49%
              height 200px
              background: #F9E9CF
              margin-right 2px
              a
                height 200px
                color #333
                .name
                  font-size 16px
                  padding 15px 0 0 15px
                  height 24px
                .imgWrap
                  margin 18px 0 0 30px
                  width 130px
                  height 130px
                  img 
                    width 100%
            .right
              float right
              width 50%
              .module1
                width 100%
                height 100px
                background no-repeat right/60% url("https://yanxuan-item.nosdn.127.net/ef401d6e5b3624cde569dc7819533fe7.png?imageView&thumbnail=200x200&quality=75")
                background-color: #FBE2D3
                a
                  color #333333
                  .welfare
                    float left 
                    padding 10px 0 0 15px
                    font-size 16px
                    .bottom
                      color #7F7F7F
                      font-size 12px
                      margin-top 5px
                  .price
                    margin-top 5px
                    float right
                    width 40px
                    height 40px
                    border-radius 50%
                    background-color #F59524
                    font-size 12px
                    text-align center
                    color #ffffff
                    .line1
                      height 20px
                      line-height 30px
                    .line2
                      text-decoration line-through
              .b2
                background no-repeat right/60% url("https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?imageView&thumbnail=200x200&quality=75")
                background-color #FFECC2
                .on
                  background #CBB693
                  padding 2px 4px
        .productHeader
          display flex
          justify-content space-between
          line-height 40px
          .more
            font-size 14px
            line-height 40px
            margin-right 20px
          h2
            font-size 16px
            margin 0 10px 0 20px      
          .time
            display flex
            align-items center
            .hour,.minute,.sesond
              font-size 12px
              display block
              width 18px
              height 18px
              text-align center
              line-height 18px
              background-color #333
              color #fff
            .sparate
                font-size 12px
                line-height 18px
                margin 0 10px
        .brand
          background-color: #fff
          margin-bottom 10px
          ul
            display flex
            flex-wrap wrap
            padding-left 15px
            li
              position relative
              width 47%
              height 130px
              margin 0 5px 5px 0
              div
                position absolute
                left 50%
                transform translateX(-50%)
                top 10px
                text-align center
                span  
                  display block
                  &.newName
                    font-size 14px
                    color #7f7f7f
                  &.newPri
                    font-size 12px
                    color #b4282d
              img 
                width 100%
                height 100%
        .limitedTime
          background-color: #fff
          margin-bottom 10px
          ul
            display flex
            flex-wrap wrap
            padding-left 15px
            li
              width 31%
              height 130px
              margin 0 5px 5px 0
              img
                width 100%
                height 100px
                background-color #eee
              div
                height 30px
                line-height 15px
                text-align center
                span  
                  font-size 14px
                  margin-right 10px
                  &.newPri
                    color #b4282d
                  &.oldPri
                    font-size 12px
                    color #7f7f7f
                    text-decoration line-through
        .footer
          height 120px
          width 100%
          background-color #414141
          box-sizing border-box
          border-1px(rgba(0,0,0,.15), top)
          font-size 12px
          padding-top 15px
          .text
            color #999
            text-align center
            p
              margin 5px 0
          .btn
            color #fff
            height 30px
            font-weight bold
            display flex
            margin 15px 0
            justify-content center
            a
              display block
              color #fff
              padding 0 15px
              border 1px solid #999
              display flex
              justify-content center
              align-items center
              margin-right 20px
        
</style>
