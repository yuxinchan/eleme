<template>
  <div id="app">
    <s-header></s-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link tag="div" to="/goods">商品</router-link>
        <!--<a v-link="{path:'goods'}">商品</a>-->
      </div>
      <div class="tab-item">
        <router-link tag="div" to="/ratings">评论</router-link>
        <!--<a v-link="{path:'ratings'}">评论</a>-->
      </div>
      <div class="tab-item">
        <router-link tag="div" to="/seller">商家</router-link>
        <!--<a v-link="{path:'seller'}">商家</a>-->
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/header/Header'

  export default {
    name: 'app',
    components: {
      sHeader: Header
    }
  }
</script>

<style lang="stylus" scoped>
  @import "./common/stylus/index.styl"
  #app
    .tab
      display flex
      width 100%
      height 40px
      line-height 40px
      border-top-1px(rgba(7, 17, 27, 0.1))
      border-bottom-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex 1
        text-align center
        font-size 14px
        color: rgb(77, 85, 93)
        .active
          color rgb(240, 20, 20)
</style>