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
              <label for="txt1">请输入手机号</label>
              <input type="text" id="txt1" placeholder="请输入手机号" v-model="phoneNum">
              <div class="line"></div>
            </div>
            <div class="inputBox gain">
              <div class="pwd">
                <label for="txt2">请输入短信验证码</label>
                <input type="text" id="txt2" placeholder="请输入短信验证码" v-model="pwd">
              </div>
              <div class="code">
                <a href="javascript:">获取验证码</a>
              </div>
            </div>

            <!-- 表单验证 出错的时候会出现-->
            <div class="formCode" v-if="phoneCode !== 0"> 
              <span v-if="phoneCode === 1">手机号输入不正确</span>
              <span v-else-if="phoneCode === 2">验证码输入不正确</span>
            </div>

            <div class="register">
              <a href="javascript:">遇到问题？</a>
              <a href="javascript:">使用密码验证登录</a>
            </div>
          </div>

          <div class="btn-item">
            <!-- 点击提交 -->
            <div class="name" @click.prevent="submit">登录</div>
            <div class="agree">
              <span class="agree-btn">
                <input type="checkbox">
              </span>
              <label>
                <span>我同意</span>
                <a href="https://reg.163.com/agreement_mobile_wap.shtml?v=20171127">《服务条款》</a>
                <span>和</span>
                <a href="https://reg.163.com/agreement_mobile_ysbh_wap.shtml?v=20171127">《网易隐私政策》</a>
              </label>
            </div>
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
    data() {
      return {
        phoneNum: "",  // 输入的手机号
        pwd: "",   // 获取的验证码
        phoneCode: 0   // 0代表没有错误  1 代表手机号出错  2 代表验证码出错
      }
    },

    components: {
      MainHeader
    },

    methods: {
      submit () {
        const regPhone = /^1[3456789]\d{9}$/   // []表示其中的任意一个  \d表示任意一个数字
        const regPwd = /^\d{6}/   // 六位数字验证码
        const resultPhone = regPhone.test(this.phoneNum)
        const resultPwd = regPwd.test(this.pwd)
        if (!resultPhone) {
          this.phoneCode = 1
        } else if (!resultPwd) {
          this.phoneCode = 2
        }
        console.log(this.phoneCode)
      },

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
          padding-top 30px
          .inputBox
            height 46px
            font-size 14px
            border-1px(#ccc, bottom)
            label
              display none !important 
              color #dbdbdb
            input 
              outline none 
              width 240px
              height 22px
              line-height 22px
              color #333
              margin 14px 0
          .gain
            margin-top 16px
            display flex
            justify-content space-between
            .code
              width 82px
              height 27px
              line-height 27px
              text-align center
              font-size 14px
              color #333
              border 1px solid #7F7F7F
              border-radius 5px
              margin 8px 5px 0 0
          .formCode
            font-size 12px
            color red
          .register
            height 60px
            line-height 60px
            display flex
            justify-content space-between
            a
              font-size 14px
              color #7f7f7f
        .btn-item
          height 68px
          line-height 68px
          text-align center
          margin-bottom 30px
          .name 
            height 48px
            line-height 48px
            text-align center
            border 1px solid #DD1A21
            border-radius: 2px
            font-size 15px
            background-color #DD1A21
            color #ffffff
            margin-bottom 10px
          .agree
            height 20px
            line-height 20px
            color #7f7f7f
            font-size 12px
            text-align start 
            .agree-btn 
              display inline-block
              margin-right 5px
              color: #999
              font-size: 12px
              width 18px
              height 18px
              line-height 18px
              background no-repeat center/100% url("http://yanxuan.nosdn.127.net/6830e38fbcc7c038eea164ecb53365ca.png")
              input 
                opacity 0
            label
              span 
                display inline-block
              a
                color #007AFF

        .foot
          margin-top 30px
          height 20px
          line-height 20px
          text-align center
          font-size 14px
          color #333 
   
</style>
