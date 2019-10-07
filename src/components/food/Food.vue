<template>
  <transition name="move">
    <div v-show="showFlag" class="food" ref="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image">
          <div class="back" @click="hide">
            <e-icon name="arrow_lift"></e-icon>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span>
            <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol :food="food" @cartAdd="handlecartAdd"></cartcontrol>
          </div>
          <transition name="fade">
            <div
                @click.stop.prevent="addFirst"
                class="buy"
                v-show="!food.count || food.count===0"
            >
              加入购物车
            </div>
          </transition>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h1 class="title">商品信息</h1>
          <p class="text">{{food.info}}</p>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ratingselect
              :select-type="selectType"
              :only-content="onlyContent"
              :desc="desc"
              :ratings="food.ratings"
              @ratingtypeSelect="handleRatingtypeSelect"
              @contentToggle="handleContentToggle"
          ></ratingselect>
          <div class="rating-wrapper">
            <ul v-show="food.ratings && food.ratings.length">
              <li
                  v-show="needShow(rating.rateType,rating.text)"
                  v-for="(rating, index) in food.ratings"
                  :key="index"
                  class="rating-item border-1px">
                <div class="user">
                  <span class="name">{{rating.username}}</span>
                  <img class="avatar" width="12" height="12" :src="rating.avatar">
                </div>
                <div class="time">{{rating.rateTime | formatDate}}</div>
                <p class="text">
                  <e-icon :name="iconName(rating.rateType)" :class="iconName(rating.rateType)"></e-icon>{{rating.text}}
                </p>
              </li>
            </ul>
            <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Vue from 'vue'
  import BScroll from 'better-scroll'
  import Icon from './../icon/Icon'
  import CartControl from './../cartcontrol/CartControl'
  import RatingSelect from './../ratingselect/RatingSelect'
  import Split from './../split/Split'

  const ALL = 2

  export default {
    name: "Food",
    components: {
      eIcon: Icon,
      cartcontrol: CartControl,
      ratingselect: RatingSelect,
      split: Split
    },
    props: {
      food: Object
    },
    data() {
      return {
        showFlag: false,
        selectType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      }
    },
    methods: {
      show() {
        this.showFlag = true
        this.selectType = ALL
        this.onlyContent = true
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.food, {
              click: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      },
      hide() {
        this.showFlag = false
      },
      addFirst(e) {
        if (!e._constructed) {
          return
        }
        this.$emit('cartAdd', e.target)
        Vue.set(this.food, 'count', 1)
      },
      handlecartAdd(e) {
        this.$emit('cartAdd', e)
      },
      iconName(rateType) {
        return rateType === 0 ? 'thumb_up' : 'thumb_down'
      },
      needShow(type, text) {
        if (this.onlyContent && !text) {
          return false
        }
        if (this.selectType === ALL) {
          return true
        } else {
          return type === this.selectType
        }
      },
      handleRatingtypeSelect(type) {
        this.selectType = type
      },
      handleContentToggle(onlyContent) {
        this.onlyContent = onlyContent
      }
    },
    filters:{
      formatDate:function(value){
        timestampToTime(value)
        function timestampToTime(timestamp) {
          const date = new Date(timestamp)
          const YYYY = date.getFullYear() + '-'
          const MM = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'
          const DD = date.getDate() + ' '
          const hh = date.getHours() + ':'
          const mm = date.getMinutes()
          return YYYY+MM+DD+hh+mm
        }
        return timestampToTime(value)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "./../../common/stylus/index.styl"
  .food
    position fixed
    left 0
    top 0
    bottom 48px
    z-index 30
    width 100%
    background #fff
    &.move-enter-active, &.move-leave-active
      transition all 0.2s linear
      transform translate3d(0, 0, 0)
    &.move-enter, &.move-leave-to
      transform translate3d(100%, 0, 0)
    .image-header
      position relative
      width 100%
      height 0
      padding-top 100%
      img
        position absolute
        top 0
        left 0
        width 100%
        height 100%
      .back
        position absolute
        top 10px
        left 0
        .e-icon
          padding 10px
          width 20px
          height 20px
          fill #fff
    .content
      position relative
      padding 18px
      .title
        line-height 14px
        margin-bottom 8px
        font-size 14px
        font-weight 700
        color rgb(7, 17, 27)
      .detail
        margin-bottom 18px
        line-height 10px
        height 10px
        font-size 0
        .sell-count, .rating
          font-size 10px
          color rgb(147, 153, 159)
        .sell-count
          margin-right 12px
      .price
        font-weight 700
        line-height 24px
        .now
          margin-right 8px
          font-size 14px
          color rgb(240, 20, 20)
        .old
          text-decoration line-through
          font-size 10px
          color rgb(147, 153, 159)
      .cartcontrol-wrapper
        position absolute
        right 12px
        bottom 12px
      .buy
        position absolute
        right 12px
        bottom 12px
        z-index 10
        height 24px
        line-height 24px
        padding 0 12px
        box-sizing border-box
        border-radius 12px
        font-size 10px
        color #fff
        background rgb(0, 160, 220)
        &.fade-enter-active, &.fade-leave-active
          transition all 0.2s
          opacity 1
        &.fade-enter, &.fade-leave-to
          opacity 0
    .info
      padding 18px
      .title
        line-height 14px
        margin-bottom 6px
        font-size 14px
        color rgb(7, 17, 27)
      .text
        line-height 24px
        padding 0 8px
        font-size 12px
        color rgb(77, 85, 93)
    .rating
      padding-top 18px
      .title
        line-height 14px
        margin-left 18px
        font-size 14px
        color rgb(7, 17, 27)
      .rating-wrapper
        padding 0 18px
        .rating-item
          position relative
          padding 16px 0
          border-bottom-1px(rgba(7, 17, 27, 0.1))
          .user
            position absolute
            right 0
            top 16px
            line-height 12px
            font-size 0
            .name
              display inline-block
              margin-right 6px
              vertical-align top
              font-size 10px
              color rgb(147, 153, 159)
            .avatar
              border-radius 50%
          .time
            margin-bottom 6px
            line-height 12px
            font-size 10px
            color rgb(147, 153, 159)
          .text
            display inline-block
            vertical-align top
            line-height 16px
            font-size 12px
            color rgb(7, 17, 27)
            .e-icon
              vertical-align top
              margin-right 4px
              padding 2px 0
              width 12px
              height 12px
            .thumb_up
              fill rgb(0, 160, 220)
            .thumb_down
              fill rgb(147, 153, 159)
        .no-rating
          padding 16px 0
          font-size 12px
          color rgb(147, 153, 159)
</style>