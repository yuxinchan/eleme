<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item, index) in goods"
            :key="index"
            class="menu-item"
        >
          <span class="text border-1px">
            <span
                v-show="item.type > 0"
                class="icon"
                :class="classMap[item.type]"
            ></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: "Goods",
  props: {
    seller: Object
  },
  data () {
    return {
      goods: []
    }
  },
  created() {
    this.getGoodsInfo()
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  methods: {
    getGoodsInfo() {
      this.axios.get('/api/goods').then(this.getGoodsInfoSucc)
    },
    getGoodsInfoSucc(res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.goods = data.goods
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "./../../common/stylus/index.styl"
  .goods
    display flex
    position absolute
    top 174px
    bottom 46px
    width 100%
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      .menu-item
        display table
        height 54px
        width 56px
        padding 0 12px
        line-height 14px
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display table-cell
          width 56px
          vertical-align middle
          font-size 12px
          border-bottom-1px(rgba(7, 17, 27, 0.1))
    .foods-wrapper
      flex 1
</style>