<template>
  <div class="box">
    姓名: <input type="text" :value="value" @input="changeInput">
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    changeInput(e) {
      // 触发父组件传入的事件
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid;
  padding: 20px;
}
</style>