<template>
  <div id="login">
    <MainHeader />

    <div class="main">
      <div class="top">
        <div class="logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>

        <div class="btn">
          <div class="account">
            <div class="inputBox">
              <label for="txt1">邮箱账号</label>
              <input type="text" id="txt1" placeholder="邮箱账号">
            </div>
            <div class="inputBox">
              <label for="txt2">密码</label>
              <input type="password" id="txt2" placeholder="密码">
            </div>
            <div class="register">
              <a href="javascript:">注册账号</a>
              <a href="javascript:">忘记密码</a>
            </div>
          </div>

          <div class="btn-item">
            <span class="name">登录</span>
          </div>

          <div class="foot">
            <span @click="$router.replace('/login')">其他登录方式 ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MainHeader from '../../components/Header/mainHeader.vue'

  export default {
    components: {
      MainHeader
    },

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
    background-color  #ffffff
    .main
      padding 0 20px
      .top
        box-sizing border-box
        width 100%
        padding-top 28px
        .logo
          height 32px
          line-height 32px
          text-align: center
          padding-right 30px
          img
            height 32px
      .btn
        box-sizing border-box
        width 100%
        height 290px
        margin-top 20px
        .account
          box-sizing border-box
          padding-top 60px
          .inputBox
            height 46px
            font-size 14px
            border-1px(#ccc, bottom)
            label
              display none !important 
              color #dbdbdb
            input 
              outline none 
              width 295px
              height 22px
              line-height 22px
              color #333
              margin 14px 0
          .register
            height 60px
            line-height 60px
            display flex
            justify-content space-between
            a
              font-size 14px
              color #7f7f7f
        .btn-item
          height 48px
          line-height 48px
          text-align center
          margin-bottom 15px
          border 1px solid #DD1A21
          border-radius: 2px
          font-size 15px
          background-color #DD1A21
          color #ffffff
          .name 
            opacity 0.7
        .foot
          margin-top 30px
          height 20px
          line-height 20px
          text-align center
          font-size 14px
          color #333 
   
</style>
