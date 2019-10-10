<template>
  <ul class="entrance">
    <li class="bigPic">
      <BigPicture></BigPicture>
      <div class="bg"></div>
    </li>
    <li class="midPic">
      <MiddlePic></MiddlePic>
      <div class="bg"></div>          
    </li>
    <li class="smallPic">
      <SmallPic></SmallPic>
      <div class="bg"></div>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  import BigPicture from "./bigPicture.vue"
  import MiddlePic from "./middlePic.vue"
  import SmallPic from "./smallPiv.vue"
  export default {
    name: "Entrance",

    components: {
      BigPicture,
      MiddlePic,
      SmallPic
    }
  }
</script>

<style scoped  lang="stylus" rel="stylesheet/stylus">
  ul.center
    padding-top 75px
    padding-bottom 75px
    .bg
      height 10px
      background-color #f4f4f4
      margin 10px 0
    li
      width 100%
      font-size 14px
</style>
