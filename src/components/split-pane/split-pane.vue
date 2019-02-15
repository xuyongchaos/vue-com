<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{ width: oneOffsetLeft }"><slot name="left"></slot></div>
    <div class="pane-trigger" :style="{ left: triggerLeft }" @mousedown="handleMouseDown"></div>
    <div class="pane pane-right" :style="{ left: twoOffsetLeft }"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  props: {
    triggerWidth: {
      type:Number,
      default: 8
    },
    leftOffet: {
      type: Number,
      default: 0.3
    }
  },
  data(){
    return {
      leftOffset_: this.leftOffet,
      canMove: false
    }
  },
  watch: {
    leftOffet (newVal) {
      this.leftOffset_ = newVal
    }
  },
  computed: {
    oneOffsetLeft () {
      return `calc(${this.leftOffset_ * 100}% - ${this.triggerWidth / 2}px)`
    },
    twoOffsetLeft () {
      return `calc(${this.leftOffset_ * 100}% + ${this.triggerWidth / 2}px)`
    },
    triggerLeft () {
      return `calc(${this.leftOffset_ * 100}% - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleMouseDown () {
      this.canMove = true
      document.addEventListener('mousemove', this.handleMouseMove)
      document.addEventListener('mouseup', this.handleMouseUp)
    },
    handleMouseUp () {
      this.canMove = false
    },
    handleMouseMove (event) {
      if (!this.canMove) return
      let outerRect = this.$refs.outer.getBoundingClientRect()
      /**
       * 
       * @description event.pageX获得鼠标相对于页面（考虑滚动条）的偏移量
       * @description getBoundingClientRect 获得元素的width 、height以及距离页面的一些偏移量
       */
      let _leftOffset = Math.max(0, Math.min(event.pageX - outerRect.left, outerRect.width))
      this.leftOffset_ = _leftOffset / outerRect.width
    }
  }
}
</script>

<style lang="less">
.split-pane-wrapper{
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  .pane{
    position: absolute;
    height: 100%;
    top:0;
    &-left{
      background: #efefef;
    }
    &-right{
      right: 0;
      bottom: 0;
      left:30%;
      background: #efefef;
    }
  }
  .pane-trigger{
    width:8px;
    height:100%;
    background:green;
    position: absolute;
    top:0;
    z-index: 10;
  }
}
</style>
