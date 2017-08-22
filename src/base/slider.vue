<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot>
      </slot>
    </div>
    <div class="dots">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import { addClass } from 'common/js/dom'
export default {
  props: {
    // 小圆点
    loop: {
      type: Boolean,
      default: true
    },
    // 是否开启自动轮播
    autoPaly: {
      type: Boolean,
      default: true
    },
    // 定时滚动
    interval: {
      type: Number,
      default: 4000
    }
  },
  mounted() {
    // 初始化BScroll
    setTimeout(()=>{
      this._setSliderWidth()
      this._initSlider()
    },20)
  },
  methods: {
    // 设置宽度
    _setSliderWidth() {
      this.children = this.$refs.sliderGroup.children;
      let width = 0;
      let sliderWidth = this.$refs.slider.clientWidth;
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        addClass(child, 'slider-item');

        child.style.width = sliderWidth + 'px';
        width += sliderWidth
      }
      if (this.loop) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px';

    },
    // 初始化slider
    _initSlider() {
      this.slider=new BScroll(this.$refs.slider,{
        scrollX:true,
        scrollY:true,
        momentun:false,
        snap:true,
        snapLoop:this.loop,
        snapThreshlod:0.3,
        snapSpeed:400,
        click:true
      })
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll
</style>