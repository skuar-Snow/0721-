<template>
  <div class="box">
    <h2>Child1</h2>
    <button @click="changeNum(-1)">-1</button>
    {{num}}
    <button @click="changeNum(1)">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1
    }
  },
  methods: {
    changeNum(n) {
      this.num += n
    }
  },
  created() {
    // window.changeNum = this.changeNum
    // console.log(this.$bus)
    // 往eventBus中注册事件
    this.BusChangeNum = (n) => {
      console.log('有人调用了我的函数', n)
      this.changeNum(n)
    }
    this.$bus.$on('changeNum', this.BusChangeNum)
    // this.$bus.$once('changeNum', (n) => {
    //   console.log(n)
    //   this.changeNum(n)
    // })
  },
  beforeDestroy() {
    console.log('组件销毁了，清除组件内的异步任务')
    this.$bus.$off('changeNum', this.BusChangeNum)
  }
}
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid red;
  padding: 20px;
}
</style>