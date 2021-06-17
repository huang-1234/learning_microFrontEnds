<template>
  <div>
    <button @click="VgetData">getdata按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null,
    };
  },
  methods: {
    async getData() {
      let toolsModule = await window.System.import("@study/tools");
      this.message = toolsModule.VgetData("vue_foo");
    },
  },
};
</script>

<style>
</style>