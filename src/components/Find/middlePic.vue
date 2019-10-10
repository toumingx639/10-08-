<template>
  <div class="content">
    <div class="information">
      <Publisher></Publisher>
      <h2>买支词典笔，让家长好好放个假</h2>
      <p>有道词典笔2.0</p>
      <Browse></Browse>
    </div>
    <img class="picture" src="https://yanxuan.nosdn.127.net/c9eac8ed27f531c9fb45ac9e4add02d0.jpg" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
  import Publisher from "./publisher.vue"
  import Browse from "./browse.vue"
  export default {
    name: "MiddlePic",

    components: {
      Publisher,
      Browse
    }
  }
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
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
    display flex
    .picture 
      width 139px
      height 139px
      margin 0
    .information
      height 139px
      display flex
      flex-direction column
      justify-content space-between
      h2
        font-size 18px
        margin-bottom 5px
        -webkit-line-clamp 2
      p
        color #7f7f7f
        font-size 14px
        margin-bottom 10px
 
</style>
