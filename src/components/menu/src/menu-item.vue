<template>
  <li
    class="nv-menu-item"
    :class="[this.active ? 'nv-menu-item-selected': '']"
    @click="handleClick"
  >
    <a href="#">
      <span v-html="label"></span>
    </a>
  </li>
</template>

<script>
import Emitter from "@/mixins/emitter.js";
export default {
  name: "MenuItem",
  mixins: [Emitter],
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    navActive() {
      return this.$parent.active;
    }
  },
  methods: {
    handleClick() {
      this.dispatch("Menu", "on-menu-item-select", this.name);
    }
  },
  mounted() {
    this.$on("on-update-active-name", name => {
      if (this.name === name) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  }
};
</script>

<style lang="less" scoped>
li.nv-menu-item {
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  list-style-type: none;
  list-style-position: inside;
  box-sizing: border-box;
  cursor: pointer;
  a {
    color: black;
    background-color: transparent;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
  }
}
li.nv-menu-item-selected {
  border-right: solid 3px #1890ff;
  background: #e6f7ff;
  color: #1890ff;
  a {
    color: #1890ff;
  }
}
</style>
