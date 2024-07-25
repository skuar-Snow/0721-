<template>
  <div class="box">
    <h2>Child2</h2>
    <button @click="change">+2</button>
  </div>
</template>

<script>
export default {
  methods: {
    change() {
      // console.log(this)
      // 调用eventBus中的事件
      this.$bus.$emit('changeNum', 2)
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid red;
  padding: 20px;
}
</style>