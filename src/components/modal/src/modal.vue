<template>
  <div name="modal" :class="['modal', visible ? 'is-active': '']" ref="modal" v-show="value">
    <div class="modal-card">
      <header class="modal-card-head">
        <button class="delete" aria-label="close" @click="handleCancel">X</button>
        <h4 class="modal-card-title">{{title}}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A aspernatur assumenda, adipisci sapiente quia omnis dolores magni sint fuga delectus beatae harum quaerat. Natus consequuntur laboriosam impedit ex sapiente reprehenderit.
        </h4>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-footer">
        <slot name="footer">
          <Button  type="success" @click="handleOk">确定</Button>
          <Button  @click="handleCancel">取消</Button>
        </slot>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal",
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visible: this.value
    };
  },
  computed: {},
  watch: {
  },
  methods: {
    handleCancel() {
      this.$emit("on-cancel");
    },
    handleOk() {
      this.$emit("on-ok");
    }
  },
  mounted() {
  }
};
</script>

<style scoped lang="less">
@error-color: #f16643;

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  .modal-card {
    box-sizing: border-box;
    position: relative;
    width: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    background: #fff;
    &-head {
      height: 40px;
      padding: 5px;
      box-sizing: border-box;
      border-bottom: solid 1px #dfdfdf;
      overflow: hidden;
      .modal-card-title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
        width: 10rem;
        height: 30px;
        line-height: 30px;
      }
      .delete {
        float: right;
        width: 30px;
        height: 30px;
        outline: none;
        border: none;
        background-color: @error-color;
        &:hover {
          opacity: 0.8;
          cursor: pointer;
        }
      }
    }
    &-body {
      min-height: 200px;
      max-height: 60vh;
      overflow: auto;
      padding: 5px;
    }
    &-footer {
      box-sizing: border-box;
      height: 40px;
      border-top: solid 1px #dfdfdf;
      text-align: right;
      padding: 6px 5px;
    }
  }
}
</style>
