<template>
  <nav class="nv-nav" :style="{'left': stat === 'on' ? 0 : '-300px'}">
    <slot></slot>
    <span class="nv-nav-toggle" @click="toggle" v-html="stat === 'on' ? 'off' : 'on'"></span>
  </nav>
</template>

<script>
import Emitter from "@/mixins/emitter";
export default {
  name: "Menu",
  mixins: [Emitter],
  props: {
    activeName: {
      type: String,
      default: "0"
    }
  },
  data() {
    return {
      stat: "on",
      curActiveName: this.activeName
    };
  },
  watch: {
    activeName(val) {
      this.curActiveName = val;
    },
    curActiveName() {
      this.updateActiveName();
    }
  },
  methods: {
    toggle() {
      this.stat = this.stat === "on" ? "off" : "on";
    },
    updateActiveName() {
      this.broadcast("MenuItem", "on-update-active-name", this.curActiveName);
    }
  },
  mounted() {
    this.updateActiveName();
    this.$on("on-menu-item-select", name => {
      this.curActiveName = name;
      this.$emit("on-select", name);
    });
  }
};
</script>

<style lang="less" scoped>
.nv-nav {
  width: 300px;
  height: 100%;
  position: relative;
  transition-duration: 1s;
  border: solid 1px #dfdfdf;
  box-sizing: border-box;
}
.nv-nav-toggle {
  height: 20px;
  width: 20px;
  line-height: 20px;
  text-align: center;
  position: absolute;
  top: 50%;
  right: -20px;
  margin-top: -20px;
  border: solid 1px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
</style>
