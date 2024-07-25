<template>
  <div>
    <h1>组件</h1>
    <button @click="count++">count: {{count}}</button>
    <p>接收子组件传入的数据：{{childInp}}</p>
    <button @click="getChild">调用子组件的方法</button>
    <Child3 ref="childRef" :count="count" @change="changeInp" />
  </div>
</template>

<script>
import Child3 from './components/Child3.vue'
export default {
  data() {
    return {
      count: 0,
      childInp: ''
    }
  },
  methods: {
    changeInp(val) {
      // val: 子组件传过来的数据
      this.childInp = val
    },
    getChild() {
      console.log('子组件实例对象', this.$refs.childRef)
      // 父组件可以通过ref获取子组件实例对象，调用子组件的数据和方法
      this.$refs.childRef.changeNum(20)
    }
  },
  components: {
    Child3
  }
}
</script>

<style lang="scss" scoped>
</style>