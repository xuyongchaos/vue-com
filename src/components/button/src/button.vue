<template>
  <button
    :class="[
      'button',
      type ? `is-${type}` : '',
      size ? `is-${size}`: '',
      {
        'is-fullwidth': long,
        'is-rounded' : round,
        'is-loading': loading
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <span v-if="icon" class="icon" style="margin-right:1px;">
      <i :class="['fa', `fa-${icon}`]"></i>
    </span>
    <slot></slot></button>
</template>

<script>
import { oneOf } from "@/utils/help";
export default {
  componentName: "nevis-button",
  props: {
    type: {
      type: String,
      default: "default",
      validator: function(key) {
        return oneOf(key, [
          "default",
          "primary",
          "success",
          "warning",
          "error",
          "info",
          "link"
        ]);
      }
    },
    size: {
      type: String,
      validator: function(key) {
        return oneOf(key, ["small", "medium", "large"]);
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    long: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
</script>
<style scoped lang="less">
@import "~@/assets/style/common.less";

.button {
  padding: 5px 10px;
  border: none;
  box-sizing: border-box;
  opacity: 1;
  &:active,&:focus{
    outline: none;
  }
  &:hover{
    opacity: .85;
    cursor: pointer;
  }
}
.is-default{
  background: @default-color;
  border: solid 1px #dfdfdf;
}
.is-primary{
  background: @primary-color;
}
.is-info{
  background: @info-color;
}
.is-success{
  background: @success-color;
}
.is-warning{
  background: @warning-color;
}
.is-error{
  background: @error-color;
}
.is-link{
  border: solid 1px #dfdfdf;
  color: @primary-color;
}
.is-fullwidth{
  display: block;
}

.is-rounded {
  border-radius: 100%;
}
</style>
