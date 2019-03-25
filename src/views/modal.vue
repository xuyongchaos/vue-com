<template>
  <div>
    <modal :value="modalVis" title="标题" @on-cancel="handleCancel" @on-ok="handleOK"></modal>
    <button @click="toggleModal">toggleModal</button>
  </div>
</template>

<script>
export default {
  name: "modal-view",
  data() {
    return {
      modalVis: false
    };
  },
  methods: {
    toggleModal() {
      this.modalVis = !this.modalVis;
    },
    handleCancel () {
      console.log('on-cancel')
      this.modalVis = false
    },
    handleOK () {
      console.log('on-ok')
      this.modalVis = false
    }
  }
};
</script>

<style>
</style>
