<template>
  <div>
    <p>loading</p>
    <Loading :number="number" :color="color" :radius="radius" :order="order" :size="size"></Loading>
    <p>number: <input type="number" v-model.number="number"/></p>
    <p>size: <input type="number" v-model.number="size"/></p>
    <p>color: <input type="color" v-model="color"/></p>
    <p>radius: <input type="number" v-model.number="radius"/></p>
    <p>order: <input type="checkbox" v-model="order"/></p>
  </div>
</template>

<script>
export default {
  name: "loading-view",
  data() {
    return {
      number: 14,
      size: 100,
      color: "#ff84ff",
      radius: 50,
      order: true
    };
  }
};
</script>

<style>
</style>
