<template>
  <div id="app">
    <e-header class="e-header" :seller="seller"></e-header>
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
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import Header from './components/header/Header'
  // import sellerData from './../public/data/seller.json'

  let sellerData = require('./../public/data/seller.json')

  export default {
    name: 'app',
    components: {
      eHeader: Header
    },
    data () {
      return {
        seller: {}
      }
    },
    mounted() {
      const { NODE_ENV } = process.env;
      document.documentElement.className = NODE_ENV;
    },
    created() {
      this.getSellerInfo()
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    },
    methods: {
      getSellerInfo() {
        // this.axios.get('/api/seller').then(this.getSellerInfoSucc)

        // this.axios({
        //   url: '/data/seller.json',
        //   type: 'get',
        //   dataType: 'json'
        // }).then(this.getSellerInfoSucc)

        this.getSellerInfoSucc(sellerData)
      },
      getSellerInfoSucc(res) {
        // res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.seller = data.seller
        }
      }
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
      border-bottom-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex 1
        text-align center
        font-size 14px
        color: rgb(77, 85, 93)
        .active
          color rgb(240, 20, 20)
</style>