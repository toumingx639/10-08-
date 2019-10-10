<template>
  <div class="content">
      <h2>可机洗的羊绒衫，慵懒针织毛衣，轻松变时髦的心机穿搭法则</h2>
      <p>今秋人气新品</p>
      <ul>
        <li><img src="https://yanxuan-item.nosdn.127.net/82df402666877da2d90e5bc6feefb40f.png" alt=""></li>
        <li><img src="https://yanxuan-item.nosdn.127.net/82df402666877da2d90e5bc6feefb40f.png" alt=""></li>
        <li><img src="https://yanxuan-item.nosdn.127.net/82df402666877da2d90e5bc6feefb40f.png" alt=""></li>
        <li><img src="https://yanxuan-item.nosdn.127.net/82df402666877da2d90e5bc6feefb40f.png" alt=""></li>
        <li><img src="https://yanxuan-item.nosdn.127.net/82df402666877da2d90e5bc6feefb40f.png" alt=""></li>
        <li><img src="https://yanxuan-item.nosdn.127.net/82df402666877da2d90e5bc6feefb40f.png" alt=""></li>
        <li><img src="https://yanxuan-item.nosdn.127.net/82df402666877da2d90e5bc6feefb40f.png" alt=""></li>
        <li><img src="https://yanxuan-item.nosdn.127.net/82df402666877da2d90e5bc6feefb40f.png" alt=""></li>
      </ul>
      <Browse></Browse>
  </div>
</template>

<script type="text/ecmascript-6">
  import Browse from "./browse.vue"
  export default {
    name: "SmallPic",

    components: {
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
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      height 27px
      line-height 27px
      color #333
      font-size 18px
    p
      font-size 14px
      color #7f7f7f
      margin-bottom 10px
    ul
      display flex
      flex-wrap wrap
      li
        width 83px
        height 83px
        margin 5px 0
        img 
          width 100%
          height 100%
 
</style>
