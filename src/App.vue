<template>
  <div id="app">
    <router-view></router-view>
    <FooterNav v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterNav from './components/FooterNav/FooterNav.vue'
  export default {
    name: 'App',
    components: {
      FooterNav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #app
    width 100%
    height 100%
</style>
