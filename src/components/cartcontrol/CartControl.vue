<template>
  <div class="cartcontrol">
    <transition name="move">
      <div
          @click.stop.prevent="decreaseCart"
          v-show="food.count > 0"
          class="cart-decrease"
      >
        <e-icon
            name="remove_circle_outline"
        >
        </e-icon>
      </div>
    </transition>
    <transition name="count-show">
      <div class="cart-count" v-show="food.count > 0">
        {{food.count}}
      </div>
    </transition>
    <div @click.stop.prevent="addCart">
      <e-icon
          name="add_circle"
          class="cart-add"
      ></e-icon>
    </div>
  </div>
</template>

<script>
  import Icon from './../icon/Icon'
  import Vue from 'vue'
  export default {
    name: "CartControl",
    components: {
      eIcon: Icon
    },
    props: {
      food: Object
    },
    methods: {
      addCart(e) {
        if (!e._constructed) {
          return
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1)
        } else {
          this.food.count++
        }
        this.$emit('cartAdd', e.target)
      },
      decreaseCart(e) {
        if (!e._constructed) {
          return
        }
        if (this.food.count) {
          this.food.count--
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .cartcontrol
    display flex
    font-size: 0
    .cart-decrease
      .e-icon
        display: inline-block
        line-height: 24px
        width 24px
        height 24px
        fill rgb(0, 160, 220)
        transform: rotate(0)
        transition: all 0.3s linear
      &.move-enter-active, &.move-leave-active
        transition: all 0.3s linear
      &.move-enter, &.move-leave-to
        opacity: 0
        transform: translate3d(12px, 0, 0)
        .e-icon
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      min-width: 12px
      line-height: 24px
      text-align: center
      font-size: 10px
      font-weight 700
      color: rgb(147, 153, 159)
      &.count-show-enter-active
        transition: all 0.3s linear
      &.count-show-enter, &.count-show-leave-to
        opacity: 0
    .cart-add
      display: inline-block
      line-height: 24px
      width 24px
      height 24px
      fill rgb(0, 160, 220)
</style>