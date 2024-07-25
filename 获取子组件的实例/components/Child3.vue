<template>
  <div class="box">
    <h2>子组件</h2>
    <p>父组件的count: {{count}}</p>
    <input type="text" placeholder="回车之后把数据传给父组件" @keydown.13="keydown">
    <button @click="changeNum(2)">修改num</button>
    <p>num: {{num}}</p>
  </div>
</template>

<script>
export default {
  props: ['count'],
  data() {
    return {
      num: 1
    }
  },
  methods: {
    changeNum(n) {
      this.num += n
    },
    keydown(e) {
      // 调用自定义事件把子组件的数据传给父组件
      this.$emit('change', e.target.value)
    }
  },
  created() {
    console.log(this)
  }
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid red;
  padding: 20px;
}
</style>