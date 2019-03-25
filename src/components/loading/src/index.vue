<template>
  <div class="loading" :style="{height: `${size}px`, width: `${size}px`}">
    <div class="pointer-wrap" v-for="index in number" :key="index" :style="pointTransform(index)">
      <span class="pointer" :style="animationDelay(index)"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",
  props: {
    number: {
      type: Number,
      default: 12
    },
    radius: {
      type: Number,
      default() {
        return this.size / 2;
      }
    },
    size: {
      type: Number,
      default: 100
    },
    color: {
      type: String,
      default: "#ff84ff"
    },
    order: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      points: []
    };
  },
  computed: {
    pointerStyle() {
      return {
        points: []
      };
    },
    innerOrder() {
      if (this.order) {
        return -1;
      } else {
        return 1;
      }
    }
  },
  methods: {
    pointTransform(i) {
      let rad = (2 * Math.PI * i) / this.number;
      let pointX = this.radius * Math.cos(rad);
      let pointY = this.radius * Math.sin(rad);
      return {
        transform: `translate(${pointX}px , ${pointY}px)`
      };
    },
    animationDelay(i) {
      return {
        animationDelay: `${(this.innerOrder * (i + 1)) / this.number}s`,
        background: this.color
      };
    }
  },
  created() {}
};
</script>

<style lang="less" scoped>
.loading {
  position: relative;

  .pointer-wrap {
    display: inline-block;
    position: absolute;
    height: 10px;
    width: 10px;
    top: 50%;
    left: 50%;
    margin-left: -5px;
    margin-top: -5px;

    .pointer {
      display: inline-block;
      height: 100%;
      width: 100%;
      background: #ff84ff;
      border-radius: 100%;
      animation: ball-spin 1s infinite ease-in-out;
    }
  }
}
@keyframes ball-spin {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(0);
  }

  80% {
    transform: scale(0.8);
  }
}
</style>
