<template>
  <div class="content">
    <Publisher></Publisher>
    <h2>时髦秋装、轻暖被褥、出游好物……让金秋十月更幸福的必买好物榜</h2>
    <img src="https://yanxuan.nosdn.127.net/eaa00e290a0b3e2adc4a7882cbc2fb82.jpg" alt="" class="picture">
    <Browse></Browse>
  </div>
</template>

<script type="text/ecmascript-6">
  import Publisher from "./publisher.vue"
  import Browse from "./browse.vue"
  export default {
    name: "BigPicture",

    components: {
      Publisher,
      Browse
    }
  }
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">\
  .content
    box-sizing border-box
    padding 18px 11px
    width 100%
    background-color #ffffff
    margin 10px 0
    h2
      font-size 18px
      color #333
      line-height 25px
      margin-top 10px
      width 100%
      height  47px
  .content
    box-sizing border-box
    padding 18px 15px
    .picture
      margin-top 8px
      width 100%
      height 199px
      margin-bottom 7px

</style>
