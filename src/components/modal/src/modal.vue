<template>
  <div name="modal" :class="['modal', value ? 'is-active': '']">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{title}}</p>
        <button class="delete" aria-label="close" @click="handleClose"></button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-foot" style="justify-content:flex-end;">
        <slot name="footer">
          <button class="button is-success" @click="handleOk">确定</button>
          <button class="button" @click="handleCancel">取消</button>
        </slot>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'modal',
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    handleClose () {
      this.$emit('input', false)
      this.$emit('on-cancel')
    },
    handleCancel () {
      this.handleClose()
    },
    handleOk () {
      this.$emit('on-ok')
    }
  }
}
</script>
<style scoped>
</style>
